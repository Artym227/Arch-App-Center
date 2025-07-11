const recommendedApps = [
  {
    name: 'Firefox',
    pkgname: 'firefox',
    desc: {
      en: 'Fast and private web browser.',
      ru: 'Быстрый и приватный веб-браузер.',
      zh: '快速且私密的网页浏览器。',
      es: 'Navegador web rápido y privado.',
      ja: '高速でプライバシー重視のウェブブラウザ。',
      pt: 'Navegador web rápido e privado.'
    },
    icon: 'icons/firefox.png'
  },
  {
    name: 'GIMP',
    pkgname: 'gimp',
    desc: {
      en: 'Powerful raster graphics editor.',
      ru: 'Мощный редактор растровой графики.',
      zh: '强大的位图图像编辑器。',
      es: 'Potente editor de gráficos rasterizados.',
      ja: '高機能なラスター画像エディタ。',
      pt: 'Editor de gráficos raster podereso.'
    },
    icon: 'icons/gimp.png'
  },
  {
    name: 'VLC',
    pkgname: 'vlc',
    desc: {
      en: 'Media player for all formats.',
      ru: 'Медиаплеер для всех форматов.',
      zh: '支持所有格式的媒体播放器。',
      es: 'Reproductor multimedia para todos los formatos.',
      ja: 'すべてのフォーマットに対応したメディアプレーヤー。',
      pt: 'Reprodutor de mídia para todos os formatos.'
    },
    icon: 'icons/vlc.png'
  },
  {
    name: 'LibreOffice',
    pkgname: 'libreoffice-fresh',
    desc: {
      en: 'Free office suite.',
      ru: 'Свободный офисный пакет.',
      zh: '自由办公套件。',
      es: 'Suite ofimática libre.',
      ja: 'フリーのオフィススイート。',
      pt: 'Pacote de escritório livre.'
    },
    icon: 'icons/libreoffice.png'
  },
  {
    name: 'FileZilla',
    pkgname: 'filezilla',
    desc: {
      en: 'FTP/SFTP client.',
      ru: 'FTP/SFTP клиент.',
      zh: 'FTP/SFTP 客户端。',
      es: 'Cliente FTP/SFTP.',
      ja: 'FTP/SFTPクライアント。',
      pt: 'Cliente FTP/SFTP.'
    },
    icon: 'icons/FileZilla.png'
  },
  {
    name: 'qBittorrent',
    pkgname: 'qbittorrent',
    desc: {
      en: 'Open source torrent client.',
      ru: 'Торрент-клиент с открытым исходным кодом.',
      zh: '开源的种子客户端。',
      es: 'Cliente torrent de código abierto.',
      ja: 'オープンソースのトレントクライアント。',
      pt: 'Cliente torrent de código aberto.'
    },
    icon: 'icons/qBittorrent.png'
  },
  {
    name: 'Telegram Desktop',
    pkgname: 'telegram-desktop',
    desc: {
      en: 'Desktop client for Telegram.',
      ru: 'Десктопный клиент Telegram.',
      zh: 'Telegram 的桌面客户端。',
      es: 'Cliente de escritorio para Telegram.',
      ja: 'Telegramのデスクトップクライアント。',
      pt: 'Cliente desktop do Telegram.'
    },
    icon: 'icons/telegram.png'
  },
  {
    name: 'Thunderbird',
    pkgname: 'thunderbird',
    desc: {
      en: 'Email client from Mozilla.',
      ru: 'Почтовый клиент от Mozilla.',
      zh: '来自 Mozilla 的邮件客户端。',
      es: 'Cliente de correo de Mozilla.',
      ja: 'Mozilla製のメールクライアント。',
      pt: 'Cliente de e-mail da Mozilla.'
    },
    icon: 'icons/Thunderbird.png'
  },
  {
    name: 'Kdenlive',
    pkgname: 'kdenlive',
    desc: {
      en: 'Non-linear video editor.',
      ru: 'Нелинейный видеоредактор.',
      zh: '非线性视频编辑器。',
      es: 'Editor de video no lineal.',
      ja: 'ノンリニア動画編集ソフト。',
      pt: 'Editor de vídeo não linear.'
    },
    icon: 'icons/kdenlive.png'
  },
  {
    name: 'Inkscape',
    pkgname: 'inkscape',
    desc: {
      en: 'Vector graphics editor.',
      ru: 'Редактор векторной графики.',
      zh: '矢量图形编辑器。',
      es: 'Editor de gráficos vectoriales.',
      ja: 'ベクター画像エディタ。',
      pt: 'Editor de gráficos vetoriais.'
    },
    icon: 'icons/inkscape.png'
  },
  {
    name: 'Audacity',
    pkgname: 'audacity',
    desc: {
      en: 'Audio editor and recorder.',
      ru: 'Редактор и запись аудио.',
      zh: '音频编辑和录制工具。',
      es: 'Editor y grabador de audio.',
      ja: '音声編集・録音ソフト。',
      pt: 'Editor e gravador de áudio.'
    },
    icon: 'icons/audacity.png'
  },
  {
    name: 'Steam',
    pkgname: 'steam',
    desc: {
      en: 'Gaming platform and store.',
      ru: 'Игровая платформа и магазин.',
      zh: '游戏平台和商店。',
      es: 'Plataforma y tienda de juegos.',
      ja: 'ゲームプラットフォームとストア。',
      pt: 'Plataforma e loja de jogos.'
    },
    icon: 'icons/steam.png'
  },
  {
    name: 'OBS Studio',
    pkgname: 'obs-studio',
    desc: {
      en: 'Video recording and streaming.',
      ru: 'Запись и стриминг видео.',
      zh: '视频录制和直播。',
      es: 'Grabación y transmisión de video.',
      ja: '動画録画・配信ソフト。',
      pt: 'Gravação e transmissão de vídeo.'
    },
    icon: 'icons/obs.png'
  },
  {
    name: 'Krita',
    pkgname: 'krita',
    desc: {
      en: 'Graphics editor for artists.',
      ru: 'Графический редактор для художников.',
      zh: '为艺术家设计的图形编辑器。',
      es: 'Editor gráfico para artistas.',
      ja: 'アーティスト向けのグラフィックエディタ。',
      pt: 'Editor gráfico para artistas.'
    },
    icon: 'icons/krita.png'
  },
  {
    name: 'Discord',
    pkgname: 'discord',
    desc: {
      en: 'Voice and text chat for gamers.',
      ru: 'Голосовой и текстовый чат для геймеров.',
      zh: '游戏玩家的语音和文字聊天。',
      es: 'Chat de voz y texto para jugadores.',
      ja: 'ゲーマー向けの音声・テキストチャット。',
      pt: 'Chat de voz e texto para jogadores.'
    },
    icon: 'icons/discord.png'
  },
  {
    name: 'Geary',
    pkgname: 'geary',
    desc: {
      en: 'Email client for GNOME.',
      ru: 'Почтовый клиент для GNOME.',
      zh: 'GNOME 的邮件客户端。',
      es: 'Cliente de correo para GNOME.',
      ja: 'GNOME用のメールクライアント。',
      pt: 'Cliente de e-mail para GNOME.'
    },
    icon: 'icons/geary.png'
  },
  {
    name: 'Shotwell',
    pkgname: 'shotwell',
    desc: {
      en: 'Photo manager for GNOME.',
      ru: 'Фотоменеджер для GNOME.',
      zh: 'GNOME 的照片管理器。',
      es: 'Gestor de fotos para GNOME.',
      ja: 'GNOME用フォトマネージャ。',
      pt: 'Gerenciador de fotos para GNOME.'
    },
    icon: 'icons/shotwell.jpg'
  },
  {
    name: 'SimpleScreenRecorder',
    pkgname: 'simplescreenrecorder',
    desc: {
      en: 'Screen recording.',
      ru: 'Запись экрана.',
      zh: '屏幕录制。',
      es: 'Grabación de pantalla.',
      ja: '画面録画。',
      pt: 'Gravação de tela.'
    },
    icon: 'icons/simplescreenrecorder.png'
  },
  {
    name: 'Deluge',
    pkgname: 'deluge',
    desc: {
      en: 'Another torrent client.',
      ru: 'Ещё один торрент-клиент.',
      zh: '另一个种子客户端。',
      es: 'Otro cliente torrent.',
      ja: 'もう一つのトレントクライアント。',
      pt: 'Outro cliente torrent.'
    },
    icon: 'icons/deluge.svg'
  },
  {
    name: 'Transmission',
    pkgname: 'transmission-gtk',
    desc: {
      en: 'Minimalist torrent client.',
      ru: 'Минималистичный торрент-клиент.',
      zh: '极简的种子客户端。',
      es: 'Cliente torrent minimalista.',
      ja: 'ミニマリストなトレントクライアント。',
      pt: 'Cliente torrent minimalista.'
    },
    icon: 'icons/Transmission.png'
  },
  {
    name: 'KeePassXC',
    pkgname: 'keepassxc',
    desc: {
      en: 'Open source password manager.',
      ru: 'Менеджер паролей с открытым исходным кодом.',
      zh: '开源密码管理器。',
      es: 'Gestor de contraseñas de código abierto.',
      ja: 'オープンソースのパスワードマネージャー。',
      pt: 'Gerenciador de senhas de código aberto.'
    },
    icon: 'icons/duckduckgo.png'
  }
];

