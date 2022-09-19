// $('.kickstart-list').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 3,
//   dots: true,
//   // autoplay: true,
//   nextArrow: '.our-next-btn',
//   arrows: true,
//   prevArrow: '.our-prev-btn',
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
