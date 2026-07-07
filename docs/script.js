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
