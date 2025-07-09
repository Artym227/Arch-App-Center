#!/bin/bash

# Скрипт для автоматического обновления версии в AUR PKGBUILD
# на основе версии из GitHub package.json

set -e

# Пути к репозиториям
GITHUB_REPO="/home/artym/Arch-App-Center"
AUR_REPO="/home/artym/arch-app-center"

# Переходим в GitHub репозиторий и получаем последнюю версию
cd "$GITHUB_REPO"

# Получаем версию из package.json
GITHUB_VERSION=$(node -p "require('./package.json').version")

echo "Версия в GitHub: $GITHUB_VERSION"

# Переходим в AUR репозиторий
cd "$AUR_REPO"

# Получаем текущую версию из PKGBUILD
CURRENT_VERSION=$(grep "^pkgver=" PKGBUILD | cut -d'=' -f2)
CURRENT_PKGREL=$(grep "^pkgrel=" PKGBUILD | cut -d'=' -f2)

echo "Текущая версия в AUR: $CURRENT_VERSION"
echo "Текущий pkgrel: $CURRENT_PKGREL"

# Проверяем, нужно ли обновление
if [ "$GITHUB_VERSION" != "$CURRENT_VERSION" ]; then
    echo "Обнаружена новая версия! Обновляем..."
    
    # Обновляем версию в PKGBUILD
    sed -i "s/^pkgver=.*/pkgver=$GITHUB_VERSION/" PKGBUILD
    sed -i "s/^pkgrel=.*/pkgrel=1/" PKGBUILD
    
    # Генерируем новый .SRCINFO
    makepkg --printsrcinfo > .SRCINFO
    
    echo "✅ Версия обновлена до $GITHUB_VERSION"
    echo "📝 PKGBUILD и .SRCINFO обновлены"
    
    # Показываем изменения
    echo ""
    echo "Изменения в PKGBUILD:"
    git diff PKGBUILD || true
    
    echo ""
    echo "Изменения в .SRCINFO:"
    git diff .SRCINFO || true
    
else
    echo "✅ Версии совпадают. Обновление не требуется."
fi 