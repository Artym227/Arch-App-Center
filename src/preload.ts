import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  getPacmanPackages: () => ipcRenderer.invoke('get-pacman-packages'),
  getYayPackages: () => ipcRenderer.invoke('get-yay-packages'),
  installPackage: (pkgName: string, repo: string) => ipcRenderer.invoke('install-package', pkgName, repo),
  removePackage: (pkgName: string, repo: string) => ipcRenderer.invoke('remove-package', pkgName, repo),
  cancelPackageAction: () => ipcRenderer.invoke('cancel-package-action'),
  onPackageProgress: (callback: (data: any) => void) => {
    ipcRenderer.on('package-progress', (event, data) => callback(data));
  }
}); 