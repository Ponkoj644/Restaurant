// Banner Slider
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pauseOnMouseEnter: true,
  autoplay: {
    delay: 3000,
  },
});
// Review slider
var swiper = new Swiper(".reviewSwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  slidesPerGroupSkip: 1,
  // loop: true,
  autoplay: { delay: 3000 },
  grabCursor: true,
  keyboard: {
    enabled: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// ASO Animation
AOS.init();

// Swiper activation code
// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
