import { app, BrowserWindow, ipcMain, globalShortcut, Menu } from 'electron';
import * as path from 'path';
import { exec, spawn, ChildProcess } from 'child_process';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, '../public/icons/arch-app-center.png'),
    webPreferences: {
      preload: path.join(__dirname, '../build/preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  
  win.loadFile(path.join(__dirname, '../public/index.html'));

  // Открываем DevTools только в режиме разработки
  if (process.env.NODE_ENV === 'development') {
    win.webContents.on('dom-ready', () => {
      console.log('DOM ready, opening DevTools in development mode...');
      try {
        win.webContents.openDevTools();
        console.log('DevTools opened successfully');
      } catch (error) {
        console.error('Failed to open DevTools:', error);
      }
    });

    // Глобальный shortcut для F12 только в режиме разработки
    globalShortcut.register('F12', () => {
      console.log('F12 pressed, opening DevTools...');
      const win = BrowserWindow.getAllWindows()[0];
      if (win) {
        try {
          win.webContents.openDevTools();
          console.log('DevTools opened via F12');
        } catch (error) {
          console.error('Failed to open DevTools via F12:', error);
        }
      }
    });

    // Меню разработчика только в режиме разработки
    const template = [
      {
        label: 'Developer',
        submenu: [
          {
            label: 'Toggle DevTools',
            accelerator: 'F12',
            click: () => {
              const win = BrowserWindow.getAllWindows()[0];
              if (win) {
                try {
                  win.webContents.openDevTools();
                  console.log('DevTools opened via menu');
                } catch (error) {
                  console.error('Failed to open DevTools via menu:', error);
                }
              }
            }
          },
          {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: () => {
              const win = BrowserWindow.getAllWindows()[0];
              if (win) win.reload();
            }
          }
        ]
      }
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Глобальная переменная для хранения текущего процесса
let currentChildProcess: ChildProcess | null = null;

// Проверить доступность pkexec
async function checkPkexecAvailable(): Promise<boolean> {
  return new Promise((resolve) => {
    exec('which pkexec', (err) => {
      resolve(!err);
    });
  });
}

// Получить команду для выполнения с правами администратора
async function getAdminCommand(): Promise<{ command: string; args: string[] }> {
  const pkexecAvailable = await checkPkexecAvailable();
  if (pkexecAvailable) {
    return { command: 'pkexec', args: [] };
  } else {
    return { command: 'sudo', args: [] };
  }
}

// Отменить текущий процесс
ipcMain.handle('cancel-package-action', () => {
  if (currentChildProcess) {
    currentChildProcess.kill('SIGTERM');
    currentChildProcess = null;
    ipcMain.emit('cancel-system-update');
    return { success: true };
  }
  return { success: false };
});

// Получить список пакетов pacman
ipcMain.handle('get-pacman-packages', async () => {
  return new Promise<string[]>((resolve) => {
    exec("pacman -Qq", (err, stdout, stderr) => {
      if (err) return resolve([]);
      const packages = stdout.split('\n').filter(Boolean);
      resolve(packages);
    });
  });
});

// Получить список пакетов yay (AUR)
ipcMain.handle('get-yay-packages', async () => {
  return new Promise<string[]>((resolve) => {
    exec("yay -Qq", (err, stdout, stderr) => {
      if (err) return resolve([]);
      const packages = stdout.split('\n').filter(Boolean);
      resolve(packages);
    });
  });
});

// Установить пакет
ipcMain.handle('install-package', async (event, pkgName: string, repo: string) => {
  const win = BrowserWindow.getAllWindows()[0];
  
  let command: string;
  let args: string[];
  
  if (repo === 'AUR') {
    command = 'yay';
    args = ['-S', '--noconfirm', pkgName];
  } else {
    const adminCmd = await getAdminCommand();
    command = adminCmd.command;
    args = [...adminCmd.args, 'pacman', '-S', '--noconfirm', pkgName];
  }
  
  return new Promise<{ success: boolean; error?: string }>((resolve) => {
    const child = spawn(command, args, { 
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, DISPLAY: process.env.DISPLAY || ':0' }
    });
    
    // Сохраняем ссылку на процесс для возможности отмены
    currentChildProcess = child;
    
    let progress = 0;
    let errorOutput = '';
    let isWaitingForPassword = false;
    let passwordEntered = false;
    let progressInterval: NodeJS.Timeout | null = null;
    let lastLines: string[] = [];
    
    const pushLine = (line: string) => {
      lastLines.push(line);
      if (lastLines.length > 6) lastLines = lastLines.slice(-6);
    };
    
    const startProgressInterval = () => {
      progressInterval = setInterval(() => {
        // Не увеличиваем прогресс, если ждем ввода пароля
        if (!isWaitingForPassword) {
          progress += Math.random() * 10;
          if (progress > 90) progress = 90;
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'install', pkgName, lastLines });
        }
      }, 500);
    };
    
    const stopProgressInterval = () => {
      if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
      }
    };
    
    // Запускаем прогресс
    startProgressInterval();
    
    child.stdout.on('data', (data) => {
      const output = data.toString();
      output.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
      
      const stageInfo = parseStage(output);
      if (stageInfo.stage) {
        let stageProgress = 0;
        if (stageInfo.stage === 'prepare') stageProgress = 10 + Math.random() * 10;
        if (stageInfo.stage === 'download') stageProgress = 30 + Math.random() * 30;
        if (stageInfo.stage === 'install') stageProgress = 70 + Math.random() * 20;
        progress = Math.max(progress, stageProgress);
        win.webContents.send('package-progress', { progress: Math.round(progress), action: 'install', pkgName, stage: stageInfo.stage, stagePkg: stageInfo.pkg, lastLines });
      }
      if (output.includes('downloading') || output.includes('installing')) {
        // Если видим активность после ожидания пароля, значит пароль введен
        if (isWaitingForPassword) {
          isWaitingForPassword = false;
          passwordEntered = true;
          // Возобновляем прогресс после ввода пароля
          startProgressInterval();
          win.webContents.send('package-progress', { 
            progress: Math.round(progress), 
            action: 'install', 
            pkgName, 
            passwordEntered: true,
            lastLines
          });
        }
        progress = Math.min(progress + 5, 90);
        win.webContents.send('package-progress', { progress: Math.round(progress), action: 'install', pkgName, lastLines });
      }
    });
    
    child.stderr.on('data', (data) => {
      const error = data.toString();
      errorOutput += error;
      error.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
      
      // Проверяем, ждем ли мы ввода пароля
      if (error.includes('password') || error.includes('Password') || error.includes('sudo') || error.includes('pkexec')) {
        isWaitingForPassword = true;
        // Останавливаем прогресс при ожидании пароля
        stopProgressInterval();
        win.webContents.send('package-progress', { 
          progress: Math.round(progress), 
          action: 'install', 
          pkgName, 
          waitingForPassword: true,
          lastLines
        });
        return;
      }
      
      if (error.includes('error') || error.includes('failed') || error.includes('not found')) {
        stopProgressInterval();
        currentChildProcess = null;
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName, error: error, lastLines });
        resolve({ success: false, error: error });
      }
    });
    
    child.on('close', (code) => {
      stopProgressInterval();
      currentChildProcess = null;
      if (code === 0) {
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName, success: true, lastLines });
        resolve({ success: true });
      } else {
        const errorMessage = errorOutput || `Процесс завершился с кодом ${code}. Возможные причины:\n- Недостаточно прав (нужен пароль администратора)\n- Пакет не найден в репозитории\n- Проблемы с сетью\n- Конфликты зависимостей\n\nПопробуйте запустить в терминале: sudo pacman -S ${pkgName}`;
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName, error: errorMessage, lastLines });
        resolve({ success: false, error: errorMessage });
      }
    });
    
    child.on('error', (error) => {
      stopProgressInterval();
      currentChildProcess = null;
      win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName, error: error.message, lastLines });
      resolve({ success: false, error: error.message });
    });
  });
});

