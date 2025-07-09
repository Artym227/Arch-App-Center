#!/bin/bash

# Скрипт для полного обновления AUR репозитория
# Включает обновление версии, коммит и пуш

set -e

# Пути к репозиториям
GITHUB_REPO="/home/artym/Arch-App-Center"
AUR_REPO="/home/artym/arch-app-center"

echo "🔄 Начинаем обновление AUR репозитория..."

# Запускаем скрипт обновления версии
"$GITHUB_REPO/scripts/update-version.sh"

# Переходим в AUR репозиторий
cd "$AUR_REPO"

# Проверяем, есть ли изменения
if ! git diff --quiet; then
    echo "📝 Обнаружены изменения, создаем коммит..."
    
    # Добавляем все изменения
    git add .
    
    # Получаем новую версию для коммита
    NEW_VERSION=$(grep "^pkgver=" PKGBUILD | cut -d'=' -f2)
    
    # Создаем коммит
    git commit -m "Update to version $NEW_VERSION
    
    - Automatic version update from GitHub
    - Updated PKGBUILD and .SRCINFO
    - Version: $NEW_VERSION"
    
    echo "✅ Коммит создан для версии $NEW_VERSION"
    
    # Спрашиваем пользователя о пуше
    echo ""
    read -p "🚀 Отправить изменения в AUR? (y/N): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📤 Отправляем изменения в AUR..."
        git push origin master
        echo "✅ Изменения успешно отправлены в AUR!"
    else
        echo "⏸️  Пуш отменен. Изменения сохранены локально."
    fi
    
else
    echo "✅ Изменений не обнаружено. AUR репозиторий актуален."
fi

echo "🎉 Обновление завершено!" 