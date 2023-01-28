// $(document).ready(function () {
//   $(".carousel__slick").slick({
//     speed: 1200,
//     adaptiveHeight: true,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/left-solid.png" alt="left-solid"></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/right-solid.png" alt="right-solid"></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const slider = tns({
  container: ".carousel__slick",
  items: 1,
  slideBy: "page",
  autoplay: false,
  autoplayButton: true,
  nav: false,
  controls: false,
  center: true,
  navPosition: "bottom",
  responsive: {
    320: {
      nav: true,
    //   navPosition: "bottom",
    },
    1025: {
      nav: false,
    },
  },
});
document.querySelector(".prev").onclick = function () {
  slider.goTo("prev");
};
document.querySelector(".next").onclick = function () {
  slider.goTo("next");
};
