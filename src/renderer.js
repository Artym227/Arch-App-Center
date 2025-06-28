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
  const container = document.getElementById('progress-container');
  const title = document.getElementById('progress-title');
  const percent = document.getElementById('progress-percent');
  const fill = document.getElementById('progress-fill');
  
  if (container && title && percent && fill) {
    title.textContent = action === 'install' ? `Установка ${pkgName}...` : `Удаление ${pkgName}...`;
    percent.textContent = '0%';
    fill.style.width = '0%';
    container.classList.add('show');
  }
}

function updateProgress(progress) {
  const percent = document.getElementById('progress-percent');
  const fill = document.getElementById('progress-fill');
  
  if (percent && fill) {
    percent.textContent = `${progress}%`;
    fill.style.width = `${progress}%`;
  }
}

function updateProgressTitle(title) {
  const titleElement = document.getElementById('progress-title');
  if (titleElement) {
    titleElement.textContent = title;
  }
}

function hideProgress() {
  const container = document.getElementById('progress-container');
  if (container) {
    container.classList.remove('show');
  }
}

// Функции для работы с блоком ошибок
function showError(title, message) {
  const overlay = document.getElementById('error-overlay');
  const errorTitle = document.getElementById('error-title');
  const errorMessage = document.getElementById('error-message');
  
  if (overlay && errorTitle && errorMessage) {
    errorTitle.textContent = title;
    errorMessage.textContent = message;
    overlay.classList.add('show');
  }
}

function hideError() {
  const overlay = document.getElementById('error-overlay');
  if (overlay) {
    overlay.classList.remove('show');
  }
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
    } else {
      successTitle.textContent = 'Удаление завершено!';
      successMessage.textContent = 'Пакет был успешно удален из системы.';
      successIcon.textContent = '🗑️';
      successIcon.style.color = '#f56565';
    }
    
    successPackageName.textContent = pkgName;
    successPackageRepo.textContent = `Репозиторий: ${repo}`;
    overlay.classList.add('show');
  }
}

function hideSuccess() {
  const overlay = document.getElementById('success-overlay');
  if (overlay) {
    overlay.classList.remove('show');
  }
}

// Функция для отмены текущего процесса
function cancelPackageAction() {
  if (currentProcess && window.api) {
    window.api.cancelPackageAction();
    hideProgress();
    currentProcess = null;
  }
}

