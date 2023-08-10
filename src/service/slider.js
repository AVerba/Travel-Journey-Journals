const packagesSw = document.querySelector('.packages__swiper');


console.log(packagesSw);

const gallary = new Swiper('.gallary', {

  //! Основные настройки
  direction: 'horizontal', // 'vertical', 'horizontal'
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  spaceBetween: 20, // расстояние между слайдами
  slidesPerView: 3, // кол-во активных слайдов
  // slidesPerGroup: 3, // кол-во пролистываемых слайдов

  //! Кнопки вперед и назад
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  //! Адаптив слайдера
  breakpoints: {
    1251: {
      spaceBetween: 20,
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

  //! Основные настройки
  direction: 'horizontal', // 'vertical', 'horizontal'
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  spaceBetween: 20, // расстояние между слайдами
  slidesPerView: 3, // кол-во активных слайдов
  // slidesPerGroup: 3, // кол-во пролистываемых слайдов

  //! Кнопки вперед и назад
  navigation: {
    nextEl: '.packages__btn-next',
    prevEl: '.packages__btn-prev',
  },

  //! Адаптив слайдера
  breakpoints: {
    1251: {
      spaceBetween: 20,
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