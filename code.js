const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open'); // Abrir o cerrar el menú
});

// Cerrar el menú cuando se hace clic en un enlace (opcional)
const links = document.querySelectorAll('#menu li a');
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});

// Mostrar/ocultar el botón de volver al inicio
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'flex'; // Muestra el botón
  } else {
    backToTopButton.style.display = 'none'; // Oculta el botón
  }
});

// Función para volver al inicio
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Efecto de desplazamiento suave
  });
});
