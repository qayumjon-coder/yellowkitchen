const swiper = new Swiper('.swiper_new', {
  loop: true,

  slidesPerView: 4,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 10
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },

  pagination: {
    el: ".swiper_new .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-1-button-next",
    prevEl: ".swiper-1-button-prev",
  },
});

const mySwiper = new Swiper('.mySwiper', {
  loop: true,

  slidesPerView: 8,
  spaceBetween: 30,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 10
    },

    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 6,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 8,
      spaceBetween: 30
    }
  },

  pagination: {
    el: ".mySwiper .swiper-pagination",
    clickable: true,
  },
  
  navigation: {
    nextEl: ".swiper-2-button-next",
    prevEl: ".swiper-2-button-prev",
  },


});