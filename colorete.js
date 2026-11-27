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
  // Armamos la dirección por partes para que no se recorte
  const protocolo = "https://";
  const subdominio = "costuracomoda.";
  const servidor = "byethost15.com";
  const ruta = "/unificado/AplicacionAndroid/guardar.php";
  
  const urlHosting = protocolo + subdominio + servidor + ruta;

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
    alert("¡Guardado con éxito!");
  })
  .catch(error => {
    console.error("Error al enviar los datos:", error);
    alert("Hubo un error al conectar con el servidor.");
  });
}