// Глобальные переменные для пагинации
let currentSearchResults = [];
let currentPage = 0;
let itemsPerPage = 30;
let lastSearchQuery = '';
let lastPageSource = '';

// Глобальные переменные для пагинации установленных пакетов
let currentInstalledPackages = [];
let currentInstalledPage = 0;
let installedItemsPerPage = 30;

// Глобальные переменные
let currentProcess = null;
let currentPackagePage = null;
let finalizeInterval = null;

// Добавляем HTML элементы для прогресс-бара и ошибок
function addProgressAndErrorElements() {
  if (!document.getElementById('progress-container')) {
    const progressHTML = `
      <div id="progress-container" class="progress-container">
        <div class="progress-header">
          <h3 class="progress-title" id="progress-title">Установка пакета...</h3>
          <span class="progress-percent" id="progress-percent">0%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="progress-fill"></div>
        </div>
        <button class="progress-cancel-btn" id="progress-cancel-btn" onclick="cancelPackageAction()">Отменить</button>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', progressHTML);
  }
  
  if (!document.getElementById('error-overlay')) {
    const errorHTML = `
      <div id="error-overlay" class="error-overlay">
        <div class="error-block">
          <button class="error-close" onclick="hideError()">×</button>
          <h3 class="error-title" id="error-title">Ошибка</h3>
          <p class="error-message" id="error-message">Произошла ошибка при выполнении операции.</p>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', errorHTML);
  }
  
  if (!document.getElementById('success-overlay')) {
    const successHTML = `
      <div id="success-overlay" class="success-overlay">
        <div class="success-block">
          <button class="success-close" onclick="hideSuccess()">×</button>
          <div class="success-icon" id="success-icon">✓</div>
          <h3 class="success-title" id="success-title">Успешно!</h3>
          <p class="success-message" id="success-message">Операция выполнена успешно.</p>
          <div class="success-package">
            <div class="success-package-name" id="success-package-name">Пакет</div>
            <div class="success-package-repo" id="success-package-repo">Репозиторий</div>
          </div>
          <button class="success-btn" onclick="hideSuccess()">OK</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', successHTML);
  }
}

// Функции для работы с прогресс-баром
function showProgress(action, pkgName) {
  let progressBlock = document.getElementById('aac-progress-block');
  if (!progressBlock) {
    progressBlock = document.createElement('div');
    progressBlock.id = 'aac-progress-block';
    progressBlock.style.position = 'fixed';
    progressBlock.style.top = '0';
    progressBlock.style.left = '0';
    progressBlock.style.width = '100vw';
    progressBlock.style.height = '100vh';
    progressBlock.style.background = 'rgba(30,34,40,0.82)';
    progressBlock.style.zIndex = '9999';
    progressBlock.style.display = 'flex';
    progressBlock.style.alignItems = 'center';
    progressBlock.style.justifyContent = 'center';
    progressBlock.innerHTML = `
      <div style="background:#23272e;padding:36px 32px 32px 32px;border-radius:18px;box-shadow:0 2px 16px #0004;min-width:340px;max-width:90vw;">
        <div id="aac-progress-title" style="color:#4fc3f7;font-size:1.18rem;font-weight:600;text-align:center;margin-bottom:18px;"></div>
        <div id="aac-progress-terminal" style="background:#181b20;color:#b0b0b0;font-family:monospace;font-size:1.08rem;padding:16px 20px 12px 20px;border-radius:8px;min-height:120px;max-height:320px;width:600px;max-width:90vw;overflow-y:auto;display:none;margin-top:12px;"></div>
        <div style="text-align:center;margin-top:18px;">
          <button id="aac-progress-cancel-btn" style="background:#e57373;color:#fff;border:none;border-radius:8px;padding:7px 18px;font-size:1rem;font-weight:500;cursor:pointer;box-shadow:0 1px 4px #0002;">Отмена</button>
        </div>
      </div>
    `;
    document.body.appendChild(progressBlock);
    document.getElementById('aac-progress-cancel-btn').onclick = cancelPackageAction;
  }
  progressBlock.style.display = 'flex';
  updateProgress(0);
  updateProgressTitleByStage('prepare', pkgName);
  // Показываем блок терминала всегда
  const terminalBlock = document.getElementById('aac-progress-terminal');
  if (terminalBlock) {
    terminalBlock.style.display = 'block';
    terminalBlock.innerHTML = '';
  }
}

// Модифицирую updateProgress для поддержки вывода последних строк терминала
function updateProgress(progress, stage, stagePkg, lastLines) {
  // Обновляем вывод терминала, если есть
  const terminalBlock = document.getElementById('aac-progress-terminal');
  if (terminalBlock && lastLines && Array.isArray(lastLines)) {
    terminalBlock.style.display = 'block';
    terminalBlock.innerHTML = lastLines.map(line => `<div>${line.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>`).join('');
    terminalBlock.scrollTop = terminalBlock.scrollHeight;
  }
}

// Модифицирую глобальный обработчик прогресса
if (window.api && window.api.onPackageProgress) {
  window.api.onPackageProgress((data) => {
    if (data && typeof data.progress === 'number') {
      updateProgress(data.progress, data.stage, data.stagePkg, data.lastLines);
    }
    if (data && data.waitingForPassword) {
      updateProgressTitle('Ожидание ввода пароля...');
    }
    if (data && data.error) {
      hideProgress();
      showError('Ошибка', data.error);
    }
    if (data && data.success) {
      hideProgress();
      showSuccess(data.action, data.pkgName, data.repo || '');
    }
  });
}

function updateProgressTitleByStage(stage, stagePkg) {
  const title = document.getElementById('progress-title');
  if (!title) return;
  if (title._finalizeAnim) { title._finalizeAnim = false; }
  if (stage === 'prepare') {
    title.textContent = 'Подготовка...';
  } else if (stage === 'download') {
    title.textContent = stagePkg ? `Загрузка: ${stagePkg}` : 'Загрузка пакетов...';
  } else if (stage === 'install') {
    title.textContent = stagePkg ? `Установка: ${stagePkg}` : 'Установка...';
  }
}

function updateProgressTitle(text) {
  const title = document.getElementById('progress-title');
  if (title) title.textContent = text;
}

function hideProgress() {
  const container = document.getElementById('progress-container');
  if (container) {
    container.classList.remove('show');
    container.style.display = 'none';
  }
  const block = document.getElementById('aac-progress-block');
  if (block) block.style.display = 'none';
  currentProcessAction = null;
  currentProcessPkg = null;
  if (finalizeInterval) clearInterval(finalizeInterval);
}

// Функции для работы с блоком ошибок
function showError(title, message) {
  const overlay = document.getElementById('error-overlay');
  const errorTitle = document.getElementById('error-title');
  const errorMessage = document.getElementById('error-message');
  
  if (overlay && errorTitle && errorMessage) {
    errorTitle.textContent = title || 'Ошибка';
    errorMessage.textContent = message || 'Произошла ошибка при выполнении операции.';
    overlay.classList.add('show');
  }
}

function hideError() {
  const overlay = document.getElementById('error-overlay');
  if (overlay) overlay.classList.remove('show');
}

// Функции для работы с окном уведомлений об успехе
function showSuccess(action, pkgName, repo) {
  const overlay = document.getElementById('success-overlay');
  const successTitle = document.getElementById('success-title');
  const successMessage = document.getElementById('success-message');
  const successPackageName = document.getElementById('success-package-name');
  const successPackageRepo = document.getElementById('success-package-repo');
  const successIcon = document.getElementById('success-icon');
  
  if (overlay && successTitle && successMessage && successPackageName && successPackageRepo && successIcon) {
    if (action === 'install') {
      successTitle.textContent = 'Установка завершена!';
      successMessage.textContent = 'Пакет был успешно установлен в систему.';
      successIcon.textContent = '✓';
      successIcon.style.color = '#48bb78';
      // Обновляем надпись на кнопке только при показе окна успеха
      updateInstallRemoveButton(pkgName, repo);
    } else if (action === 'removed') {
      successTitle.textContent = 'Удаление завершено!';
      successMessage.textContent = 'Пакет был успешно удалён из системы.';
      successIcon.textContent = '🗑️';
      successIcon.style.color = '#f56565';
      // Обновляем надпись на кнопке только при показе окна успеха
      updateInstallRemoveButton(pkgName, repo);
    } else if (action === 'system-update') {
      successTitle.textContent = 'Обновление системы завершено!';
      successMessage.textContent = 'Все пакеты были успешно обновлены.';
      successIcon.textContent = '⟳';
      successIcon.style.color = '#48bb78';
    } else if (action === 'single-update') {
      successTitle.textContent = 'Пакет обновлён!';
      successMessage.textContent = `Пакет ${pkgName} был успешно обновлён.`;
      successIcon.textContent = '⟳';
      successIcon.style.color = '#48bb78';
    } else {
      successTitle.textContent = 'Успешно!';
      successMessage.textContent = 'Операция выполнена успешно.';
      successIcon.textContent = '✓';
      successIcon.style.color = '#48bb78';
    }
    
    successPackageName.textContent = pkgName;
    successPackageRepo.textContent = repo ? `Репозиторий: ${repo}` : '';
    overlay.classList.add('show');
  }
}

function hideSuccess() {
  const overlay = document.getElementById('success-overlay');
  if (overlay) overlay.classList.remove('show');
  // После закрытия окна успеха пробуем обновить кнопку, если пользователь на странице пакета
  if (currentPackagePage) {
    updateInstallRemoveButton(currentPackagePage.name, currentPackagePage.repo);
  }
}

// Функция для отмены текущего процесса
function cancelPackageAction() {
  if (window.api && window.api.cancelPackageAction) {
    window.api.cancelPackageAction().then(() => {
    hideProgress();
      showError('Операция отменена', 'Установка/обновление пакета была отменена пользователем.');
    });
    currentProcessAction = null;
    currentProcessPkg = null;
  } else {
    hideProgress();
  }
}

// Функция для установки/удаления пакета
async function handlePackageAction(pkgName, repo, isInstalled) {
  if (isInstalled) {
    // Удаление пакета
    showProgress('remove', pkgName);
    try {
      const result = await window.api.removePackage(pkgName, repo);
      if (result.success) {
        await checkInstalledPackages();
        showSuccess('removed', pkgName, repo);
      } else {
        showError('Remove Error', result.error || 'Failed to remove package');
      }
    } catch (e) {
      showError('Remove Error', e.message || 'Failed to remove package');
    }
    hideProgress();
  } else {
    // Установка пакета - проверяем уязвимости
    try {
      const vulnerabilityCheck = await checkVulnerabilities(pkgName);
      
      if (vulnerabilityCheck.hasVulnerabilities) {
        // Найдены уязвимости - спрашиваем пользователя
        const vulnerablePkg = vulnerabilityCheck.vulnerablePackages.find(pkg => 
          pkg.name === pkgName || pkg.pkgname === pkgName
        );
        
        const warningMessage = `${t('archAuditFoundThreat')}\n\n` +
          `Пакет: ${pkgName}\n` +
          `Уязвимость: ${vulnerablePkg?.advisory || 'Unknown'}\n` +
          `CVE: ${vulnerablePkg?.cve || 'N/A'}`;
        
        if (!confirm(warningMessage)) {
          // Пользователь отменил установку
          return;
        }
      }
      
      // Продолжаем установку
      showProgress('install', pkgName);
      const result = await window.api.installPackage(pkgName, repo);
      if (result.success) {
        await checkInstalledPackages();
        showSuccess('installed', pkgName, repo);
      } else {
        showError('Install Error', result.error || 'Failed to install package');
      }
    } catch (e) {
      showError('Install Error', e.message || 'Failed to install package');
    }
    hideProgress();
  }
}

// --- Локализация ---
const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'ja', label: '日本語' },
  { code: 'pt', label: 'Português' },
];
const i18n = {
  en: {
    welcome: 'Welcome',
    chooseLang: 'Choose your language',
    allowCheck: 'Allow Arch App Center to check downloaded packages?',
    continue: 'Continue',
    recommended: 'Recommended Applications',
    searchPlaceholder: 'Search packages...',
    searchResults: 'Search results',
    notFound: 'Nothing found',
    error: 'Search error. Check your internet.',
    settings: 'Settings',
    back: 'Back to main page',
    install: 'Install',
    copied: 'Copied!',
    version: 'Version',
    license: 'License',
    homepage: 'Homepage',
    depends: 'Depends',
    size: 'Size',
    repo: 'Repository',
    loading: 'Loading...',
    loadingInfo: 'Loading package info...',
    packageNotFound: 'Package not found.',
    about: 'About',
    installedPackages: 'Installed Packages',
    noInstalledPackages: 'No installed packages found.',
    checkNotAllowed: 'Package checking is disabled in settings.',
    found: 'Found',
    packages: 'packages',
    loadMore: 'Load more',
    backToSearch: 'Back to search',
    remove: 'Remove',
    debugCheckAllowed: 'Check allowed',
    debugApiAvailable: 'API available',
    moreOptions: 'More options',
    systemUpdate: 'System update',
    cacheCleanup: 'Cache cleanup',
    dependencyManagement: 'Dependency management',
    restore: 'Restore',
    useArchAudit: 'Use arch-audit to check for vulnerabilities',
    installingArchAudit: 'Installing arch-audit...',
    archAuditInstallError: 'Failed to install arch-audit',
    archAuditEnabled: 'arch-audit enabled',
    archAuditDisabled: 'arch-audit disabled',
    archAuditFoundThreat: 'Arch-audit found a vulnerability in this package. Are you sure you want to continue installation?',
  },
  ru: {
    welcome: 'Добро пожаловать',
    chooseLang: 'Выберите язык',
    allowCheck: 'Разрешить Arch App Center проверять скачанные пакеты?',
    continue: 'Продолжить',
    recommended: 'Рекомендуемые приложения',
    searchPlaceholder: 'Поиск пакетов...',
    searchResults: 'Результаты поиска',
    notFound: 'Ничего не найдено',
    error: 'Ошибка поиска. Проверьте интернет.',
    settings: 'Настройки',
    back: 'На главную',
    install: 'Установить',
    copied: 'Скопировано!',
    version: 'Версия',
    license: 'Лицензия',
    homepage: 'Дом. страница',
    depends: 'Зависимости',
    size: 'Размер',
    repo: 'Репозиторий',
    loading: 'Загрузка...',
    loadingInfo: 'Загрузка информации о пакете...',
    packageNotFound: 'Пакет не найден.',
    about: 'Подробнее',
    installedPackages: 'Установленные пакеты',
    noInstalledPackages: 'Установленные пакеты не найдены.',
    checkNotAllowed: 'Проверка пакетов отключена в настройках.',
    found: 'Найдено',
    packages: 'пакетов',
    loadMore: 'Еще',
    backToSearch: 'Назад к поиску',
    remove: 'Удалить',
    debugCheckAllowed: 'Проверка разрешена',
    debugApiAvailable: 'API доступен',
    moreOptions: 'Дополнительно',
    systemUpdate: 'Обновление системы',
    cacheCleanup: 'Очистка кеша',
    dependencyManagement: 'Управление зависимостями',
    restore: 'Восстановление',
    useArchAudit: 'Использовать arch-audit для проверки уязвимостей',
    installingArchAudit: 'Устанавливается arch-audit...',
    archAuditInstallError: 'Не удалось установить arch-audit',
    archAuditEnabled: 'arch-audit включён',
    archAuditDisabled: 'arch-audit выключен',
    archAuditFoundThreat: 'Arch-audit нашёл опасность в этом пакете. Уверены, что хотите продолжить установку?',
  },
  zh: {
    welcome: '欢迎', 
    chooseLang: '选择你的语言', 
    allowCheck: '允许 Arch App Center 检查已下载的软件包？', 
    continue: '继续', 
    recommended: '推荐应用', 
    searchPlaceholder: '搜索软件包...', 
    searchResults: '搜索结果', 
    notFound: '未找到', 
    error: '搜索错误。请检查网络。', 
    settings: '设置', 
    back: '返回主页', 
    install: '安装', 
    copied: '已复制！', 
    version: '版本', 
    license: '许可证', 
    homepage: '主页', 
    depends: '依赖', 
    size: '大小', 
    repo: '仓库', 
    loading: '加载中...', 
    loadingInfo: '正在加载软件包信息...', 
    packageNotFound: '未找到软件包。', 
    about: '关于',
    installedPackages: '已安装的软件包',
    noInstalledPackages: '未找到已安装的软件包。',
    checkNotAllowed: '在设置中禁用了软件包检查。',
    found: '找到',
    packages: '个软件包',
    loadMore: '加载更多',
    backToSearch: '返回搜索',
    remove: '删除',
    debugCheckAllowed: '检查已允许',
    debugApiAvailable: 'API可用',
    moreOptions: '更多选项',
    systemUpdate: '系统更新',
    cacheCleanup: '缓存清理',
    dependencyManagement: '依赖管理',
    restore: '恢复',
    useArchAudit: '使用 arch-audit 检查漏洞',
    installingArchAudit: '正在安装 arch-audit...',
    archAuditInstallError: '无法安装 arch-audit',
    archAuditEnabled: 'arch-audit 已启用',
    archAuditDisabled: 'arch-audit 已禁用',
    archAuditFoundThreat: 'arch-audit 在软件包中发现漏洞。您确定要继续安装吗？',
  },
  es: {
    welcome: 'Bienvenido', 
    chooseLang: 'Elige tu idioma', 
    allowCheck: '¿Permitir que Arch App Center verifique los paquetes descargados?', 
    continue: 'Continuar', 
    recommended: 'Aplicaciones recomendadas', 
    searchPlaceholder: 'Buscar paquetes...', 
    searchResults: 'Resultados de búsqueda', 
    notFound: 'Nada encontrado', 
    error: 'Error de búsqueda. Verifique su internet.', 
    settings: 'Configuración', 
    back: 'Volver al inicio', 
    install: 'Instalar', 
    copied: '¡Copiado!', 
    version: 'Versión', 
    license: 'Licencia', 
    homepage: 'Página principal', 
    depends: 'Dependencias', 
    size: 'Tamaño', 
    repo: 'Repositorio', 
    loading: 'Cargando...', 
    loadingInfo: 'Cargando información del paquete...', 
    packageNotFound: 'Paquete no encontrado.', 
    about: 'Acerca de',
    installedPackages: 'Paquetes instalados',
    noInstalledPackages: 'No se encontraron paquetes instalados.',
    checkNotAllowed: 'La verificación de paquetes está deshabilitada en la configuración.',
    found: 'Encontrado',
    packages: 'paquetes',
    loadMore: 'Cargar más',
    backToSearch: 'Volver a búsqueda',
    remove: 'Eliminar',
    debugCheckAllowed: 'Verificación permitida',
    debugApiAvailable: 'API disponible',
    moreOptions: 'Más opciones',
    systemUpdate: 'Actualizar sistema',
    cacheCleanup: 'Limpiar caché',
    dependencyManagement: 'Administración de dependencias',
    restore: 'Restaurar',
    useArchAudit: 'Usar arch-audit para comprobar vulnerabilidades',
    installingArchAudit: 'Instalando arch-audit...',
    archAuditInstallError: 'No se pudo instalar arch-audit',
    archAuditEnabled: 'arch-audit habilitado',
    archAuditDisabled: 'arch-audit deshabilitado',
    archAuditFoundThreat: 'arch-audit encontró una vulnerabilidad en este paquete. ¿Está seguro de que desea continuar con la instalación?',
  },
  ja: {
    welcome: 'ようこそ', 
    chooseLang: '言語を選択してください', 
    allowCheck: 'Arch App Centerがダウンロードしたパッケージをチェックすることを許可しますか？', 
    continue: '続行', 
    recommended: 'おすすめアプリ', 
    searchPlaceholder: 'パッケージを検索...', 
    searchResults: '検索結果', 
    notFound: '見つかりません', 
    error: '検索エラー。インターネットを確認してください。', 
    settings: '設定', 
    back: 'メインに戻る', 
    install: 'インストール', 
    copied: 'コピーしました！', 
    version: 'バージョン', 
    license: 'ライセンス', 
    homepage: 'ホームページ', 
    depends: '依存関係', 
    size: 'サイズ', 
    repo: 'リポジトリ', 
    loading: '読み込み中...', 
    loadingInfo: 'パッケージ情報を読み込み中...', 
    packageNotFound: 'パッケージが見つかりません。', 
    about: '詳細',
    installedPackages: 'インストール済みパッケージ',
    noInstalledPackages: 'インストール済みパッケージが見つかりません。',
    checkNotAllowed: '設定でパッケージチェックが無効になっています。',
    found: '見つかりました',
    packages: 'パッケージ',
    loadMore: 'さらに読み込む',
    backToSearch: '検索に戻る',
    remove: '削除',
    debugCheckAllowed: 'チェック許可',
    debugApiAvailable: 'API利用可能',
    moreOptions: 'その他のオプション',
    systemUpdate: 'システムアップデート',
    cacheCleanup: 'キャッシュクリア',
    dependencyManagement: '依存関係管理',
    restore: '復元',
    useArchAudit: '脆弱性をチェックするためにarch-auditを使用',
    installingArchAudit: 'arch-auditをインストール中...',
    archAuditInstallError: 'arch-auditのインストールに失敗',
    archAuditEnabled: 'arch-auditが有効',
    archAuditDisabled: 'arch-auditが無効',
    archAuditFoundThreat: 'このパッケージに脆弱性が見つかりました。インストールを続行してもよろしいですか？',
  },
  pt: {
    welcome: 'Bem-vindo', 
    chooseLang: 'Escolha seu idioma', 
    allowCheck: 'Permitir que o Arch App Center verifique os pacotes baixados?', 
    continue: 'Continuar', 
    recommended: 'Aplicativos recomendados', 
    searchPlaceholder: 'Pesquisar pacotes...', 
    searchResults: 'Resultados da pesquisa', 
    notFound: 'Nada encontrado', 
    error: 'Erro de pesquisa. Verifique sua internet.', 
    settings: 'Configurações', 
    back: 'Voltar ao início', 
    install: 'Instalar', 
    copied: 'Copiado!', 
    version: 'Versão', 
    license: 'Licença', 
    homepage: 'Página inicial', 
    depends: 'Dependências', 
    size: 'Tamanho', 
    repo: 'Repositório', 
    loading: 'Carregando...', 
    loadingInfo: 'Carregando informações do pacote...', 
    packageNotFound: 'Pacote não encontrado.', 
    about: 'Sobre',
    installedPackages: 'Pacotes instalados',
    noInstalledPackages: 'Nenhum pacote instalado encontrado.',
    checkNotAllowed: 'A verificação de pacotes está desabilitada nas configurações.',
    found: 'Encontrado',
    packages: 'pacotes',
    loadMore: 'Carregar mais',
    backToSearch: 'Voltar à pesquisa',
    remove: 'Remover',
    debugCheckAllowed: 'Verificação permitida',
    debugApiAvailable: 'API disponível',
    moreOptions: 'Mais opções',
    systemUpdate: 'Atualizar sistema',
    cacheCleanup: 'Limpar cache',
    dependencyManagement: 'Gerenciamento de dependências',
    restore: 'Restaurar',
    useArchAudit: 'Usar arch-audit para verificar vulnerabilidades',
    installingArchAudit: 'Instalando arch-audit...',
    archAuditInstallError: 'Não foi possível instalar arch-audit',
    archAuditEnabled: 'arch-audit habilitado',
    archAuditDisabled: 'arch-audit desabilitado',
    archAuditFoundThreat: 'arch-audit encontrou uma vulnerabilidade neste pacote. Você tem certeza de que deseja continuar com a instalação?',
  },
};

function getLang() {
  return localStorage.getItem('aac_lang') || 'en';
}
function setLang(lang) {
  localStorage.setItem('aac_lang', lang);
}
function getCheckAllowed() {
  return localStorage.getItem('aac_check_allowed') === 'true';
}
function setCheckAllowed(val) {
  localStorage.setItem('aac_check_allowed', val ? 'true' : 'false');
}
function isFirstRun() {
  return localStorage.getItem('aac_first_run') !== 'false';
}
function setFirstRunDone() {
  localStorage.setItem('aac_first_run', 'false');
}

function t(key) {
  const lang = getLang();
  return (i18n[lang] && i18n[lang][key]) || i18n['en'][key] || key;
}

async function searchAUR(query) {
  const url = `https://aur.archlinux.org/rpc/?v=5&type=search&arg=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data && data.results) {
      return data.results.map(pkg => ({
        name: pkg.Name,
        desc: pkg.Description || '',
        url: `https://aur.archlinux.org/packages/${pkg.Name}/`,
        repo: 'AUR'
      }));
    }
    return [];
  } catch (e) {
    return [];
  }
}

