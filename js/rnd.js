$(document).ready(function () {
  $(".slider5").bxSlider({
    slideWidth: 339,
    minSlides: 3,
    maxSlides: 6,
    moveSlides: 4,
    slideMargin: 10,
    controls: false,
    pager: false,
  });
});

let section2Tab = $(".sec2-list li");
let section3Tab = $(".sec3-list li");

section2Tab.click(function () {
  section2Tab.removeClass("active");
  $(this).addClass("active");
  let idx = $(this).index();
  $(".sec_2_contt").hide();
  $("#sec2_" + idx).show();
});

$(".sec_3_contt").hide();
$("#sec3_0").show();
section3Tab.click(function () {
  section3Tab.removeClass("active");
  $(this).addClass("active");
  let idx = $(this).index();
  $(".sec_3_contt").hide();
  $("#sec3_" + idx).show();
});

$(".d_contents").slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 4,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
});
