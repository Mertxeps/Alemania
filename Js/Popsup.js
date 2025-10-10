
// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

const abrirModalBtn = document.getElementById('abrirModal');
const cerrarModalBtn = document.getElementById('cerrarModal');
const modalOverlay = document.getElementById('modalOverlay');

abrirModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex'; // Muestra el modal
});

cerrarModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none'; // Oculta el modal
});

// Opcional: Cierra el modal si se hace clic fuera del contenido
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});
