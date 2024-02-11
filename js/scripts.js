var swiper = new Swiper(".slide-video", {
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 300,
  pagination: {
    el: ".s-videos .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});
