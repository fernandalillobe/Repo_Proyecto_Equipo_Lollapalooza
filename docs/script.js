const video = document.getElementById('scrollVideo');

if (video) {
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, { threshold: 0.1 });

observer.observe(video);
}
document.querySelectorAll('[data-carrusel-videos]').forEach(carrusel => {
  const track = carrusel.querySelector('.carrusel-track');
  const slides = carrusel.querySelectorAll('.video-slide');
  const btnPrev = carrusel.querySelector('.prev');
  const btnNext = carrusel.querySelector('.next');
  const seccion = carrusel.closest('section');
  const infoTitulo = seccion.querySelector('.video-info-titulo');
  let indice = 0;

  slides.forEach(slide => {
    const videoId = slide.dataset.videoId;
    slide.style.backgroundImage = `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`;

    slide.addEventListener('click', () => {
      slide.classList.add('reproduciendo');
      slide.innerHTML = `<iframe 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
          allow="autoplay; encrypted-media" 
          allowfullscreen></iframe>`;
    });
  });

  function actualizar() {
    track.style.transform = `translateX(-${indice * 100}%)`;
    infoTitulo.textContent = slides[indice].dataset.titulo || '';
  }

  btnNext.addEventListener('click', () => {
    indice = (indice + 1) % slides.length;
    actualizar();
  });

  btnPrev.addEventListener('click', () => {
    indice = (indice - 1 + slides.length) % slides.length;
    actualizar();
  });

  actualizar();
});