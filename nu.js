/*document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los títulos de los departamentales
    const titles = document.querySelectorAll(".questions__title");

    titles.forEach(title => {
        title.addEventListener("click", function () {
            // Encontrar el div de respuesta más cercano
            const answer = this.nextElementSibling;

            // Alternar la visibilidad del contenido
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }

            // Rotar la flecha de la pregunta
            const arrow = this.querySelector(".questions__arrow img");
            if (arrow) {
                arrow.classList.toggle("rotated");
            }
        });

        // Ocultar contenido al cargar la página
        let nextElement = title.nextElementSibling;
        while (nextElement && nextElement.classList.contains("questions__show")) {
            nextElement.style.display = "none";
            nextElement = nextElement.nextElementSibling;
        }
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los títulos de los departamentales
    const titles = document.querySelectorAll(".questions__title");

    titles.forEach(title => {
        title.addEventListener("click", function () {
            // Encontrar el div de respuesta más cercano
            const answer = this.closest(".questions__answer");

            // Obtener todos los párrafos dentro del div de respuesta
            const paragraphs = answer.querySelectorAll(".questions__show");

            // Alternar la visibilidad del contenido
            paragraphs.forEach(paragraph => {
                if (paragraph.style.display === "none" || paragraph.style.display === "") {
                    paragraph.style.display = "block";
                } else {
                    paragraph.style.display = "none";
                }
            });

            // Rotar la flecha de la pregunta
            const arrow = this.querySelector(".questions__arrow img");
            if (arrow) {
                arrow.classList.toggle("rotated");
            }
        });

        // Ocultar contenido al cargar la página
        let nextElement = title.nextElementSibling;
        while (nextElement && nextElement.classList.contains("questions__show")) {
            nextElement.style.display = "none";
            nextElement = nextElement.nextElementSibling;
        }
    });
});
