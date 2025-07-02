#!/bin/bash

# Arch App Center Icon Generator Script (rsvg-convert version)
# Этот скрипт генерирует PNG-иконки разных размеров из SVG-источника
# Требуется rsvg-convert: sudo pacman -S librsvg

# Путь к исходному SVG-файлу
SVG_FILE="public/icons/arch-app-center.svg"

# Проверка наличия rsvg-convert
if ! command -v rsvg-convert &> /dev/null; then
    echo "Error: rsvg-convert is not installed."
    echo "Please install it with: sudo pacman -S librsvg"
    exit 1
fi

# Проверка наличия исходного SVG-файла
if [ ! -f "$SVG_FILE" ]; then
    echo "Error: Source SVG file not found at $SVG_FILE"
    exit 1
fi

echo "Generating PNG icons from $SVG_FILE using rsvg-convert..."

# Создать папку icons, если не существует
mkdir -p public/icons

# Массив размеров
sizes=(512 256 128 64 32 16)

# Генерация PNG-иконок разных размеров
for size in "${sizes[@]}"; do
    rsvg-convert -w $size -h $size -a "$SVG_FILE" -o "public/icons/arch-app-center-${size}.png"
done

# Создать дефолтную иконку (256x256)
cp "public/icons/arch-app-center-256.png" "public/icons/arch-app-center.png"

echo "Icon generation completed successfully!"
echo "Generated icons:"
ls -la public/icons/arch-app-center*.png 