// Удалить пакет
ipcMain.handle('remove-package', async (event, pkgName: string, repo: string) => {
  const win = BrowserWindow.getAllWindows()[0];
  
  let command: string;
  let args: string[];
  
  if (repo === 'AUR') {
    command = 'yay';
    args = ['-R', '--noconfirm', pkgName];
  } else {
    const adminCmd = await getAdminCommand();
    command = adminCmd.command;
    args = [...adminCmd.args, 'pacman', '-R', '--noconfirm', pkgName];
  }
  
  return new Promise<{ success: boolean; error?: string }>((resolve) => {
    const child = spawn(command, args, { 
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, DISPLAY: process.env.DISPLAY || ':0' }
    });
    
    // Сохраняем ссылку на процесс для возможности отмены
    currentChildProcess = child;
    
    let progress = 0;
    let errorOutput = '';
    let isWaitingForPassword = false;
    let passwordEntered = false;
    let progressInterval: NodeJS.Timeout | null = null;
    let lastLines: string[] = [];
    
    const pushLine = (line: string) => {
      lastLines.push(line);
      if (lastLines.length > 6) lastLines = lastLines.slice(-6);
    };
    
    const startProgressInterval = () => {
      progressInterval = setInterval(() => {
        // Не увеличиваем прогресс, если ждем ввода пароля
        if (!isWaitingForPassword) {
          progress += Math.random() * 15;
          if (progress > 90) progress = 90;
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'remove', pkgName, lastLines });
        }
      }, 300);
    };
    
    const stopProgressInterval = () => {
      if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
      }
    };
    
    // Запускаем прогресс
    startProgressInterval();
    
    child.stdout.on('data', (data) => {
      const output = data.toString();
      output.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
      
      if (output.includes('removing') || output.includes('checking')) {
        // Если видим активность после ожидания пароля, значит пароль введен
        if (isWaitingForPassword) {
          isWaitingForPassword = false;
          passwordEntered = true;
          // Возобновляем прогресс после ввода пароля
          startProgressInterval();
          win.webContents.send('package-progress', { 
            progress: Math.round(progress), 
            action: 'remove', 
            pkgName, 
            passwordEntered: true,
            lastLines
          });
        }
        progress = Math.min(progress + 10, 90);
        win.webContents.send('package-progress', { progress: Math.round(progress), action: 'remove', pkgName, lastLines });
      }
    });
    
    child.stderr.on('data', (data) => {
      const error = data.toString();
      errorOutput += error;
      error.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
      
      // Проверяем, ждем ли мы ввода пароля
      if (error.includes('password') || error.includes('Password') || error.includes('sudo') || error.includes('pkexec')) {
        isWaitingForPassword = true;
        // Останавливаем прогресс при ожидании пароля
        stopProgressInterval();
        win.webContents.send('package-progress', { 
          progress: Math.round(progress), 
          action: 'remove', 
          pkgName, 
          waitingForPassword: true,
          lastLines
        });
        return;
      }
      
      if (error.includes('error') || error.includes('failed') || error.includes('not found')) {
        stopProgressInterval();
        currentChildProcess = null;
        win.webContents.send('package-progress', { progress: 100, action: 'remove', pkgName, error: error, lastLines });
        resolve({ success: false, error: error });
      }
    });
    
    child.on('close', (code) => {
      stopProgressInterval();
      currentChildProcess = null;
      if (code === 0) {
        win.webContents.send('package-progress', { progress: 100, action: 'remove', pkgName, success: true, lastLines });
        resolve({ success: true });
      } else {
        const errorMessage = errorOutput || `Процесс завершился с кодом ${code}. Возможные причины:\n- Недостаточно прав (нужен пароль администратора)\n- Пакет не установлен\n- Зависимости других пакетов\n\nПопробуйте запустить в терминале: sudo pacman -R ${pkgName}`;
        win.webContents.send('package-progress', { progress: 100, action: 'remove', pkgName, error: errorMessage, lastLines });
        resolve({ success: false, error: errorMessage });
      }
    });
    
    child.on('error', (error) => {
      stopProgressInterval();
      currentChildProcess = null;
      win.webContents.send('package-progress', { progress: 100, action: 'remove', pkgName, error: error.message, lastLines });
      resolve({ success: false, error: error.message });
    });
  });
});

