$(document).ready(function () {
  ymaps.ready(init);
  var myMap, myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [7.890633, 98.294922],
      zoom: 15
    });

    myPlacemark = new ymaps.Placemark([7.890633, 98.294922], {
      hintContent: 'Grand Hilton Hotel',
      balloonContent: 'Grand Hilton Hotel, Phuket'
    });
    myMap.geoObjects.add(myPlacemark);

  }

  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
  })

  hotelSlider.keyboard.enable();

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  })
  reviewsSlider.keyboard.enable();

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function () {
    console.log('Клик по кнопке меню');
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal () {
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

  //Обработка форм
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Must contain at least 2 characters"
        },
        email: {
          required: "We need your email to contact you",
          email: "Your email must be in the format of name@domain.com"
        },
        phone: {
          required: "Phone number is required"
        }
      }
    });
  });
  AOS.init();
});