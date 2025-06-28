#!/bin/bash

# Arch App Center Icon Generator Script
# This script generates PNG icons in various sizes from the SVG source
# Requires ImageMagick to be installed: sudo pacman -S imagemagick

# Set the source SVG file path
SVG_FILE="public/icons/arch-app-center.svg"

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed."
    echo "Please install it with: sudo pacman -S imagemagick"
    exit 1
fi

# Check if source SVG file exists
if [ ! -f "$SVG_FILE" ]; then
    echo "Error: Source SVG file not found at $SVG_FILE"
    exit 1
fi

echo "Generating PNG icons from $SVG_FILE..."

# Create icons directory if it doesn't exist
mkdir -p public/icons

# Generate icons in different sizes for various use cases
# Using -background none to preserve transparency
# 512x512 - High resolution for modern displays
convert "$SVG_FILE" -background none -resize 512x512 "public/icons/arch-app-center-512.png"

# 256x256 - Standard application icon size
convert "$SVG_FILE" -background none -resize 256x256 "public/icons/arch-app-center-256.png"

# 128x128 - Medium size for menus and toolbars
convert "$SVG_FILE" -background none -resize 128x128 "public/icons/arch-app-center-128.png"

# 64x64 - Small size for file managers
convert "$SVG_FILE" -background none -resize 64x64 "public/icons/arch-app-center-64.png"

# 32x32 - Very small size for system trays
convert "$SVG_FILE" -background none -resize 32x32 "public/icons/arch-app-center-32.png"

# 16x16 - Minimal size for taskbars
convert "$SVG_FILE" -background none -resize 16x16 "public/icons/arch-app-center-16.png"

# Create a default icon (256x256) for general use
cp "public/icons/arch-app-center-256.png" "public/icons/arch-app-center.png"

echo "Icon generation completed successfully!"
echo "Generated icons:"
ls -la public/icons/arch-app-center*.png 