// Установить пакет arch-audit
ipcMain.handle('install-arch-audit', async () => {
  const win = BrowserWindow.getAllWindows()[0];
  
  return new Promise<{ success: boolean; error?: string }>(async (resolve) => {
    const adminCmd = await getAdminCommand();
    const command = adminCmd.command;
    const args = [...adminCmd.args, 'pacman', '-S', '--noconfirm', 'arch-audit'];
    
    const child = spawn(command, args, { 
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, DISPLAY: process.env.DISPLAY || ':0' }
    });
    
    // Сохраняем ссылку на процесс для возможности отмены
    currentChildProcess = child;
    
    let progress = 0;
    let errorOutput = '';
    let isWaitingForPassword = false;
    let passwordEntered = false;
    let progressInterval: NodeJS.Timeout | null = null;
    let lastLines: string[] = [];
    
    const pushLine = (line: string) => {
      lastLines.push(line);
      if (lastLines.length > 6) lastLines = lastLines.slice(-6);
    };
    
    const startProgressInterval = () => {
      progressInterval = setInterval(() => {
        if (!isWaitingForPassword) {
          progress += Math.random() * 10;
          if (progress > 90) progress = 90;
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'install', pkgName: 'arch-audit', lastLines });
        }
      }, 500);
    };
    
    const stopProgressInterval = () => {
      if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
      }
    };
    
    // Запускаем прогресс
    startProgressInterval();
    
    child.stdout.on('data', (data) => {
      const output = data.toString();
      output.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
      
      if (output.includes('downloading') || output.includes('installing')) {
        if (isWaitingForPassword) {
          isWaitingForPassword = false;
          passwordEntered = true;
          startProgressInterval();
          win.webContents.send('package-progress', { 
            progress: Math.round(progress), 
            action: 'install', 
            pkgName: 'arch-audit',
            passwordEntered: true,
            lastLines
          });
        }
        progress = Math.min(progress + 5, 90);
        win.webContents.send('package-progress', { progress: Math.round(progress), action: 'install', pkgName: 'arch-audit', lastLines });
      }
    });
    
    child.stderr.on('data', (data) => {
      const error = data.toString();
      errorOutput += error;
      error.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
      
      if (error.includes('password') || error.includes('Password') || error.includes('sudo') || error.includes('pkexec')) {
        isWaitingForPassword = true;
        stopProgressInterval();
        win.webContents.send('package-progress', { 
          progress: Math.round(progress), 
          action: 'install', 
          pkgName: 'arch-audit',
          waitingForPassword: true,
          lastLines
        });
        return;
      }
      
      if (error.includes('error') || error.includes('failed') || error.includes('not found')) {
        stopProgressInterval();
        currentChildProcess = null;
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName: 'arch-audit', error: error, lastLines });
        resolve({ success: false, error: error });
      }
    });
    
    child.on('close', (code) => {
      stopProgressInterval();
      currentChildProcess = null;
      if (code === 0) {
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName: 'arch-audit', success: true, lastLines });
        resolve({ success: true });
      } else {
        const errorMessage = errorOutput || `Процесс завершился с кодом ${code}. Возможные причины:\n- Недостаточно прав (нужен пароль администратора)\n- Пакет не найден в репозитории\n- Проблемы с сетью`;
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName: 'arch-audit', error: errorMessage, lastLines });
        resolve({ success: false, error: errorMessage });
      }
    });
    
    child.on('error', (error) => {
      stopProgressInterval();
      currentChildProcess = null;
      win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName: 'arch-audit', error: error.message, lastLines });
      resolve({ success: false, error: error.message });
    });
  });
});

