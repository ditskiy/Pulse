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

(function ($) {
  $(function () {
    $("ul.catalog__tabs").on(
      "click",
      "li:not(.catalog__tabs_active)",
      function () {
        $(this)
          .addClass("catalog__tab_active")
          .siblings()
          .removeClass("catalog__tab_active")
          .closest("div.container")
          .find("div.catalog__content")
          .removeClass("catalog__content_active")
          .eq($(this).index())
          .addClass("catalog__content_active");
      }
    );

    function toggleSlide(item) {
      $(item).each(function (i) {
        $(this).on("click", function (e) {
          e.preventDefault();
          $("catalog-item_content")
            .eq(i)
            .toggleClass("catalog-item_content_active");
          $(".catalog-item__link")
            .eq(i)
            .toggleClass(".catalog-item__list_active");
        });
      });
    }

    toggleSlide(".catalog-item__link");
    toggleSlide(".catalog-item__back");

    // modal

    $("[data-modal=consultation]").on("click", function () {
      $(".overlay, #consultation").fadeIn("slow");
    });
    $(".modal__close").on("click", function () {
      $(".overlay, #consultation, #order, #thanks").fadeOut("slow");
    });

    $(".button_mini").each(function (i) {
      $(this).on("click", function () {
        $("#order .model__descr").text(
          $(".catalog-item__subtitle").eq(i).text()
        );
        $(".overlay, #order").fadeIn("slow");
      });
    });
  });
})(jQuery);