async function searchPacman(query) {
  const url = `https://archlinux.org/packages/search/json/?q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data && data.results) {
      return data.results.map(pkg => ({
        name: pkg.pkgname,
        desc: pkg.pkgdesc || '',
        url: `https://archlinux.org/packages/${pkg.repo}/${pkg.arch}/${pkg.pkgname}/`,
        repo: 'pacman'
      }));
    }
    return [];
  } catch (e) {
    return [];
  }
}

function getRepoForRecommendedApp(appName) {
  // Список популярных приложений, которые есть только в AUR
  const aurOnly = [
    'yay', 'neofetch', 'visual-studio-code-bin', 'google-chrome', 'spotify', 'zoom', 'teamviewer', 'onlyoffice-bin', 'vivaldi', 'megasync', 'postman', 'etcher', 'android-studio', 'insomnia', 'notion-app', 'webstorm', 'pycharm-professional', 'datagrip', 'clion', 'phpstorm', 'rider', 'rubymine', 'goland', 'dbeaver', 'discord-canary', 'telegram-desktop-bin'
  ];
  if (aurOnly.includes(appName)) return 'AUR';
  return 'pacman';
}

function renderWelcomePage() {
  const root = document.getElementById('root');
  if (!root) return;
  let lang = getLang();
  let checkAllowed = getCheckAllowed();
  let archAuditEnabled = getArchAuditEnabled();
  root.innerHTML = `
    <div class="welcome-block">
      <div class="welcome-title">${t('welcome')}</div>
      <div class="lang-select-block">
        <div class="lang-select-label">${t('chooseLang')}</div>
        <select class="lang-select" id="aac-lang-select">
          ${LANGS.map(l => `<option value="${l.code}" ${l.code===lang?'selected':''}>${l.label}</option>`).join('')}
        </select>
      </div>
      <div class="check-block">
        <div class="check-label">${t('allowCheck')}</div>
        <div class="check-square${checkAllowed ? ' checked' : ''}" id="aac-check-square">
          ${checkAllowed ? '<svg viewBox="0 0 20 20"><polyline points="4,11 9,16 16,6" stroke="#181c20" stroke-width="2" fill="none"/></svg>' : ''}
        </div>
      </div>
      <div class="check-block">
        <div class="check-label">${t('useArchAudit')}</div>
        <div class="check-square${archAuditEnabled ? ' checked' : ''}" id="aac-welcome-arch-audit-square">
          ${archAuditEnabled ? '<svg viewBox="0 0 20 20"><polyline points="4,11 9,16 16,6" stroke="#181c20" stroke-width="2" fill="none"/></svg>' : ''}
        </div>
      </div>
      <button class="welcome-continue-btn" id="aac-welcome-continue">${t('continue')}</button>
    </div>
  `;
  document.getElementById('aac-lang-select').onchange = e => {
    setLang(e.target.value);
    renderWelcomePage();
  };
  document.getElementById('aac-check-square').onclick = () => {
    setCheckAllowed(!getCheckAllowed());
    renderWelcomePage();
  };
  document.getElementById('aac-welcome-arch-audit-square').onclick = async () => {
    if (!getArchAuditEnabled()) {
      // Включаем: сначала пробуем установить arch-audit
      const el = document.getElementById('aac-welcome-arch-audit-square');
      if (el) el.innerHTML = '<span style="color:#4fc3f7;font-size:0.9em;">'+t('installingArchAudit')+'</span>';
      try {
        await installArchAudit();
        setArchAuditEnabled(true);
        alert(t('archAuditEnabled'));
      } catch (e) {
        alert(t('archAuditInstallError')+': '+e);
        setArchAuditEnabled(false);
      }
    } else {
      setArchAuditEnabled(false);
      alert(t('archAuditDisabled'));
    }
    renderWelcomePage();
  };
  document.getElementById('aac-welcome-continue').onclick = () => {
    setFirstRunDone();
    renderMainPage();
  };
}

