# Application Icons

This directory contains all icon assets for the Arch App Center application.

## Icon Files

### Application Icons
- `arch-app-center.svg` - Vector source file
- `arch-app-center.png` - Default application icon (256x256)
- `arch-app-center-512.png` - High resolution icon for modern displays
- `arch-app-center-256.png` - Standard application icon size
- `arch-app-center-128.png` - Medium size for menus and toolbars
- `arch-app-center-64.png` - Small size for file managers
- `arch-app-center-32.png` - Very small size for system trays
- `arch-app-center-16.png` - Minimal size for taskbars

### Package Icons
The following icons represent popular applications available in Arch Linux repositories:

#### Development Tools
- `audacity.png` - Audio editing software
- `gimp.png` - Image editing software
- `inkscape.png` - Vector graphics editor
- `krita.png` - Digital painting software
- `kdenlive.png` - Video editing software

#### Office Applications
- `libreoffice.png` - Office suite
- `geary.png` - Email client
- `Thunderbird.png` - Email and news client

#### Internet & Communication
- `firefox.png` - Web browser
- `discord.png` - Voice and text chat
- `telegram.png` - Messaging app
- `duckduckgo.png` - Privacy-focused search engine

#### System Tools
- `settings.png` - System settings
- `shotwell.jpg` - Photo manager
- `simplescreenrecorder.png` - Screen recording software
- `obs.png` - Streaming and recording software

#### File Management
- `FileZilla.png` - FTP client
- `qBittorrent.png` - BitTorrent client
- `Transmission.png` - BitTorrent client
- `deluge.svg` - BitTorrent client

#### Entertainment
- `steam.png` - Gaming platform
- `vlc.png` - Media player

#### Status Icons
- `installed.webp` - Indicates installed packages

## Icon Generation

To regenerate the application icons from the SVG source:

```bash
# From the project root
npm run icons
```

This requires ImageMagick to be installed: `sudo pacman -S imagemagick`

## Icon Guidelines

- All application icons follow a consistent design language
- Package icons are sourced from official application branding
- Icons are optimized for both light and dark themes
- Vector formats (SVG) are preferred for scalability
- PNG formats are used for compatibility with various systems

## Описание

Иконки приложения основаны на логотипе Arch Linux - синий треугольник на черном фоне.

## Размеры иконок

- `16x16` - системные иконки
- `32x32` - маленькие иконки
- `64x64` - стандартные иконки
- `128x128` - средние иконки
- `256x256` - .desktop файлы
- `512x512` - высокое разрешение

## Использование

- **SVG** - для веб-интерфейса и масштабируемых иконок
- **256x256 PNG** - для .desktop файлов
- **512x512 PNG** - для AppImage и высокого разрешения
- **Другие размеры** - для различных системных целей

## Дизайн

Иконка представляет собой:
- Черный фон (#181c20)
- Синий внешний треугольник (#4fc3f7)
- Черный внутренний треугольник (#22262c)

Это соответствует цветовой схеме Arch Linux и приложения. 