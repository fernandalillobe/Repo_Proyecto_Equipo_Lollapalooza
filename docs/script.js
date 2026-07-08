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
document.querySelectorAll('[data-carrusel]').forEach(carrusel => {
  const track = carrusel.querySelector('.carrusel-track');
  const slides = carrusel.querySelectorAll('img');
  const btnPrev = carrusel.querySelector('.prev');
  const btnNext = carrusel.querySelector('.next');
  const dotsContainer = carrusel.querySelector('.carrusel-dots');
  let indice = 0;

  // Generar los dots dinámicamente
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('activo');
    dot.addEventListener('click', () => {
      indice = i;
      actualizar();
    });
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('button');

  function actualizar() {
    track.style.transform = `translateX(-${indice * 100}%)`;
    dots.forEach(dot => dot.classList.remove('activo'));
    dots[indice].classList.add('activo');
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