function getArchAuditEnabled() {
  return localStorage.getItem('aac_arch_audit') === '1';
}
function setArchAuditEnabled(val) {
  localStorage.setItem('aac_arch_audit', val ? '1' : '0');
}

function installArchAudit() {
  return new Promise((resolve, reject) => {
    console.log('installArchAudit called');
    console.log('window.api:', window.api);
    console.log('window.api.installArchAudit:', window.api?.installArchAudit);
    
    if (window.api && window.api.installArchAudit) {
      console.log('Starting arch-audit installation...');
      // Показываем прогресс установки arch-audit
      showProgress('install', 'arch-audit');
      
      // Настраиваем слушатель прогресса
      window.api.onPackageProgress((data) => {
        console.log('Package progress:', data);
        if (data.pkgName === 'arch-audit' && data.action === 'install') {
          updateProgress(data.progress, data.stage, data.stagePkg);
          
          if (data.waitingForPassword) {
            updateProgressTitle('Ожидание ввода пароля для arch-audit...');
          } else if (data.passwordEntered) {
            updateProgressTitle('Установка arch-audit...');
          } else if (data.progress > 0) {
            updateProgressTitle('Установка arch-audit...');
          }
          
          if (data.error) {
            hideProgress();
            reject(data.error);
          } else if (data.success) {
            hideProgress();
            resolve('arch-audit installed successfully');
          }
        }
      });
      
      // Запускаем установку
      window.api.installArchAudit().then((result) => {
        console.log('installArchAudit result:', result);
        if (result.success) {
          resolve('arch-audit installed successfully');
        } else {
          reject(result.error || 'Failed to install arch-audit');
        }
      }).catch((error) => {
        console.error('installArchAudit error:', error);
        reject(error);
      });
    } else {
      console.error('window.api or installArchAudit not available');
      reject('arch-audit installation not available');
    }
  });
}

