// Toggle menu
const toggleButton = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
//Mostrar simulador carga
  window.addEventListener("load", function () {
    setTimeout(() => {
      document.getElementById("cargando").style.display = "none";
    }, 700); // 700 ms
  });