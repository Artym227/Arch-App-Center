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
    
    const startProgressInterval = () => {
      progressInterval = setInterval(() => {
        // Не увеличиваем прогресс, если ждем ввода пароля
        if (!isWaitingForPassword) {
          progress += Math.random() * 10;
          if (progress > 90) progress = 90;
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'install', pkgName });
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
            passwordEntered: true 
          });
        }
        progress = Math.min(progress + 5, 90);
        win.webContents.send('package-progress', { progress: Math.round(progress), action: 'install', pkgName });
      }
    });
    
    child.stderr.on('data', (data) => {
      const error = data.toString();
      errorOutput += error;
      
      // Проверяем, ждем ли мы ввода пароля
      if (error.includes('password') || error.includes('Password') || error.includes('sudo') || error.includes('pkexec')) {
        isWaitingForPassword = true;
        // Останавливаем прогресс при ожидании пароля
        stopProgressInterval();
        win.webContents.send('package-progress', { 
          progress: Math.round(progress), 
          action: 'install', 
          pkgName, 
          waitingForPassword: true 
        });
        return;
      }
      
      if (error.includes('error') || error.includes('failed') || error.includes('not found')) {
        stopProgressInterval();
        currentChildProcess = null;
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName, error: error });
        resolve({ success: false, error: error });
      }
    });
    
    child.on('close', (code) => {
      stopProgressInterval();
      currentChildProcess = null;
      if (code === 0) {
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName, success: true });
        resolve({ success: true });
      } else {
        const errorMessage = errorOutput || `Процесс завершился с кодом ${code}. Возможные причины:\n- Недостаточно прав (нужен пароль администратора)\n- Пакет не найден в репозитории\n- Проблемы с сетью\n- Конфликты зависимостей\n\nПопробуйте запустить в терминале: sudo pacman -S ${pkgName}`;
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName, error: errorMessage });
        resolve({ success: false, error: errorMessage });
      }
    });
    
    child.on('error', (error) => {
      stopProgressInterval();
      currentChildProcess = null;
      win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName, error: error.message });
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
    
    const startProgressInterval = () => {
      progressInterval = setInterval(() => {
        // Не увеличиваем прогресс, если ждем ввода пароля
        if (!isWaitingForPassword) {
          progress += Math.random() * 15;
          if (progress > 90) progress = 90;
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'remove', pkgName });
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
            passwordEntered: true 
          });
        }
        progress = Math.min(progress + 10, 90);
        win.webContents.send('package-progress', { progress: Math.round(progress), action: 'remove', pkgName });
      }
    });
    
    child.stderr.on('data', (data) => {
      const error = data.toString();
      errorOutput += error;
      
      // Проверяем, ждем ли мы ввода пароля
      if (error.includes('password') || error.includes('Password') || error.includes('sudo') || error.includes('pkexec')) {
        isWaitingForPassword = true;
        // Останавливаем прогресс при ожидании пароля
        stopProgressInterval();
        win.webContents.send('package-progress', { 
          progress: Math.round(progress), 
          action: 'remove', 
          pkgName, 
          waitingForPassword: true 
        });
        return;
      }
      
      if (error.includes('error') || error.includes('failed') || error.includes('not found')) {
        stopProgressInterval();
        currentChildProcess = null;
        win.webContents.send('package-progress', { progress: 100, action: 'remove', pkgName, error: error });
        resolve({ success: false, error: error });
      }
    });
    
    child.on('close', (code) => {
      stopProgressInterval();
      currentChildProcess = null;
      if (code === 0) {
        win.webContents.send('package-progress', { progress: 100, action: 'remove', pkgName, success: true });
        resolve({ success: true });
      } else {
        const errorMessage = errorOutput || `Процесс завершился с кодом ${code}. Возможные причины:\n- Недостаточно прав (нужен пароль администратора)\n- Пакет не установлен\n- Зависимости других пакетов\n\nПопробуйте запустить в терминале: sudo pacman -R ${pkgName}`;
        win.webContents.send('package-progress', { progress: 100, action: 'remove', pkgName, error: errorMessage });
        resolve({ success: false, error: errorMessage });
      }
    });
    
    child.on('error', (error) => {
      stopProgressInterval();
      currentChildProcess = null;
      win.webContents.send('package-progress', { progress: 100, action: 'remove', pkgName, error: error.message });
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
    
    const startProgressInterval = () => {
      progressInterval = setInterval(() => {
        if (!isWaitingForPassword) {
          progress += Math.random() * 10;
          if (progress > 90) progress = 90;
          win.webContents.send('package-progress', { progress: Math.round(progress), action: 'install', pkgName: 'arch-audit' });
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
      if (output.includes('downloading') || output.includes('installing')) {
        if (isWaitingForPassword) {
          isWaitingForPassword = false;
          passwordEntered = true;
          startProgressInterval();
          win.webContents.send('package-progress', { 
            progress: Math.round(progress), 
            action: 'install', 
            pkgName: 'arch-audit',
            passwordEntered: true 
          });
        }
        progress = Math.min(progress + 5, 90);
        win.webContents.send('package-progress', { progress: Math.round(progress), action: 'install', pkgName: 'arch-audit' });
      }
    });
    
    child.stderr.on('data', (data) => {
      const error = data.toString();
      errorOutput += error;
      
      if (error.includes('password') || error.includes('Password') || error.includes('sudo') || error.includes('pkexec')) {
        isWaitingForPassword = true;
        stopProgressInterval();
        win.webContents.send('package-progress', { 
          progress: Math.round(progress), 
          action: 'install', 
          pkgName: 'arch-audit',
          waitingForPassword: true 
        });
        return;
      }
      
      if (error.includes('error') || error.includes('failed') || error.includes('not found')) {
        stopProgressInterval();
        currentChildProcess = null;
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName: 'arch-audit', error: error });
        resolve({ success: false, error: error });
      }
    });
    
    child.on('close', (code) => {
      stopProgressInterval();
      currentChildProcess = null;
      if (code === 0) {
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName: 'arch-audit', success: true });
        resolve({ success: true });
      } else {
        const errorMessage = errorOutput || `Процесс завершился с кодом ${code}. Возможные причины:\n- Недостаточно прав (нужен пароль администратора)\n- Пакет не найден в репозитории\n- Проблемы с сетью`;
        win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName: 'arch-audit', error: errorMessage });
        resolve({ success: false, error: errorMessage });
      }
    });
    
    child.on('error', (error) => {
      stopProgressInterval();
      currentChildProcess = null;
      win.webContents.send('package-progress', { progress: 100, action: 'install', pkgName: 'arch-audit', error: error.message });
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