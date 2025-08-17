// Функция открытия проекта
function openProject(projectId) {
    // Сначала закрываем все модальные окна
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });

    // Открываем нужное модальное окно
    const modal = document.getElementById(projectId + '-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Функция закрытия модального окна
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

// Закрытие при клике вне окна
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
});

// Закрытие по клавише Esc
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Инициализация проектов (можно использовать для загрузки данных)
document.addEventListener('DOMContentLoaded', function () {
    // Здесь можно добавить загрузку проектов через AJAX
    console.log('Портфолио загружено!');
});