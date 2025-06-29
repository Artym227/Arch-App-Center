# Arch App Center

A modern graphical package manager for Arch Linux and derivatives, built with Electron. Supports searching, installing, and removing packages from both official repositories (pacman) and the AUR.

## Features

- 🔍 **Search packages** in official Arch repos and AUR
- 📦 **Install/Remove** packages with a single click
- 📋 **Detailed package info**: version, license, dependencies, homepage
- 🌍 **Multilingual UI**: English, Russian, Chinese, Spanish, Japanese, Portuguese
- ⚡ **Pagination** for fast loading of large lists
- 🎨 **Dark, Arch-inspired UI**

## System Requirements

- Arch Linux or a compatible derivative
- pacman (preinstalled)
- yay (for AUR support)
- Node.js 18+ and npm (for building from source)

## Dependencies

### System
- `pacman` (default on Arch)
- `yay` (AUR helper)
- `imagemagick` (for icon generation)

### Development
- `@types/node`
- `electron`
- `electron-builder`
- `typescript`

## Installation

### Using AUR (Easiest)

The easiest way to install Arch App Center is through the AUR:

```bash
# Using yay (recommended)
yay -S arch-app-center

# Or using paru
paru -S arch-app-center


Alternatively, you can install it manually from AUR:
```bash
# Clone the AUR package
git clone https://aur.archlinux.org/arch-app-center.git
cd arch-app-center

# Build and install
makepkg -si
```

### Using makepkg (Recommended)

The easiest way to install Arch App Center is using the provided PKGBUILD:

```bash
# Clone the repository
git clone https://github.com/artym/arch-app-center.git
cd arch-app-center

# Build and install the package
makepkg -si
```

This will automatically:
- Install all required dependencies
- Build the application
- Install it system-wide
- Create desktop integration

### From Source

1. **Clone the repository:**
   ```bash
   git clone https://github.com/artym/arch-app-center.git
   cd Arch-App-Center
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Generate icons:**
   ```bash
   npm run icons
   ```
4. **Build the project:**
   ```bash
   npm run build
   ```
5. **Run the app:**
   ```bash
   npm start
   ```

### For Development
- Use `npm run dev` for hot-reload development mode.

### Build AppImage (recommended for end users)
```bash
npm run dist
```
The resulting `.AppImage` will be in the `dist/` folder.

## Usage

- On first launch, select your language and allow package checking.
- Use the search bar to find packages.
- Click "About" for details and "Install" to install.
- View installed packages via the icon in the header.
- Change language and settings via the gear icon.

## Project Structure

```
arch-app-center/
├── src/                  # Electron main, preload, renderer
├── public/
│   ├── index.html        # Main HTML
│   ├── style.css         # Styles
│   └── icons/            # SVG & PNG icons
│       ├── arch-app-center.svg
│       ├── arch-app-center-*.png
│       └── README.md
├── scripts/
│   └── generate-icons.sh # Icon generation script
├── package.json          # NPM scripts & dependencies
├── tsconfig.json         # TypeScript config
├── PKGBUILD              # Arch Linux package build script
├── LICENSE               # MIT License
└── README.md             # This file
```

## Icons

- Main icon: blue triangle on black, inspired by Arch Linux logo
- SVG and PNG (16x16 to 512x512)
- Generate PNGs from SVG with:
  ```bash
  npm run icons
  ```
- Used for AppImage, .desktop files, and system menus

## API

- **AUR API:** `https://aur.archlinux.org/rpc/`
- **Arch Linux API:** `https://archlinux.org/packages/search/json/`

## Localization

- 🇺🇸 English
- 🇷🇺 Russian
- 🇨🇳 Chinese
- 🇪🇸 Spanish
- 🇯🇵 Japanese
- 🇵🇹 Portuguese

## License

MIT License

## Author

artym

## Contributing

Pull requests and issues are welcome! If you want to help with translation, UI, or features — feel free to open an issue or PR.

## Notes
- **Linux only:** This app is intended for Arch Linux and derivatives only. No Windows or macOS support.
- **Root privileges:** Installing/removing packages requires admin rights.
- **AUR:** For AUR support, `yay` must be installed.
- **Icons:** If you change the SVG, re-run `npm run icons` to update PNGs.
- **No binaries in repo:** All build artifacts and dependencies are ignored via `.gitignore`. 
