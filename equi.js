document.addEventListener("DOMContentLoaded", () => {
    const taskTitles = document.querySelectorAll('.task-title');

    taskTitles.forEach(title => {
        title.addEventListener('click', () => {
            const parent = title.closest('.task');
            const content = parent.querySelector('.task-content');
            const icon = title.querySelector('.toggle-icon');

            // Alternar la clase de rotación de la flecha
            icon.classList.toggle('rotate');

            // Verificar el estado actual de display
            const currentDisplay = window.getComputedStyle(content).display;

            // Alternar la visibilidad del contenido
            if (currentDisplay === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
