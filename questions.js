document.addEventListener("DOMContentLoaded", () => {
    const questionTitles = document.querySelectorAll('.questions__title');

    questionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const parent = title.closest('.questions__padding');
            const answer = parent.querySelector('.questions__show');

            // Alternar clase de rotación en la flecha
            title.querySelector('.questions__arrow img').classList.toggle('rotate');

            // Alternar clase para mostrar la respuesta
            if (answer.classList.contains("open")) {
                answer.style.height = "0px";
                answer.classList.remove("open");
            } else {
                answer.style.height = ${answer.scrollHeight}px;
                answer.classList.add("open");
            }
        });
    });
});