// Проверить уязвимости через arch-audit
ipcMain.handle('check-vulnerabilities', async (event, packageName: string) => {
  return new Promise((resolve, reject) => {
    exec('arch-audit --json', (err, stdout, stderr) => {
      if (err) {
        resolve({ hasVulnerabilities: false, error: err.message });
        return;
      }
      
      try {
        const result = JSON.parse(stdout);
        const vulnerablePackages = result.packages || [];
        const hasVulnerabilities = vulnerablePackages.some((pkg: any) => 
          pkg.name === packageName || pkg.pkgname === packageName
        );
        
        resolve({ 
          hasVulnerabilities, 
          vulnerablePackages: hasVulnerabilities ? vulnerablePackages : []
        });
      } catch (parseError) {
        resolve({ hasVulnerabilities: false, error: 'Failed to parse arch-audit output' });
      }
    });
  });
}); 

ipcMain.handle('update-system', async () => {
  const win = BrowserWindow.getAllWindows()[0];
  let cancelled = false;
  return new Promise<{ success: boolean; error?: string }>((resolve) => {
    getAdminCommand().then(adminCmd => {
      const command = adminCmd.command;
      // Добавляю --noconfirm для автоматического подтверждения
      const args = [...adminCmd.args, 'pacman', '-Syu', '--noconfirm'];
      const child = spawn(command, args, {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, DISPLAY: process.env.DISPLAY || ':0' }
      });
      currentChildProcess = child;
      let progress = 0;
      let errorOutput = '';
      let isWaitingForPassword = false;
      let passwordEntered = false;
      let progressInterval: NodeJS.Timeout | null = null;
      let lastLines: string[] = [];
      const pushLine = (line: string) => {
        lastLines.push(line);
        if (lastLines.length > 6) lastLines = lastLines.slice(-6);
      };
      const startProgressInterval = () => {
        progressInterval = setInterval(() => {
          if (!isWaitingForPassword && !cancelled) {
            progress += Math.random() * 10;
            if (progress > 90) progress = 90;
            win.webContents.send('package-progress', { progress: Math.round(progress), action: 'system-update', lastLines });
          }
        }, 500);
      };
      const stopProgressInterval = () => {
        if (progressInterval) {
          clearInterval(progressInterval);
          progressInterval = null;
        }
      };
      startProgressInterval();
      child.stdout.on('data', (data) => {
        if (cancelled) return;
        const output = data.toString();
        output.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
        const stageInfo = parseStage(output);
        if (stageInfo.stage) {
          let stageProgress = 0;
          if (stageInfo.stage === 'prepare') stageProgress = 10 + Math.random() * 10;
          if (stageInfo.stage === 'download') stageProgress = 30 + Math.random() * 30;
          if (stageInfo.stage === 'install') stageProgress = 70 + Math.random() * 20;
          progress = Math.max(progress, stageProgress);
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'system-update', stage: stageInfo.stage, stagePkg: stageInfo.pkg || null, lastLines });
        }
        if (output.includes('downloading') || output.includes('installing') || output.includes('upgrading')) {
          if (isWaitingForPassword) {
            isWaitingForPassword = false;
            passwordEntered = true;
            startProgressInterval();
            win.webContents.send('package-progress', {
              progress: Math.round(progress),
              action: 'system-update',
              passwordEntered: true,
              lastLines
            });
          }
          progress = Math.min(progress + 5, 90);
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'system-update', lastLines });
        }
      });
      child.stderr.on('data', (data) => {
        if (cancelled) return;
        const error = data.toString();
        errorOutput += error;
        error.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
        // Не останавливаем процесс на warning
        const lower = error.toLowerCase();
        if (
          (lower.includes('error') && !lower.includes('warning')) ||
          lower.includes('failed') ||
          lower.includes('not found')
        ) {
          stopProgressInterval();
          currentChildProcess = null;
          win.webContents.send('package-progress', { progress: 100, action: 'system-update', error: error, lastLines });
          resolve({ success: false, error: error });
        }
      });
      child.on('close', (code) => {
        stopProgressInterval();
        currentChildProcess = null;
        if (cancelled) {
          win.webContents.send('package-progress', { progress: 0, action: 'system-update', error: 'Операция отменена пользователем.', lastLines });
          resolve({ success: false, error: 'Операция отменена пользователем.' });
          return;
        }
        win.webContents.send('package-progress', { progress: 100, action: 'system-update', lastLines });
        if (code === 0) {
          win.webContents.send('package-progress', { progress: 100, action: 'system-update', success: true, lastLines });
          resolve({ success: true });
        } else {
          const errorMessage = errorOutput || `Процесс завершился с кодом ${code}. Возможные причины:\n- Недостаточно прав (нужен пароль администратора)\n- Проблемы с сетью`;
          win.webContents.send('package-progress', { progress: 100, action: 'system-update', error: errorMessage, lastLines });
          resolve({ success: false, error: errorMessage });
        }
      });
      child.on('error', (error) => {
        stopProgressInterval();
        currentChildProcess = null;
        win.webContents.send('package-progress', { progress: 100, action: 'system-update', error: error.message, lastLines });
        resolve({ success: false, error: error.message });
      });
      // Обработка отмены
      ipcMain.once('cancel-system-update', () => {
        cancelled = true;
        if (currentChildProcess) {
          currentChildProcess.kill('SIGTERM');
          currentChildProcess = null;
        }
        stopProgressInterval();
        win.webContents.send('package-progress', { progress: 0, action: 'system-update', error: 'Операция отменена пользователем.', lastLines });
        resolve({ success: false, error: 'Операция отменена пользователем.' });
      });
    });
  });
});

