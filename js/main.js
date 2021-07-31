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
          required: "Please enter your name",
          minlength: "Name must be at least 2 letters long",
        },
        email: {
          required: "Email address is required",
          email: "Your email address must be in the format name@domain.com",
        },
        phone: {
          required: "Phone is required",
        },
      },
    });
  });
  // Обработка форм валидции
  $.validator.methods.email = function (value, element) {
    return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]+/.test(value);
  };

  // $(".subscribe").validate({
  //   errorClass: "invalid",
  //   messages: {
  //     email: {
  //       required: "Email адрес обязателен",
  //       email: "Ваш email адрес должен быть написан в формате name@domain.com",
  //     },
  //   },
  // });

  // Маска телефона
  $(document).ready(function () {
    $("#phone").mask("+7 (000) 000-00-00");
  });
  $(document).ready(function () {
    $("#phone-2").mask("+7 (000) 000-00-00");
  });

  // Настрйока бургера
  $(document).ready(function () {
    $(".menu-button").click(function (event) {
      $(
        ".menu-button,.menu-button__line-top,.menu-button__line-center,.menu-button__line-bottom"
      ).toggleClass("activeties");
    });
  });
  AOS.init();
});
