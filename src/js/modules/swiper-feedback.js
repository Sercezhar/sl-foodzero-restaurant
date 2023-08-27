export const swiper = new Swiper('.feedback-swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