// Функция для проверки уязвимостей через arch-audit
function checkVulnerabilities(packageName) {
  return new Promise((resolve, reject) => {
    if (!getArchAuditEnabled()) {
      resolve({ hasVulnerabilities: false });
      return;
    }

    // Проверяем уязвимости через window.api если доступен
    if (window.api && window.api.checkVulnerabilities) {
      window.api.checkVulnerabilities(packageName).then(resolve).catch(reject);
    } else {
      // Если API недоступен, просто разрешаем установку
      resolve({ hasVulnerabilities: false });
    }
  });
}

function renderSettingsPage() {
  const root = document.getElementById('root');
  if (!root) return;
  let lang = getLang();
  let checkAllowed = getCheckAllowed();
  let archAuditEnabled = getArchAuditEnabled();
  root.innerHTML = `
    <div class="settings-block">
      <div class="settings-title">${t('settings')}</div>
      <div class="settings-section">
        <div class="lang-select-block">
          <div class="lang-select-label">${t('chooseLang')}</div>
          <select class="lang-select" id="settings-lang-select">
            ${LANGS.map(l => `<option value="${l.code}" ${l.code===lang?'selected':''}>${l.label}</option>`).join('')}
          </select>
        </div>
        <div class="check-block">
          <div class="check-label">${t('allowCheck')}</div>
          <div class="check-square${checkAllowed ? ' checked' : ''}" id="settings-check-square">
            ${checkAllowed ? '<svg viewBox="0 0 20 20"><polyline points="4,11 9,16 16,6" stroke="#181c20" stroke-width="2" fill="none"/></svg>' : ''}
          </div>
        </div>
        <div class="check-block">
          <div class="check-label">${t('useArchAudit')}</div>
          <div class="check-square${archAuditEnabled ? ' checked' : ''}" id="settings-arch-audit-square">
            ${archAuditEnabled ? '<svg viewBox="0 0 20 20"><polyline points="4,11 9,16 16,6" stroke="#181c20" stroke-width="2" fill="none"/></svg>' : ''}
          </div>
        </div>
      </div>
      <button class="settings-back-btn" id="settings-back-btn">${t('back')}</button>
    </div>
  `;
  document.getElementById('settings-back-btn').onclick = renderMainPage;
  document.getElementById('settings-lang-select').onchange = e => {
    setLang(e.target.value);
    renderSettingsPage();
  };
  document.getElementById('settings-check-square').onclick = () => {
    setCheckAllowed(!getCheckAllowed());
    renderSettingsPage();
  };
  document.getElementById('settings-arch-audit-square').onclick = async () => {
    if (!getArchAuditEnabled()) {
      // Проверяем установлен ли arch-audit
      await checkInstalledPackages();
      if (isArchAuditInstalled()) {
        setArchAuditEnabled(true);
        renderSettingsPage();
        return;
      }
      // Включаем: сначала пробуем установить arch-audit
      try {
        await installArchAudit();
        setArchAuditEnabled(true);
      } catch (e) {
        setArchAuditEnabled(false);
      }
    } else {
      setArchAuditEnabled(false);
    }
    renderSettingsPage();
  };
}

function renderHeader() {
  return `<div class="header" style="position:relative; display:flex; align-items:center; justify-content:center; min-height:64px;">
    <span class="more-icon" title="${t('moreOptions')}" onclick="window.renderMoreOptionsPage()" style="position:absolute; top:12px; left:16px; cursor:pointer; display:flex; align-items:center;">
      <img src="icons/more.png" alt="more" style="width:32px; height:32px; filter:invert(0.8);">
    </span>
    <svg class="arch-logo" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="height:48px; width:48px;">
      <path d="M32 4L59 60H5L32 4Z" fill="#4fc3f7"/>
      <path d="M32 18L47 50H17L32 18Z" fill="#22262c"/>
    </svg>
    <h1 class="title" style="display:inline-block; position:relative; left:0; right:0; text-align:center; width:100%; font-size:2rem; margin:0;">Arch App Center</h1>
    <span class="settings-icon" title="${t('settings')}" onclick="window.renderSettingsPage()" style="position:absolute; top:12px; right:16px; cursor:pointer; display:flex; align-items:center;">
      <img src="icons/settings.png" alt="settings" style="width:32px; height:32px; filter:invert(0.8);">
    </span>
  </div>`;
}

function renderMainPage() {
  // Сбрасываем поисковый запрос при возврате на главную страницу
  lastSearchQuery = null;
  lastPageSource = 'main';
  
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = `
    ${renderHeader()}
    <form class="search-block" id="search-form">
      <input class="search-input" id="search-input" type="text" placeholder="${t('searchPlaceholder')}" autocomplete="off" />
      <button class="search-btn" type="submit" title="${t('searchResults')}">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#181c20" stroke-width="2" fill="none"/><line x1="16" y1="16" x2="21" y2="21" stroke="#181c20" stroke-width="2"/></svg>
      </button>
    </form>
    <div class="recommend-block">
      <h2 class="recommend-title">${t('recommended')}</h2>
      <div class="recommend-grid">
        ${recommendedApps.map(app => `
          <div class="recommend-app">
            <img class="recommend-app-icon" src="${app.icon}" alt="${app.name}" />
            <div class="recommend-app-title">${app.name}</div>
            <div class="recommend-app-desc">${app.desc[getLang()]}</div>
            <button class="recommend-app-link" onclick="window.renderPackagePage('${app.pkgname}','${getRepoForRecommendedApp(app.pkgname)}')">${t('about')}</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  document.getElementById('search-form').addEventListener('submit', e => {
    e.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (query) renderSearchPage(query);
  });
}

