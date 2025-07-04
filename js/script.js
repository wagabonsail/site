const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ==== CARROUSEL NAVIRE ===============================================
const track = document.getElementById('carouselTrack');
const btnPrev = document.querySelector('.carousel-btn.prev');
const btnNext = document.querySelector('.carousel-btn.next');

if(track && btnPrev && btnNext){
  btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
  });
  btnNext.addEventListener('click', () => {
    track.scrollBy({ left:  track.clientWidth, behavior: 'smooth' });
  });
}
