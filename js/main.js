$(document).ready(function () {
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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("клик по кнопке меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      messages: {
        name: {
          required: "Пожалуйста, укажите своё имя",
          minlength: "Имя должно быть не короче 2 букв",
        },
        email: {
          required: "Email адрес обязателен",
          email:
            "Ваш email адрес должен быть написан в формате name@domain.com",
        },
        phone: {
          required: "Телефон обязателен",
        },
      },
    });
  });
  // $(".subscribe").validate({
  //   errorClass: "invalid",
  //   messages: {
  //     email: {
  //       required: "Email адрес обязателен",
  //       email: "Ваш email адрес должен быть написан в формате name@domain.com",
  //     },
  //   },
  // });
  $(document).ready(function () {
    $("#phone").mask("+7 (999) 999-99-99");
  });
  $(document).ready(function () {
    $("#phone-2").mask("+7 (999) 999-99-99");
  });
  AOS.init();
});