function renderSearchPage(query) {
  // Сохраняем поисковый запрос для возможности возврата
  lastSearchQuery = query;
  lastPageSource = 'search';
  
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = `
    ${renderHeader()}
    <div class="search-header-block">
      <div class="search-header-left">
        <h2 class="search-title">${t('searchResults')}: <span>${query}</span></h2>
        <form class="search-new-form" id="search-new-form">
          <input class="search-new-input" id="search-new-input" type="text" placeholder="${t('searchPlaceholder')}" value="${query}" autocomplete="off" />
          <button class="search-new-btn" type="submit" title="${t('searchResults')}">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#181c20" stroke-width="2" fill="none"/><line x1="16" y1="16" x2="21" y2="21" stroke="#181c20" stroke-width="2"/></svg>
          </button>
        </form>
      </div>
      <div class="search-back-center">
        <button class="search-back-btn" id="back-to-main">${t('back')}</button>
      </div>
    </div>
    <div class="search-results-block" id="search-results-block">
      <div style="text-align:center; color:#4fc3f7; font-size:1.1rem; margin:32px 0;">${t('loading')}</div>
    </div>
  `;
  document.getElementById('back-to-main').onclick = renderMainPage;
  
  // Добавляем обработчик для нового поиска
  document.getElementById('search-new-form').addEventListener('submit', e => {
    e.preventDefault();
    const newQuery = document.getElementById('search-new-input').value.trim();
    if (newQuery) {
      renderSearchPage(newQuery);
    }
  });
  
  doSearch(query);
}

async function doSearch(query) {
  const block = document.getElementById('search-results-block');
  if (!block) return;
  
  // Если это новый поиск, сбрасываем пагинацию
  if (query !== lastSearchQuery) {
    currentPage = 0;
    lastSearchQuery = query;
  }
  
  let aur = [], pacman = [], error = false;
  try {
    [aur, pacman] = await Promise.all([
      searchAUR(query),
      searchPacman(query)
    ]);
  } catch (e) {
    error = true;
  }
  
  const all = [...pacman, ...aur];
  
  // Сохраняем все результаты для пагинации
  currentSearchResults = all;
  
  // Вычисляем, сколько элементов показать
  const startIndex = 0;
  const endIndex = Math.min((currentPage + 1) * itemsPerPage, all.length);
  const displayedResults = all.slice(startIndex, endIndex);
  
  // Проверяем, есть ли еще результаты для показа
  const hasMore = endIndex < all.length;
  
  block.innerHTML = `
    <div class="search-results-info">
      ${error ? t('error') : 
        all.length === 0 ? t('notFound') : 
        `${t('found')} ${all.length} ${t('packages')}`
      }
    </div>
    <ul class="search-results-list">
      ${error ? '<li class="search-result-item">' + t('error') + '</li>' :
        all.length === 0 ? '<li class="search-result-item">' + t('notFound') + '</li>' :
        displayedResults.map(pkg => `
          <li class="search-result-item">
            <div class="search-result-inner">
              <div class="search-result-title">${pkg.name} <span style="font-size:0.9em; color:#4fc3f7; font-weight:400;">[${pkg.repo}]</span></div>
              <div class="search-result-desc">${pkg.desc}</div>
              <button class="search-result-link" onclick="window.renderPackagePage('${pkg.name}','${pkg.repo}')">${t('about')}</button>
            </div>
          </li>
        `).join('')}
    </ul>
    ${hasMore ? `
      <div class="load-more-container">
        <button class="load-more-btn" onclick="loadMoreResults()">
          ${t('loadMore')} (${endIndex}/${all.length})
        </button>
      </div>
    ` : ''}
  `;
}

// Функция для загрузки дополнительных результатов
function loadMoreResults() {
  currentPage++;
  const block = document.getElementById('search-results-block');
  if (!block) return;
  
  const all = currentSearchResults;
  const startIndex = 0;
  const endIndex = Math.min((currentPage + 1) * itemsPerPage, all.length);
  const displayedResults = all.slice(startIndex, endIndex);
  
  // Проверяем, есть ли еще результаты для показа
  const hasMore = endIndex < all.length;
  
  block.innerHTML = `
    <div class="search-results-info">
      ${t('found')} ${all.length} ${t('packages')}
    </div>
    <ul class="search-results-list">
      ${displayedResults.map(pkg => `
        <li class="search-result-item">
          <div class="search-result-inner">
            <div class="search-result-title">${pkg.name} <span style="font-size:0.9em; color:#4fc3f7; font-weight:400;">[${pkg.repo}]</span></div>
            <div class="search-result-desc">${pkg.desc}</div>
            <button class="search-result-link" onclick="window.renderPackagePage('${pkg.name}','${pkg.repo}')">${t('about')}</button>
          </div>
        </li>
      `).join('')}
    </ul>
    ${hasMore ? `
      <div class="load-more-container">
        <button class="load-more-btn" onclick="loadMoreResults()">
          ${t('loadMore')} (${endIndex}/${all.length})
        </button>
      </div>
    ` : ''}
  `;
}

// Функция для получения списка установленных пакетов
async function getInstalledPackages() {
  const installed = localStorage.getItem('aac_installed_packages');
  if (installed) {
    return JSON.parse(installed);
  }
  return { pacman: [], aur: [] };
}

// Функция для проверки и обновления списка установленных пакетов
async function checkInstalledPackages() {
  console.log('checkInstalledPackages called');
  console.log('getCheckAllowed():', getCheckAllowed());
  console.log('window.api:', window.api);
  
  if (!getCheckAllowed() || !window.api) {
    console.log('Skipping check - check not allowed or no API');
    return;
  }
  try {
    console.log('Calling getPacmanPackages...');
    const pacman = await window.api.getPacmanPackages();
    console.log('Pacman packages:', pacman);
    
    console.log('Calling getYayPackages...');
    const aur = await window.api.getYayPackages();
    console.log('AUR packages:', aur);
    
    const installed = {
      pacman: pacman || [],
      aur: aur || []
    };
    console.log('Saving installed packages:', installed);
    localStorage.setItem('aac_installed_packages', JSON.stringify(installed));
    localStorage.setItem('aac_last_check', Date.now().toString());
  } catch (e) {
    console.error('Error checking installed packages:', e);
  }
}

// Функция для проверки, установлен ли пакет
function isPackageInstalled(pkgName, repo) {
  const installed = JSON.parse(localStorage.getItem('aac_installed_packages') || '{"pacman":[],"aur":[]}');
  if (repo === 'AUR') {
    return installed.aur.includes(pkgName);
  } else {
    return installed.pacman.includes(pkgName);
  }
}

// Функция для получения команды установки/удаления
function getPackageCommand(pkgName, repo, isInstalled) {
  if (isInstalled) {
    return repo === 'AUR' ? `yay -R ${pkgName}` : `sudo pacman -R ${pkgName}`;
  } else {
    return repo === 'AUR' ? `yay -S ${pkgName}` : `sudo pacman -S ${pkgName}`;
  }
}

// Функция для получения текста кнопки
function getPackageButtonText(isInstalled) {
  if (isInstalled) {
    return t('remove');
  } else {
    return t('install');
  }
}

// Добавляю функцию для обновления кнопки install/remove на странице пакета
function updateInstallRemoveButton(pkgName, repo) {
  // Проверяем, что мы на странице этого пакета
  if (!currentPackagePage || currentPackagePage.name !== pkgName || currentPackagePage.repo !== repo) return;
  const btn = document.querySelector('.package-install-btn');
  if (!btn) return;
  // Проверяем актуальное состояние (установлен или нет)
  const wasInstalled = btn.getAttribute('data-installed') === '1';
  const isInstalled = isPackageInstalled(pkgName, repo);
  btn.textContent = getPackageButtonText(isInstalled);
  btn.setAttribute('onclick', `handlePackageAction('${pkgName}','${repo}',${isInstalled})`);
  btn.setAttribute('data-installed', isInstalled ? '1' : '0');
  // Обновляем состояние в currentPackagePage
  currentPackagePage.isInstalled = isInstalled;
  // Если только что был установлен (install -> remove), перерисовать страницу
  if (!wasInstalled && isInstalled) {
    setTimeout(() => {
      renderPackagePage(currentPackagePage.name, currentPackagePage.repo);
    }, 100);
  }
}

