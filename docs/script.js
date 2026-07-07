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
  document.querySelectorAll('[data-carrusel]').forEach(function (carrusel) {
    const track = carrusel.querySelector('.carrusel-track');
    const imgs = track.querySelectorAll('img');
    const dotsWrap = carrusel.querySelector('.carrusel-dots');
    const btnPrev = carrusel.querySelector('.prev');
    const btnNext = carrusel.querySelector('.next');
    let indice = 0;

    imgs.forEach((_, i) => {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('activo');
      dot.addEventListener('click', () => ir(i));
      dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap.querySelectorAll('button');

    function actualizar() {
      track.style.transform = `translateX(-${indice * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('activo', i === indice));
    }

    function ir(i) {
      indice = (i + imgs.length) % imgs.length;
      actualizar();
    }

    btnPrev.addEventListener('click', () => ir(indice - 1));
    btnNext.addEventListener('click', () => ir(indice + 1));

    setInterval(() => ir(indice + 1), 10000); // quita esta línea si no quieres autoplay
  });
document.querySelectorAll('[data-carrusel-videos]').forEach(carrusel => {
  const track = carrusel.querySelector('.carrusel-track');
  const slides = carrusel.querySelectorAll('.video-slide');
  const btnPrev = carrusel.querySelector('.prev');
  const btnNext = carrusel.querySelector('.next');
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
  }

  btnNext.addEventListener('click', () => {
    indice = (indice + 1) % slides.length;
    actualizar();
  });

  btnPrev.addEventListener('click', () => {
    indice = (indice - 1 + slides.length) % slides.length;
    actualizar();
  });
});