// Функция для установки/удаления пакета
async function handlePackageAction(pkgName, repo, isInstalled) {
  if (!window.api) {
    showError('Ошибка', 'API недоступен');
    return;
  }
  
  try {
    const action = isInstalled ? 'remove' : 'install';
    showProgress(action, pkgName);
    
    // Сохраняем ссылку на текущий процесс
    currentProcess = { pkgName, repo, action };
    
    // Настраиваем слушатель прогресса
    window.api.onPackageProgress((data) => {
      if (data.pkgName === pkgName && data.action === action) {
        updateProgress(data.progress);
        
        // Обрабатываем ожидание ввода пароля
        if (data.waitingForPassword) {
          updateProgressTitle('Ожидание ввода пароля...');
        } else if (data.passwordEntered) {
          // Пароль введен, возобновляем нормальный заголовок
          const normalTitle = action === 'install' ? `Установка ${pkgName}...` : `Удаление ${pkgName}...`;
          updateProgressTitle(normalTitle);
        } else if (!data.waitingForPassword && !data.passwordEntered && data.progress > 0) {
          // Восстанавливаем нормальный заголовок, если не ждем пароль и прогресс идет
          const normalTitle = action === 'install' ? `Установка ${pkgName}...` : `Удаление ${pkgName}...`;
          updateProgressTitle(normalTitle);
        }
        
        if (data.error) {
          hideProgress();
          currentProcess = null;
          showError(
            action === 'install' ? 'Ошибка установки' : 'Ошибка удаления',
            data.error
          );
        } else if (data.success) {
          // Мгновенно обновляем список пакетов и страницу
          setTimeout(async () => {
            hideProgress();
            currentProcess = null;
            
            // Показываем окно уведомления об успехе
            showSuccess(action, pkgName, repo);
            
            // Обновляем список установленных пакетов
            await checkInstalledPackages();
            
            // Мгновенно обновляем страницу пакета
            if (currentPackagePage) {
              window.renderPackagePage(currentPackagePage.name, currentPackagePage.repo);
            }
          }, 500); // Уменьшаем задержку для мгновенного обновления
        } else if (data.progress === 100 && !data.success) {
          // Если прогресс 100% но нет флага success, ждем немного
          setTimeout(() => {
            hideProgress();
            currentProcess = null;
            // Обновляем список установленных пакетов
            checkInstalledPackages();
            // Обновляем страницу пакета
            if (currentPackagePage) {
              window.renderPackagePage(currentPackagePage.name, currentPackagePage.repo);
            }
          }, 1000);
        }
      }
    });
    
    // Выполняем действие
    const result = isInstalled 
      ? await window.api.removePackage(pkgName, repo)
      : await window.api.installPackage(pkgName, repo);
    
    if (!result.success) {
      hideProgress();
      currentProcess = null;
      showError(
        action === 'install' ? 'Ошибка установки' : 'Ошибка удаления',
        result.error || 'Неизвестная ошибка'
      );
    }
    
  } catch (error) {
    hideProgress();
    currentProcess = null;
    showError('Ошибка', error.message || 'Произошла ошибка при выполнении операции');
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
  document.getElementById('aac-welcome-continue').onclick = () => {
    setFirstRunDone();
    renderMainPage();
  };
}

function renderSettingsPage() {
  const root = document.getElementById('root');
  if (!root) return;
  let lang = getLang();
  let checkAllowed = getCheckAllowed();
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
}

function renderHeader() {
  return `<div class="header" style="position:relative; display:flex; align-items:center; justify-content:center; min-height:64px;">
    <span class="installed-icon" title="${t('installedPackages')}" onclick="window.renderInstalledPage()" style="position:absolute; top:12px; left:16px; cursor:pointer; display:flex; align-items:center;">
      <img src="icons/installed.webp" alt="installed" style="width:32px; height:32px; filter:invert(0.8);">
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
  
  // Получаем дополнительные поля для AUR
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
  }
  
  // Получаем дополнительные поля для pacman
  if (repo === 'pacman') {
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
        ${showBackToInstalled ? `<button class="package-back-search-btn" onclick="window.renderInstalledPage()">${t('back')}</button>` : ''}
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
  
  console.log('loadInstalledPackages called');
  console.log('getCheckAllowed():', getCheckAllowed());
  console.log('window.api:', window.api);
  
  try {
    // Обновляем список установленных пакетов
    console.log('Calling checkInstalledPackages...');
    await checkInstalledPackages();
    
    console.log('Getting installed packages from localStorage...');
    const installed = await getInstalledPackages();
    console.log('Installed packages from localStorage:', installed);
    
    const allPackages = [
      ...installed.pacman.map(name => ({ name, repo: 'pacman' })),
      ...installed.aur.map(name => ({ name, repo: 'AUR' }))
    ];
    
    console.log('All packages:', allPackages);
    
    if (allPackages.length === 0) {
      console.log('No packages found, showing message');
      block.innerHTML = `
        <div style="text-align:center; color:#b0bac9; font-size:1.1rem; margin:32px 0;">
          ${t('noInstalledPackages')}<br>
          <small style="color:#666;">${t('debugCheckAllowed')}: ${getCheckAllowed()}, ${t('debugApiAvailable')}: ${!!window.api}</small>
        </div>
      `;
      return;
    }
    
    // Сохраняем все пакеты для пагинации
    currentInstalledPackages = allPackages;
    currentInstalledPage = 0;
    
    // Показываем первые 30 пакетов
    await displayInstalledPackagesPage();
    
  } catch (e) {
    block.innerHTML = `
      <div style="text-align:center; color:#e57373; font-size:1.1rem; margin:32px 0;">${t('error')}</div>
    `;
  }
}

// Функция для отображения страницы установленных пакетов
async function displayInstalledPackagesPage() {
  const block = document.getElementById('installed-results-block');
  if (!block) return;
  
  const allPackages = currentInstalledPackages;
  const startIndex = 0;
  const endIndex = Math.min((currentInstalledPage + 1) * installedItemsPerPage, allPackages.length);
  const displayedPackages = allPackages.slice(startIndex, endIndex);
  
  // Проверяем, есть ли еще пакеты для показа
  const hasMore = endIndex < allPackages.length;
  
  // Показываем информацию о количестве пакетов
  block.innerHTML = `
    <div class="search-results-info">
      ${t('found')} ${allPackages.length} ${t('packages')}
    </div>
    <div style="text-align:center; color:#4fc3f7; font-size:1.1rem; margin:16px 0;">${t('loading')}</div>
  `;
  
  // Получаем информацию о пакетах по частям
  const packagesWithInfo = [];
  let loadedCount = 0;
  
  for (const pkg of displayedPackages) {
    try {
      let pkgInfo = null;
      if (pkg.repo === 'AUR') {
        const aurResults = await searchAUR(pkg.name);
        pkgInfo = aurResults.find(p => p.name === pkg.name);
      } else {
        const pacmanResults = await searchPacman(pkg.name);
        pkgInfo = pacmanResults.find(p => p.name === pkg.name);
      }
      
      if (pkgInfo) {
        packagesWithInfo.push({
          ...pkgInfo,
          repo: pkg.repo
        });
      } else {
        // Если не удалось получить информацию, показываем базовую
        packagesWithInfo.push({
          name: pkg.name,
          desc: '',
          repo: pkg.repo
        });
      }
      
      loadedCount++;
      
      // Обновляем прогресс каждые 5 пакетов
      if (loadedCount % 5 === 0 || loadedCount === displayedPackages.length) {
        block.innerHTML = `
          <div class="search-results-info">
            ${t('found')} ${allPackages.length} ${t('packages')}
          </div>
          <div style="text-align:center; color:#4fc3f7; font-size:1.1rem; margin:16px 0;">
            ${t('loading')} (${loadedCount}/${displayedPackages.length})
          </div>
        `;
      }
      
    } catch (e) {
      // В случае ошибки показываем базовую информацию
      packagesWithInfo.push({
        name: pkg.name,
        desc: '',
        repo: pkg.repo
      });
      loadedCount++;
    }
  }
  
  // Отображаем результаты
  block.innerHTML = `
    <div class="search-results-info">
      ${t('found')} ${allPackages.length} ${t('packages')}
    </div>
    <ul class="search-results-list">
      ${packagesWithInfo.map(pkg => `
        <li class="search-result-item">
          <div class="search-result-inner">
            <div class="search-result-title">${pkg.name} <span style="font-size:0.9em; color:#4fc3f7; font-weight:400;">[${pkg.repo}]</span></div>
            <div class="search-result-desc">${pkg.desc || ''}</div>
            <button class="search-result-link" onclick="window.renderPackagePage('${pkg.name}','${pkg.repo}')">${t('about')}</button>
          </div>
        </li>
      `).join('')}
    </ul>
    ${hasMore ? `
      <div class="load-more-container">
        <button class="load-more-btn" onclick="loadMoreInstalledPackages()">
          ${t('loadMore')} (${endIndex}/${allPackages.length})
        </button>
      </div>
    ` : ''}
  `;
}

// Функция для загрузки дополнительных установленных пакетов
async function loadMoreInstalledPackages() {
  currentInstalledPage++;
  await displayInstalledPackagesPage();
}

document.addEventListener('DOMContentLoaded', () => {
  // Добавляем элементы прогресс-бара и ошибок
  addProgressAndErrorElements();
  
  if (isFirstRun()) {
    renderWelcomePage();
  } else {
    renderMainPage();
  }
  // Проверяем установленные пакеты при запуске
  checkInstalledPackages();
});

// Экспортируем функции в window
window.renderSettingsPage = renderSettingsPage;
window.renderPackagePage = renderPackagePage;
window.handlePackageAction = handlePackageAction;
window.hideError = hideError;
window.hideSuccess = hideSuccess;
window.cancelPackageAction = cancelPackageAction;
window.loadMoreInstalledPackages = loadMoreInstalledPackages;

// Тестовая функция для проверки API
window.testAPI = async function() {
  console.log('Testing API...');
  console.log('window.api:', window.api);
  
  if (window.api) {
    try {
      console.log('Testing getPacmanPackages...');
      const pacman = await window.api.getPacmanPackages();
      console.log('Pacman packages:', pacman);
      
      console.log('Testing getYayPackages...');
      const aur = await window.api.getYayPackages();
      console.log('AUR packages:', aur);
    } catch (e) {
      console.error('API test error:', e);
    }
  } else {
    console.log('API not available');
  }
};