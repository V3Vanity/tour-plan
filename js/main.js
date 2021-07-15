const swiper = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect: "coverflow",
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