window.renderPackagePage = async function(name, repo) {
  // Устанавливаем текущую страницу пакета для мгновенного обновления
  currentPackagePage = { name, repo };
  
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = `
    ${renderHeader()}
    <div class="package-block" id="package-block">
      <div style="text-align:center; color:#4fc3f7; font-size:1.1rem; margin:32px 0;">${t('loadingInfo')}</div>
    </div>
  `;
  
  let pkg = null;
  if (repo === 'AUR') {
    const res = await searchAUR(name);
    pkg = res.find(p => p.name === name);
  } else {
    const res = await searchPacman(name);
    pkg = res.find(p => p.name === name);
  }
  
  const block = document.getElementById('package-block');
  if (!block) return;
  if (!pkg) {
    block.innerHTML = '<div style="color:#e57373;">' + t('packageNotFound') + '</div>';
    return;
  }
  
  // Получаем дополнительные поля для AUR/pacman асинхронно
  let extra = {};
  if (repo === 'AUR') {
    const url = `https://aur.archlinux.org/rpc/?v=5&type=info&arg[]=${encodeURIComponent(name)}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.results && data.results[0]) {
        extra = data.results[0];
      }
    } catch (e) {
      console.error('Error fetching AUR info:', e);
    }
  } else if (repo === 'pacman') {
    const url = `https://archlinux.org/packages/search/json/?q=${encodeURIComponent(name)}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.results && data.results.length > 0) {
        extra = data.results.find(p => p.pkgname === name) || {};
      }
    } catch (e) {
      console.error('Error fetching pacman info:', e);
    }
  }
  
  let desc = pkg.desc || extra.Description || extra.pkgdesc || '';
  
  // Проверяем, установлен ли пакет
  const isInstalled = isPackageInstalled(pkg.name, repo);
  const packageCommand = getPackageCommand(pkg.name, repo, isInstalled);
  const buttonText = getPackageButtonText(isInstalled);
  
  // Определяем, нужно ли показывать кнопку "Назад к поиску"
  const showBackToSearch = lastSearchQuery && lastSearchQuery.trim() !== '' && lastPageSource === 'search';
  const showBackToInstalled = lastPageSource === 'installed';
  
  block.innerHTML = `
    <div class="package-title">${pkg.name} <span style="font-size:1rem; color:#4fc3f7; font-weight:400;">[${repo}]</span></div>
    <div class="package-desc">${desc}</div>
    <table class="package-table">
      <tr><td>${t('version')}</td><td>${extra.Version || extra.pkgver || extra.version || 'N/A'}</td></tr>
      <tr><td>${t('license')}</td><td>${extra.License || extra.license || extra.pkglicense || 'N/A'}</td></tr>
      <tr><td>${t('homepage')}</td><td>${extra.URL || extra.url || (extra.URLPath ? `<a href='https://archlinux.org${extra.URLPath}' target='_blank'>${extra.URLPath}</a>` : 'N/A')}</td></tr>
      <tr><td>${t('depends')}</td><td>${(extra.DependsOn || extra.depends || extra.pkgdeps || []).join(', ') || 'N/A'}</td></tr>
      <tr><td>${t('size')}</td><td>${extra.PackageSize ? (extra.PackageSize/1024/1024).toFixed(2)+' MB' : (extra.installed_size ? (extra.installed_size/1024)+' KB' : 'N/A')}</td></tr>
      <tr><td>${t('repo')}</td><td>${repo}</td></tr>
    </table>
    <div class="package-buttons-container">
      <button class="package-install-btn" onclick="handlePackageAction('${pkg.name}','${repo}',${isInstalled})">${buttonText}</button>
      <div class="package-buttons-row ${!showBackToSearch && !showBackToInstalled ? 'single-button' : ''}">
        ${showBackToSearch ? `<button class="package-back-search-btn" onclick="renderSearchPage('${lastSearchQuery}')">${t('backToSearch')}</button>` : ''}
        ${showBackToInstalled ? `<button class="package-back-search-btn" onclick="window.renderInstalledPage()">Назад к пакетам</button>` : ''}
        <button class="package-back-btn" onclick="renderMainPage()" style="${!showBackToSearch && !showBackToInstalled ? 'margin-left: 0;' : ''}">${t('back')}</button>
      </div>
    </div>
  `;
};

window.renderInstalledPage = async function() {
  lastPageSource = 'installed';
  
  // Проверяем, разрешена ли проверка пакетов
  if (!getCheckAllowed()) {
    const root = document.getElementById('root');
    if (!root) return;
    root.innerHTML = `
      ${renderHeader()}
      <div class="search-header-block">
        <div class="search-header-left">
          <h2 class="search-title">${t('installedPackages')}</h2>
        </div>
        <div class="search-back-center">
          <button class="search-back-btn" id="back-to-main">${t('back')}</button>
        </div>
      </div>
      <div class="search-results-block">
        <div style="text-align:center; color:#e57373; font-size:1.1rem; margin:32px 0;">${t('checkNotAllowed')}</div>
      </div>
    `;
    document.getElementById('back-to-main').onclick = renderMainPage;
    return;
  }

  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = `
    ${renderHeader()}
    <div class="search-header-block">
      <div class="search-header-left">
        <h2 class="search-title">${t('installedPackages')}</h2>
      </div>
      <div class="search-back-center">
        <button class="search-back-btn" id="back-to-main">${t('back')}</button>
      </div>
    </div>
    <div class="search-results-block" id="installed-results-block">
      <div style="text-align:center; color:#4fc3f7; font-size:1.1rem; margin:32px 0;">${t('loading')}</div>
    </div>
  `;
  document.getElementById('back-to-main').onclick = renderMainPage;
  
  // Загружаем установленные пакеты
  await loadInstalledPackages();
}

async function loadInstalledPackages() {
  const block = document.getElementById('installed-results-block');
  if (!block) {
    console.error('Block not found!');
    return;
  }
  
  try {
    await checkInstalledPackages();
    const installed = await getInstalledPackages();
    // Объединяем pacman и AUR пакеты в один список
    const allPkgs = [
      ...installed.pacman.map(name => ({ name, repo: 'pacman' })),
      ...installed.aur.map(name => ({ name, repo: 'AUR' }))
    ];
    currentInstalledPackages = allPkgs;
    // Пагинация
    const total = allPkgs.length;
    const totalPages = Math.ceil(total / installedItemsPerPage);
    if (currentInstalledPage >= totalPages) currentInstalledPage = 0;
    const start = currentInstalledPage * installedItemsPerPage;
    const end = Math.min(start + installedItemsPerPage, total);
    const pagePkgs = allPkgs.slice(start, end);
      block.innerHTML = `
      <style>
        .installed-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .installed-item {
          background: #23272e;
          border-radius: 14px;
          box-shadow: 0 2px 8px #0002;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: box-shadow 0.2s, transform 0.15s;
        }
        .installed-item:hover {
          box-shadow: 0 4px 16px #0004;
          transform: translateY(-2px) scale(1.01);
        }
        .installed-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: #2196f3;
          cursor: pointer;
          transition: color 0.2s;
        }
        .installed-title:hover {
          color: #1976d2;
          text-decoration: underline;
        }
        .installed-about-btn {
          background: #2196f3;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 8px 18px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 1px 4px #0001;
          transition: background 0.2s, transform 0.15s;
        }
        .installed-about-btn:hover {
          background: #1976d2;
          transform: scale(1.04);
        }
        .installed-pagination {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin: 24px 0;
        }
        .installed-pagination-btn {
          background: #2196f3;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 7px 18px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 1px 4px #0001;
          transition: background 0.2s, transform 0.15s;
        }
        .installed-pagination-btn:disabled {
          background: #3a4a5a;
          color: #b0b0b0;
          cursor: not-allowed;
        }
      </style>
      <div class="installed-info" style="margin-bottom:18px; text-align:center; font-size:1.18rem; font-weight:600; color:#4fc3f7;">${t('found')} ${total} ${t('packages')}</div>
      <ul class="installed-list">
        ${pagePkgs.length === 0 ? `<li style='color:#e57373;text-align:center;margin:32px 0;'>${t('noInstalledPackages')}</li>` :
          pagePkgs.map(pkg => `
            <li class="installed-item">
              <span class="installed-title" onclick="window.renderPackagePage('${pkg.name}','${pkg.repo}')">${pkg.name} <span style=\"font-size:0.9em; color:#4fc3f7; font-weight:400;\">[${pkg.repo}]</span></span>
              <button class="installed-about-btn" onclick="window.renderPackagePage('${pkg.name}','${pkg.repo}')">${t('about')}</button>
        </li>
      `).join('')}
    </ul>
      <div class="installed-pagination">
        <button class="installed-pagination-btn" id="installed-prev-btn" ${currentInstalledPage === 0 ? 'disabled' : ''}>Назад</button>
        <span style="align-self:center; font-size:1.08rem; color:#4fc3f7; font-weight:500;">Страница ${total === 0 ? 0 : currentInstalledPage + 1} из ${totalPages}</span>
        <button class="installed-pagination-btn" id="installed-next-btn" ${currentInstalledPage >= totalPages - 1 ? 'disabled' : ''}>Далее</button>
      </div>
    `;
    document.getElementById('installed-prev-btn').onclick = () => {
      if (currentInstalledPage > 0) {
        currentInstalledPage--;
        loadInstalledPackages();
      }
    };
    document.getElementById('installed-next-btn').onclick = () => {
      if (currentInstalledPage < totalPages - 1) {
  currentInstalledPage++;
        loadInstalledPackages();
      }
    };
  } catch (e) {
    console.error('Error checking installed packages:', e);
  }
}

// Глобальный обработчик прогресса для всех операций
if (window.api && window.api.onPackageProgress) {
  window.api.onPackageProgress((data) => {
    if (data && typeof data.progress === 'number') {
      updateProgress(data.progress, data.stage, data.stagePkg, data.lastLines);
    }
    if (data && data.waitingForPassword) {
      updateProgressTitle('Ожидание ввода пароля...');
    }
    if (data && data.error) {
      hideProgress();
      showError('Ошибка', data.error);
    }
    if (data && data.success) {
      hideProgress();
      showSuccess(data.action, data.pkgName, data.repo || '');
    }
  });
}

