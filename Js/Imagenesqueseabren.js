
const images = document.querySelectorAll('.Ciudades1 img, .Ciudades2 img' );
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.getElementById('closeBtn');

images.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
});

// Botón de cerrar
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// También cerrar si haces clic en el fondo
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
});