ipcMain.handle('update-all-packages', async () => {
  const win = BrowserWindow.getAllWindows()[0];
  return new Promise<{ success: boolean; error?: string }>((resolve) => {
    getAdminCommand().then(adminCmd => {
      const command = adminCmd.command;
      const args = [...adminCmd.args, 'pacman', '-Syu'];
      const child = spawn(command, args, {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, DISPLAY: process.env.DISPLAY || ':0' }
      });
      currentChildProcess = child;
      let progress = 0;
      let errorOutput = '';
      let isWaitingForPassword = false;
      let passwordEntered = false;
      let progressInterval: NodeJS.Timeout | null = null;
      let lastLines: string[] = [];
      
      const pushLine = (line: string) => {
        lastLines.push(line);
        if (lastLines.length > 6) lastLines = lastLines.slice(-6);
      };
      
      const startProgressInterval = () => {
        progressInterval = setInterval(() => {
          if (!isWaitingForPassword) {
            progress += Math.random() * 10;
            if (progress > 90) progress = 90;
            win.webContents.send('package-progress', { progress: Math.round(progress), action: 'system-update', lastLines });
          }
        }, 500);
      };
      
      const stopProgressInterval = () => {
        if (progressInterval) {
          clearInterval(progressInterval);
          progressInterval = null;
        }
      };
      
      startProgressInterval();
      
      child.stdout.on('data', (data) => {
        const output = data.toString();
        output.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
        
        const stageInfo = parseStage(output);
        if (stageInfo.stage) {
          let stageProgress = 0;
          if (stageInfo.stage === 'prepare') stageProgress = 10 + Math.random() * 10;
          if (stageInfo.stage === 'download') stageProgress = 30 + Math.random() * 30;
          if (stageInfo.stage === 'install') stageProgress = 70 + Math.random() * 20;
          progress = Math.max(progress, stageProgress);
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'system-update', stage: stageInfo.stage, stagePkg: stageInfo.pkg || null, lastLines });
        }
        if (output.includes('downloading') || output.includes('installing') || output.includes('upgrading')) {
          if (isWaitingForPassword) {
            isWaitingForPassword = false;
            passwordEntered = true;
            startProgressInterval();
            win.webContents.send('package-progress', {
              progress: Math.round(progress),
              action: 'system-update',
              passwordEntered: true,
              lastLines
            });
          }
          progress = Math.min(progress + 5, 90);
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'system-update', lastLines });
        }
      });
      
      child.stderr.on('data', (data) => {
        const error = data.toString();
        errorOutput += error;
        error.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
        
        if (error.includes('password') || error.includes('Password') || error.includes('sudo') || error.includes('pkexec')) {
          isWaitingForPassword = true;
          stopProgressInterval();
          win.webContents.send('package-progress', {
            progress: Math.round(progress),
            action: 'system-update',
            waitingForPassword: true,
            lastLines
          });
          return;
        }
        if (error.includes('error') || error.includes('failed') || error.includes('not found')) {
          stopProgressInterval();
          currentChildProcess = null;
          win.webContents.send('package-progress', { progress: 100, action: 'system-update', error: error, lastLines });
          resolve({ success: false, error: error });
        }
      });
      
      child.on('close', (code) => {
        stopProgressInterval();
        currentChildProcess = null;
        if (code === 0) {
          win.webContents.send('package-progress', { progress: 100, action: 'system-update', success: true, lastLines });
          resolve({ success: true });
        } else {
          const errorMessage = errorOutput || `Процесс завершился с кодом ${code}. Возможные причины:\n- Недостаточно прав (нужен пароль администратора)\n- Проблемы с сетью`;
          win.webContents.send('package-progress', { progress: 100, action: 'system-update', error: errorMessage, lastLines });
          resolve({ success: false, error: errorMessage });
        }
      });
      
      child.on('error', (error) => {
        stopProgressInterval();
        currentChildProcess = null;
        win.webContents.send('package-progress', { progress: 100, action: 'system-update', error: error.message, lastLines });
        resolve({ success: false, error: error.message });
      });
    });
  });
});

