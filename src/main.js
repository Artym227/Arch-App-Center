"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = __importStar(require("path"));
const child_process_1 = require("child_process");
function createWindow() {
    const win = new electron_1.BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, '../public/icons/arch-app-center.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    win.loadFile(path.join(__dirname, '../public/index.html'));
}
electron_1.app.whenReady().then(createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
electron_1.app.on('activate', () => {
    if (electron_1.BrowserWindow.getAllWindows().length === 0)
        createWindow();
});
// Глобальная переменная для хранения текущего процесса
let currentChildProcess = null;
// Проверить доступность pkexec
function checkPkexecAvailable() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            (0, child_process_1.exec)('which pkexec', (err) => {
                resolve(!err);
            });
        });
    });
}
// Получить команду для выполнения с правами администратора
function getAdminCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        const pkexecAvailable = yield checkPkexecAvailable();
        if (pkexecAvailable) {
            return { command: 'pkexec', args: [] };
        }
        else {
            return { command: 'sudo', args: [] };
        }
    });
}
// Отменить текущий процесс
electron_1.ipcMain.handle('cancel-package-action', () => {
    if (currentChildProcess) {
        currentChildProcess.kill('SIGTERM');
        currentChildProcess = null;
        return { success: true };
    }
    return { success: false };
});
// Получить список пакетов pacman
electron_1.ipcMain.handle('get-pacman-packages', () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        (0, child_process_1.exec)("pacman -Qq", (err, stdout, stderr) => {
            if (err)
                return resolve([]);
            const packages = stdout.split('\n').filter(Boolean);
            resolve(packages);
        });
    });
}));
// Получить список пакетов yay (AUR)
electron_1.ipcMain.handle('get-yay-packages', () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        (0, child_process_1.exec)("yay -Qq", (err, stdout, stderr) => {
            if (err)
                return resolve([]);
            const packages = stdout.split('\n').filter(Boolean);
            resolve(packages);
        });
    });
}));
// Установить пакет
electron_1.ipcMain.handle('install-package', (event, pkgName, repo) => __awaiter(void 0, void 0, void 0, function* () {
    const win = electron_1.BrowserWindow.getAllWindows()[0];
    let command;
    let args;
    if (repo === 'AUR') {
        command = 'yay';
        args = ['-S', '--noconfirm', pkgName];
    }
    else {
        const adminCmd = yield getAdminCommand();
        command = adminCmd.command;
        args = [...adminCmd.args, 'pacman', '-S', '--noconfirm', pkgName];
    }
    return new Promise((resolve) => {
        const child = (0, child_process_1.spawn)(command, args, {
            stdio: ['pipe', 'pipe', 'pipe'],
            env: Object.assign(Object.assign({}, process.env), { DISPLAY: process.env.DISPLAY || ':0' })
        });
        // Сохраняем ссылку на процесс для возможности отмены
        currentChildProcess = child;
        let progress = 0;
        let errorOutput = '';
        let isWaitingForPassword = false;
        let passwordEntered = false;
        let progressInterval = null;
        const startProgressInterval = () => {
            progressInterval = setInterval(() => {
                // Не увеличиваем прогресс, если ждем ввода пароля
                if (!isWaitingForPassword) {
                    progress += Math.random() * 10;
                    if (progress > 90)
                        progress = 90;
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
            }
            else {
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
}));
// Удалить пакет
electron_1.ipcMain.handle('remove-package', (event, pkgName, repo) => __awaiter(void 0, void 0, void 0, function* () {
    const win = electron_1.BrowserWindow.getAllWindows()[0];
    let command;
    let args;
    if (repo === 'AUR') {
        command = 'yay';
        args = ['-R', '--noconfirm', pkgName];
    }
    else {
        const adminCmd = yield getAdminCommand();
        command = adminCmd.command;
        args = [...adminCmd.args, 'pacman', '-R', '--noconfirm', pkgName];
    }
    return new Promise((resolve) => {
        const child = (0, child_process_1.spawn)(command, args, {
            stdio: ['pipe', 'pipe', 'pipe'],
            env: Object.assign(Object.assign({}, process.env), { DISPLAY: process.env.DISPLAY || ':0' })
        });
        // Сохраняем ссылку на процесс для возможности отмены
        currentChildProcess = child;
        let progress = 0;
        let errorOutput = '';
        let isWaitingForPassword = false;
        let passwordEntered = false;
        let progressInterval = null;
        const startProgressInterval = () => {
            progressInterval = setInterval(() => {
                // Не увеличиваем прогресс, если ждем ввода пароля
                if (!isWaitingForPassword) {
                    progress += Math.random() * 15;
                    if (progress > 90)
                        progress = 90;
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
            }
            else {
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
}));
