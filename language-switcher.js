// Sistema Simple de Cambio de Idioma - SIGECO
// Solo maneja la interacción del dropdown, las páginas son estáticas

document.addEventListener('DOMContentLoaded', function() {
  initLanguageSwitcher();
});

function initLanguageSwitcher() {
  const toggle = document.getElementById('languageToggle');
  const dropdown = document.getElementById('languageDropdown');

  if (!toggle || !dropdown) return;

  // Toggle del dropdown
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    dropdown.classList.toggle('active');
  });

  // Cerrar dropdown al hacer click fuera
  document.addEventListener('click', function(e) {
    if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  // Opcional: Cerrar dropdown cuando se selecciona un idioma
  const languageOptions = dropdown.querySelectorAll('.language-option');
  languageOptions.forEach(option => {
    option.addEventListener('click', function() {
      dropdown.classList.remove('active');
    });
  });
}

// Función opcional para detectar idioma del navegador y redirigir automáticamente
function detectAndRedirect() {
  const userLang = navigator.language || navigator.userLanguage;
  const currentPage = window.location.pathname;
  
  // Solo redirigir si estamos en index.html (página principal)
  if (currentPage.includes('index.html') && !currentPage.includes('index-')) {
    if (userLang.startsWith('en')) {
      window.location.href = 'index-en.html';
    } else if (userLang.startsWith('pt')) {
      window.location.href = 'index-pt.html';
    }
    // Por defecto mantener español (index-es.html)
  }
}

// Descomenta la siguiente línea si quieres redirección automática por idioma del navegador
// detectAndRedirect();