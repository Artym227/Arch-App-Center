# Makefile для управления Arch App Center
# Удобные команды для разработки и обновления AUR

.PHONY: help update-version update-aur test-build clean

# Показать справку
help:
	@echo "Доступные команды:"
	@echo "  update-version  - Обновить версию в AUR на основе GitHub"
	@echo "  update-aur      - Полное обновление AUR (версия + коммит + пуш)"
	@echo "  test-build      - Протестировать сборку пакета"
	@echo "  clean           - Очистить временные файлы"
	@echo "  help            - Показать эту справку"

# Обновить только версию
update-version:
	@echo "🔄 Обновляем версию в AUR..."
	@./scripts/update-version.sh

# Полное обновление AUR
update-aur:
	@echo "🔄 Полное обновление AUR репозитория..."
	@./scripts/update-aur.sh

# Протестировать сборку пакета
test-build:
	@echo "🧪 Тестируем сборку пакета..."
	@cd /home/artym/arch-app-center && makepkg -f --noconfirm

# Очистить временные файлы
clean:
	@echo "🧹 Очищаем временные файлы..."
	@rm -rf node_modules/
	@rm -rf dist/
	@rm -rf build/
	@find . -name "*.log" -delete
	@find . -name ".DS_Store" -delete
	@echo "✅ Очистка завершена" 