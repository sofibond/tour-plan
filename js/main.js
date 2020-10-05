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