ipcMain.handle('update-single-package', async (event, pkgName: string) => {
  const win = BrowserWindow.getAllWindows()[0];
  return new Promise<{ success: boolean; error?: string }>((resolve) => {
    getAdminCommand().then(adminCmd => {
      const command = adminCmd.command;
      const args = [...adminCmd.args, 'pacman', '-S', '--noconfirm', pkgName];
      const child = spawn(command, args, {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, DISPLAY: process.env.DISPLAY || ':0' }
      });
      currentChildProcess = child;
      let progress = 0;
      let errorOutput = '';
      let isWaitingForPassword = false;
      let passwordEntered = false;
      let progressInterval: NodeJS.Timeout | null = null;
      let lastLines: string[] = [];
      
      const pushLine = (line: string) => {
        lastLines.push(line);
        if (lastLines.length > 6) lastLines = lastLines.slice(-6);
      };
      
      // Сразу отправляем этап подготовки
      win.webContents.send('package-progress', { progress: 0, action: 'single-update', pkgName, stage: 'prepare', lastLines });
      
      const startProgressInterval = () => {
        progressInterval = setInterval(() => {
          if (!isWaitingForPassword) {
            progress += Math.random() * 10;
            if (progress > 90) progress = 90;
            win.webContents.send('package-progress', { progress: Math.round(progress), action: 'single-update', pkgName, stage: 'prepare', lastLines });
          }
        }, 500);
      };
      
      const stopProgressInterval = () => {
        if (progressInterval) {
          clearInterval(progressInterval);
          progressInterval = null;
        }
      };
      
      startProgressInterval();
      
      child.stdout.on('data', (data) => {
        const output = data.toString();
        output.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
        
        const stageInfo = parseStage(output);
        if (stageInfo.stage) {
          let stageProgress = 0;
          if (stageInfo.stage === 'prepare') stageProgress = 10 + Math.random() * 10;
          if (stageInfo.stage === 'download') stageProgress = 30 + Math.random() * 30;
          if (stageInfo.stage === 'install') stageProgress = 70 + Math.random() * 20;
          progress = Math.max(progress, stageProgress);
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'single-update', stage: stageInfo.stage, stagePkg: stageInfo.pkg, pkgName, lastLines });
        } else {
          // Даже если не определён stage, отправляем текущее состояние
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'single-update', stage: 'prepare', pkgName, lastLines });
        }
        if (output.includes('downloading') || output.includes('installing') || output.includes('upgrading')) {
          if (isWaitingForPassword) {
            isWaitingForPassword = false;
            passwordEntered = true;
            startProgressInterval();
            win.webContents.send('package-progress', {
              progress: Math.round(progress),
              action: 'single-update',
              pkgName,
              passwordEntered: true,
              stage: 'prepare',
              lastLines
            });
          }
          progress = Math.min(progress + 5, 90);
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'single-update', pkgName, stage: 'prepare', lastLines });
        }
      });
      
      child.stderr.on('data', (data) => {
        const error = data.toString();
        errorOutput += error;
        error.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
        
        if (error.includes('password') || error.includes('Password') || error.includes('sudo') || error.includes('pkexec')) {
          isWaitingForPassword = true;
          stopProgressInterval();
          win.webContents.send('package-progress', {
            progress: Math.round(progress),
            action: 'single-update',
            pkgName,
            waitingForPassword: true,
            stage: 'prepare',
            lastLines
          });
          return;
        }
        if (error.includes('error') && !error.toLowerCase().includes('warning') || error.includes('failed') || error.includes('not found')) {
          stopProgressInterval();
          currentChildProcess = null;
          win.webContents.send('package-progress', { progress: 100, action: 'single-update', pkgName, error: error, stage: 'prepare', lastLines });
          resolve({ success: false, error: error });
        }
      });
      
      child.on('close', (code) => {
        stopProgressInterval();
        currentChildProcess = null;
        if (code === 0) {
          win.webContents.send('package-progress', { progress: 100, action: 'single-update', pkgName, success: true, stage: 'install', lastLines });
          resolve({ success: true });
        } else {
          const errorMessage = errorOutput || `Процесс завершился с кодом ${code}. Возможные причины:\n- Недостаточно прав (нужен пароль администратора)\n- Проблемы с сетью`;
          win.webContents.send('package-progress', { progress: 100, action: 'single-update', pkgName, error: errorMessage, stage: 'prepare', lastLines });
          resolve({ success: false, error: errorMessage });
        }
      });
      
      child.on('error', (error) => {
        stopProgressInterval();
        currentChildProcess = null;
        win.webContents.send('package-progress', { progress: 100, action: 'single-update', pkgName, error: error.message, stage: 'prepare', lastLines });
        resolve({ success: false, error: error.message });
      });
    });
  });
});

