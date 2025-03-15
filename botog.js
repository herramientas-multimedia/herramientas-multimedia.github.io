<script>
  // Espera a que la página cargue completamente
  document.addEventListener("DOMContentLoaded", function () {
    // Encuentra el enlace con la clase 'scroll-to-testimony'
    const scrollToTestimonyButton = document.querySelector('.scroll-to-testimony');

    // Cuando se haga clic en el botón, hacer que se desplace hacia la sección 'testimony'
    scrollToTestimonyButton.addEventListener('click', function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      // Encuentra la sección con la clase 'testimony'
      const testimonySection = document.querySelector('.testimony');
      
      // Desplázate suavemente hacia esa sección
      testimonySection.scrollIntoView({ behavior: 'smooth' });
    });
  });
</script>
