import Swiper from 'swiper';

const swiper = new Swiper('.banners__swiper', {
  loop: true,
  spaceBetween: 30,
});

const prevEl = document.querySelector<HTMLButtonElement>('.banners__arrow--left');
const nextEl = document.querySelector<HTMLButtonElement>('.banners__arrow--right');

nextEl.addEventListener('click', () => {
  swiper.slideNext();
});

prevEl.addEventListener('click', () => {
  swiper.slidePrev();
});