ipcMain.handle('refresh-package-databases', async () => {
  const win = BrowserWindow.getAllWindows()[0];
  return new Promise<{ success: boolean; error?: string }>((resolve) => {
    getAdminCommand().then(adminCmd => {
      const command = adminCmd.command;
      const args = [...adminCmd.args, 'pacman', '-Sy'];
      const child = spawn(command, args, {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, DISPLAY: process.env.DISPLAY || ':0' }
      });
      let progress = 0;
      let errorOutput = '';
      let lastLines: string[] = [];
      
      const pushLine = (line: string) => {
        lastLines.push(line);
        if (lastLines.length > 6) lastLines = lastLines.slice(-6);
      };
      
      let progressInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 90) progress = 90;
        win.webContents.send('package-progress', { progress: Math.round(progress), action: 'db-update', lastLines });
      }, 400);
      
      child.stdout.on('data', (data) => {
        const output = data.toString();
        output.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
      });
      
      child.stderr.on('data', (data) => {
        const error = data.toString();
        errorOutput += error;
        error.split('\n').forEach((line: string) => { if (line.trim()) pushLine(line); });
      });
      
      child.on('close', (code) => {
        clearInterval(progressInterval);
        win.webContents.send('package-progress', { progress: 100, action: 'db-update', success: code === 0, lastLines });
        if (code === 0) {
          resolve({ success: true });
        } else {
          resolve({ success: false, error: errorOutput || `pacman -Sy завершился с кодом ${code}` });
        }
      });
    });
  });
}); 

