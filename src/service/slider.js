const packagesSw = document.querySelector('.packages__swiper');


console.log(packagesSw);

const gallary = new Swiper('.gallary', {

  direction: 'horizontal', // 'vertical', 'horizontal'
  loop: true,
  spaceBetween: 87,
  slidesPerView: 3,

  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  breakpoints: {
    1251: {
      spaceBetween: 87,
      slidesPerView: 3,
    },

    951: {
      spaceBetween: 20,
      slidesPerView: 2,
    },

    0: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
  },
});
const packagesGallary = new Swiper('.packages__gallary', {

  direction: 'horizontal',
  loop: true,
  spaceBetween: 47,
  slidesPerView: 3,

  navigation: {
    nextEl: '.packages__btn-next',
    prevEl: '.packages__btn-prev',
  },

  breakpoints: {
    1251: {
      spaceBetween: 47,
      slidesPerView: 3,
    },

    951: {
      spaceBetween: 20,
      slidesPerView: 2,
    },

    0: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
  },
});