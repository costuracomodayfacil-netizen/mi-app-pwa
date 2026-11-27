// Efecto de barra al hacer scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Lógica táctil para celulares
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');

  // Abre o cierra el menú principal al tocar ☰
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Abre o cierra cada submenú al tocarlo en el celular
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parentLi = btn.parentElement;
        parentLi.classList.toggle('open');
      }
    });
  });
});

// Función para enviar datos a tu hosting PHP
function enviarAlHosting(resultadoSuma) {
  // IMPORTANTE: Agrega /guardar.php (o el nombre de tu archivo PHP) al final
  const urlHosting = "https://byethost15.com";

  fetch(urlHosting, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ resultado: resultadoSuma })
  })
  .then(respuesta => respuesta.json())
  .then(data => {
    console.log("Respuesta del servidor:", data.mensaje);
    alert("¡Guardado con éxito!"); // Opcional: avisa al usuario en el celular
  })
  .catch(error => {
    console.error("Error al enviar los datos:", error);
    alert("Hubo un error al conectar con el servidor.");
  });
}