ipcMain.handle('get-outdated-packages', async () => {
  console.log('[AAC] get-outdated-packages handler called');
  return new Promise<{ name: string; version: string; newVersion: string }[]>((resolve) => {
    exec("pacman -Qu", (err, stdout, stderr) => {
      console.log('[AAC] pacman -Qu error:', err);
      console.log('[AAC] pacman -Qu stdout:', stdout);
      console.log('[AAC] pacman -Qu stderr:', stderr);
      // Формат строки: packageName currentVersion -> newVersion
      // Пример: firefox 112.0.2-1 -> 113.0-1
      const lines = stdout.split('\n').filter(Boolean);
      const pkgs = lines.map(line => {
        // Пример строки: firefox 112.0.2-1 -> 113.0-1
        const match = line.match(/^(\S+)\s+(\S+)\s+->\s+(\S+)/);
        if (match) {
          return { name: match[1], version: match[2], newVersion: match[3] };
        }
        return null;
      }).filter(Boolean);
      resolve(pkgs as { name: string; version: string; newVersion: string }[]);
    });
  });
}); 

function parseStage(output: string): { stage: string, pkg?: string } {
  // Русский и английский вывод pacman/yay
  output = output.toLowerCase();
  // Подготовка
  if (output.includes('синхронизация') || output.includes('preparing') || output.includes('checking dependencies') || output.includes('проверка зависимостей') || output.includes('synchronizing')) {
    return { stage: 'prepare' };
  }
  // Загрузка
  if (output.includes('загрузка пакетов') || output.includes('downloading') || output.includes('fetching') || output.includes('получение пакета') || output.includes('получение')) {
    // Пытаемся вытащить имя пакета
    const match = output.match(/downloading ([^ ]+)-|загрузка ([^ ]+)-|получение ([^ ]+)-|fetching ([^ ]+)-/);
    const pkg = match ? (match[1] || match[2] || match[3] || match[4]) : undefined;
    return { stage: 'download', pkg };
  }
  // Установка/обновление
  if (output.includes('установка') || output.includes('installing') || output.includes('обновление') || output.includes('upgrading') || output.includes('checking keys') || output.includes('проверка ключей')) {
    // Пытаемся вытащить имя пакета
    const match = output.match(/installing ([^ ]+)-|установка ([^ ]+)-|upgrading ([^ ]+)-|обновление ([^ ]+)-/);
    const pkg = match ? (match[1] || match[2] || match[3] || match[4]) : undefined;
    return { stage: 'install', pkg };
  }
  return { stage: '' };
} 