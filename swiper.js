const swiper = new Swiper('.swiper_new', {
  loop: true,

  slidesPerView: 4,
      spaceBetween: 30,
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
      pagination: {
        el: ".mySwiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-2-button-next",
        prevEl: ".swiper-2-button-prev",
      },
});