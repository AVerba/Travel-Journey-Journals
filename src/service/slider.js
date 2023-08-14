const destinationsSw = document.querySelector('.destinations__gallery'),
  packagesSw = document.querySelector('.packages__gallery');


const destinations = new Swiper(destinationsSw, {

  direction: 'horizontal', // 'vertical', 'horizontal'
  loop: true,
  spaceBetween: 84,
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
const packagesGallery = new Swiper(packagesSw, {

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