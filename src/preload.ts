import { contextBridge, ipcRenderer } from 'electron';

// (Весь импорт и функция getUpgradablePackages с exec удалены)

contextBridge.exposeInMainWorld('api', {
  getPacmanPackages: () => ipcRenderer.invoke('get-pacman-packages'),
  getYayPackages: () => ipcRenderer.invoke('get-yay-packages'),
  installPackage: (pkgName: string, repo: string) => ipcRenderer.invoke('install-package', pkgName, repo),
  removePackage: (pkgName: string, repo: string) => ipcRenderer.invoke('remove-package', pkgName, repo),
  cancelPackageAction: () => ipcRenderer.invoke('cancel-package-action'),
  onPackageProgress: (callback: (data: any) => void) => {
    ipcRenderer.on('package-progress', (event, data) => callback(data));
  },
  installArchAudit: () => ipcRenderer.invoke('install-arch-audit'),
  checkVulnerabilities: (packageName: string) => ipcRenderer.invoke('check-vulnerabilities', packageName),
  updateDatabase: () => ipcRenderer.invoke('refresh-package-databases'),
  systemUpdate: () => ipcRenderer.invoke('update-system'),
  getOutdatedPackages: () => ipcRenderer.invoke('get-outdated-packages'),
  updateAllPackages: () => ipcRenderer.invoke('update-all-packages'),
  updateSinglePackage: (pkgName: string) => ipcRenderer.invoke('update-single-package', pkgName),
  getUpgradablePackages: () => ipcRenderer.invoke('get-outdated-packages'),
}); 