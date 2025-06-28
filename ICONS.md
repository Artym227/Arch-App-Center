# Иконки Arch App Center

## Быстрая настройка иконок

### 1. Установите ImageMagick

```bash
sudo pacman -S imagemagick
```

### 2. Сгенерируйте PNG иконки

```bash
npm run icons
```

### 3. Проверьте результат

После выполнения команды в папке `public/icons/` должны появиться файлы:
- `arch-app-center-16.png`
- `arch-app-center-32.png`
- `arch-app-center-64.png`
- `arch-app-center-128.png`
- `arch-app-center-256.png`
- `arch-app-center-512.png`

## Дизайн иконки

Иконка представляет собой логотип Arch Linux:
- **Фон**: Черный (#181c20)
- **Внешний треугольник**: Синий (#4fc3f7)
- **Внутренний треугольник**: Темно-серый (#22262c)

## Использование

- **SVG** (`arch-app-center.svg`) - для веб-интерфейса
- **256x256 PNG** - для .desktop файлов
- **512x512 PNG** - для AppImage
- **Другие размеры** - для системных иконок

## Ручная генерация

Если автоматическая генерация не работает:

```bash
# Установите ImageMagick
sudo pacman -S imagemagick

# Сгенерируйте иконки вручную
convert public/icons/arch-app-center.svg -resize 256x256 public/icons/arch-app-center-256.png
convert public/icons/arch-app-center.svg -resize 512x512 public/icons/arch-app-center-512.png
```

## Проблемы

Если иконки не генерируются:
1. Убедитесь, что ImageMagick установлен
2. Проверьте, что файл `arch-app-center.svg` существует
3. Убедитесь, что у вас есть права на запись в папку `public/icons/` 