const hotelSlider = new Swiper(".hotel-slider", {
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

const reviewSlaider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
