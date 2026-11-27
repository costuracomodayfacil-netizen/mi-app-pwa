// Efecto de barra al hacer scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Lógica táctil para celulares
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');

  // Abre o cierra el menú principal al tocar ☰
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Abre o cierra cada submenú al tocarlo en el celular
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Evita que salte al inicio de la página
        const parentLi = btn.parentElement;
        parentLi.classList.toggle('open');
      }
    });
  });
});