// Удаляю новую функцию renderMoreOptionsPage
// Вставляю старую реализацию:
window.renderMoreOptionsPage = function() {
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = `
    ${renderHeader()}
    <style>
      .more-options-btn {
        font-size: 1.25rem;
        padding: 20px 0;
        background: #2196f3;
        color: #fff;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        box-shadow: 0 2px 8px #0002;
        transition: background 0.2s, transform 0.15s;
      }
      .more-options-btn:hover {
        background: #1976d2;
        transform: translateY(-2px) scale(1.03);
      }
    </style>
    <div class="more-options-block" style="max-width:500px;margin:32px auto 0 auto;padding:32px 24px;background:#23272e;border-radius:18px;box-shadow:0 2px 16px #0002;">
      <h2 class="more-options-title" style="text-align:center;font-size:1.5rem;margin-bottom:32px;">Arch App Center</h2>
      <div class="more-options-buttons" style="display:flex;flex-direction:column;gap:18px;">
        <button class="more-options-btn" onclick="window.renderInstalledPage()">${t('installedPackages')}</button>
        <button class="more-options-btn" onclick="window.renderSystemUpdatePage()">${t('systemUpdate')}</button>
        <button class="more-options-btn" onclick="alert('Функция очистки кеша в разработке')">${t('cacheCleanup')}</button>
        <button class="more-options-btn" onclick="alert('Управление зависимостями в разработке')">${t('dependencyManagement')}</button>
        <button class="more-options-btn" onclick="alert('Резервное копирование в разработке')">backup</button>
        <button class="more-options-btn" onclick="alert('Страница обновления зеркал в разработке')">Обновление зеркал</button>
      </div>
      <div style="text-align:center;margin-top:32px;">
        <button class="search-back-btn" onclick="renderMainPage()">${t('back')}</button>
      </div>
    </div>
  `;
};

window.renderSystemUpdatePage = async function() {
  const root = document.getElementById('root');
  if (!root) return;
  async function reloadPage() {
    await window.renderSystemUpdatePage();
  }
  root.innerHTML = `
    ${renderHeader()}
    <div class="system-update-block" style="max-width:700px;margin:32px auto 0 auto;padding:32px 24px;background:#23272e;border-radius:18px;box-shadow:0 2px 16px #0002;">
      <h2 class="system-update-title" style="text-align:center;font-size:1.5rem;margin-bottom:28px;">${t('systemUpdate')}</h2>
      <div style="display:flex;justify-content:center;margin-bottom:18px;">
        <button class="system-update-btn" id="update-db-btn" style="background:#2196f3;color:#fff;border:none;border-radius:12px;padding:12px 28px;font-size:1.08rem;font-weight:600;box-shadow:0 2px 8px #0002;cursor:pointer;transition:background 0.2s,transform 0.15s;">Обновить базу данных пакетов</button>
      </div>
      <div style="display:flex;justify-content:center;margin-bottom:28px;">
        <button class="system-update-btn" id="update-system-btn" style="background:#2196f3;color:#fff;border:none;border-radius:12px;padding:12px 28px;font-size:1.08rem;font-weight:600;box-shadow:0 2px 8px #0002;cursor:pointer;transition:background 0.2s,transform 0.15s;">Обновить систему</button>
      </div>
      <div id="system-optional-update-list-block" style="margin-top:10px;"></div>
      <div id="system-update-list-block" style="margin-top:30px;"></div>
      <div id="system-update-empty-block" style="margin-top:30px;"></div>
      <div style="text-align:center;margin-top:32px;">
        <button class="search-back-btn" onclick="renderMainPage()">${t('back')}</button>
      </div>
    </div>
  `;
  document.getElementById('update-db-btn').onclick = async () => {
    if (!window.api || !window.api.updateDatabase) return;
    showProgress('system-update', 'db');
    try {
      const result = await window.api.updateDatabase();
      if (result && result.success) {
        showSuccess('system-update', 'База данных', 'pacman');
      } else {
        showError('Ошибка обновления базы', result && result.error ? result.error : 'Не удалось обновить базу данных пакетов');
      }
    } catch (e) {
      showError('Ошибка обновления базы', e.message || 'Не удалось обновить базу данных пакетов');
    }
    hideProgress();
    reloadPage();
  };
  document.getElementById('update-system-btn').onclick = async () => {
    if (!window.api || !window.api.systemUpdate) return;
    showProgress('system-update', 'system');
    try {
      const result = await window.api.systemUpdate();
      if (result && result.success) {
        showSuccess('system-update', 'Система', 'pacman');
      } else {
        showError('Ошибка обновления системы', result && result.error ? result.error : 'Не удалось обновить систему');
      }
    } catch (e) {
      showError('Ошибка обновления системы', e.message || 'Не удалось обновить систему');
    }
    hideProgress();
    reloadPage();
  };
  // Получаем пакеты
  let optionalPkgs = [];
  if (window.api && window.api.getOptionalUpgradablePackages) {
    try {
      optionalPkgs = await window.api.getOptionalUpgradablePackages();
    } catch {}
  }
  let mainPkgs = [];
  if (window.api && window.api.getUpgradablePackages) {
    try {
      mainPkgs = await window.api.getUpgradablePackages();
    } catch {}
  }
  // Рендерим дополнительную таблицу
  const optionalBlock = document.getElementById('system-optional-update-list-block');
  if (optionalBlock) {
    if (optionalPkgs && optionalPkgs.length > 0) {
      optionalBlock.innerHTML = `
        <div style='color:#4fc3f7;text-align:left;margin:18px 0 8px 0;font-size:1.08rem;font-weight:600;'>Можно обновить дополнительно:</div>
        <table class="system-update-table" style="width:100%;border-collapse:separate;border-spacing:0 8px;">
          <tbody>
            ${optionalPkgs.map(pkg => `
              <tr style="background:#23272e;border-radius:10px;box-shadow:0 1px 4px #0002;">
                <td style="padding:8px 0;min-width:140px;max-width:200px;">
                  <span class="system-update-pkg-title" onclick="window.renderPackagePage && window.renderPackagePage('${pkg.name}','${pkg.repo}')" style="color:#2196f3;font-size:1.08rem;font-weight:600;cursor:pointer;">${pkg.name}</span>
                </td>
                <td style="padding:8px 0 8px 32px;text-align:left;color:#b0b0b0;font-size:0.98rem;">${pkg.version} → ${pkg.newVersion}</td>
                <td style="padding:8px 0 8px 0;min-width:110px;text-align:right;">
                  <button class="system-update-single-btn" onclick="updateSinglePackageHandler('${pkg.name}')" style="background:#1976d2;color:#fff;border:none;border-radius:8px;padding:7px 18px;font-size:0.98rem;font-weight:500;cursor:pointer;transition:background 0.2s;">Обновить</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else {
      optionalBlock.innerHTML = '';
    }
  }
  // Рендерим основную таблицу
  const mainBlock = document.getElementById('system-update-list-block');
  if (mainBlock) {
    if (mainPkgs && mainPkgs.length > 0) {
      mainBlock.innerHTML = `
        <table class="system-update-table" style="width:100%;border-collapse:separate;border-spacing:0 8px;">
          <tbody>
            ${mainPkgs.map(pkg => `
              <tr style="background:#23272e;border-radius:10px;box-shadow:0 1px 4px #0002;">
                <td style="padding:8px 0;min-width:140px;max-width:200px;">
                  <span class="system-update-pkg-title" onclick="window.renderPackagePage && window.renderPackagePage('${pkg.name}','${pkg.repo}')" style="color:#2196f3;font-size:1.08rem;font-weight:600;cursor:pointer;">${pkg.name}</span>
                </td>
                <td style="padding:8px 0 8px 32px;text-align:left;color:#b0b0b0;font-size:0.98rem;">${pkg.version} → ${pkg.newVersion}</td>
                <td style="padding:8px 0 8px 0;min-width:110px;text-align:right;">
                  <button class="system-update-single-btn" onclick="updateSinglePackageHandler('${pkg.name}')" style="background:#1976d2;color:#fff;border:none;border-radius:8px;padding:7px 18px;font-size:0.98rem;font-weight:500;cursor:pointer;transition:background 0.2s;">Обновить</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else {
      mainBlock.innerHTML = '';
    }
  }
  // Если нет ни одного пакета — крупное сообщение
  const emptyBlock = document.getElementById('system-update-empty-block');
  if (emptyBlock) {
    if ((!mainPkgs || mainPkgs.length === 0) && (!optionalPkgs || optionalPkgs.length === 0)) {
      emptyBlock.innerHTML = `<div style='color:#4fc3f7;text-align:center;font-size:1.35rem;font-weight:700;margin:40px 0;'>Нет доступных обновлений</div>`;
    } else {
      emptyBlock.innerHTML = '';
    }
  }
};

// Глобальный обработчик для обновления одного пакета
window.updateSinglePackageHandler = async function(pkgName) {
  if (!window.api || !window.api.updateSinglePackage) return;
  showProgress('single-update', pkgName);
  try {
    const result = await window.api.updateSinglePackage(pkgName);
    if (result.success) {
      showSuccess('single-update', pkgName, 'pacman');
      await window.renderSystemUpdatePage();
    } else {
      showError('Ошибка обновления', result.error || 'Не удалось обновить пакет');
    }
  } catch (e) {
    showError('Ошибка обновления', e.message || 'Не удалось обновить пакет');
  }
  hideProgress();
};

document.addEventListener('DOMContentLoaded', () => {
  addProgressAndErrorElements();
  if (isFirstRun()) {
    renderWelcomePage();
  } else {
    renderMainPage();
  }
  checkInstalledPackages();
});

console.log('[AAC] renderer loaded');
console.log('[AAC] window.api:', window.api);
console.log('[AAC] renderSystemUpdatePage called');
console.log('[AAC] calling window.api.getUpgradablePackages');