import Swiper from 'swiper';
import Pagination from 'swiper/modules/pagination.mjs';

const swiperWrapper = document.querySelector('.policy-form__swiper');

let swiper;

function initSwiper () {
  if(window.innerWidth < 1170) {
    if(!swiperWrapper.classList.contains('price-swiper')) {
      swiperWrapper.classList.add('price-swiper');
      swiper = new Swiper('.price-swiper', {
        modules: [Pagination],
        slidePerView: 1,
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      })
    }
  } else {
    swiperWrapper.classList.remove('price-swiper');
    if(swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}

export function addSwiper () {
  initSwiper();
  window.addEventListener('resize', initSwiper)
}
