"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('api', {
    getPacmanPackages: () => electron_1.ipcRenderer.invoke('get-pacman-packages'),
    getYayPackages: () => electron_1.ipcRenderer.invoke('get-yay-packages'),
    installPackage: (pkgName, repo) => electron_1.ipcRenderer.invoke('install-package', pkgName, repo),
    removePackage: (pkgName, repo) => electron_1.ipcRenderer.invoke('remove-package', pkgName, repo),
    cancelPackageAction: () => electron_1.ipcRenderer.invoke('cancel-package-action'),
    onPackageProgress: (callback) => {
        electron_1.ipcRenderer.on('package-progress', (event, data) => callback(data));
    }
});
