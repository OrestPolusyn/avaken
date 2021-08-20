"use strict";

$(window).scroll(function () {
  if ($(this).scrollTop() > $('.header').height()) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$('.menu, .header__link').on('click', function () {
  $('.menu').toggleClass('menu--active');
  $('body').toggleClass('overlay');
})