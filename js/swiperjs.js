const swiper = new Swiper('.sample-slider', {
  loop: true,   
  spaceBetween: 20,                       //loop
  autoplay: {                         //autoplay
      delay: 2000,  
      disableOnInteraction: false,
  },   
  pagination: {                       //pagination(dots)
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})