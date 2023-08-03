const multipleSwiper = new Swiper(".multiple-slide", {
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    481: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 4,
    },
  },
});

const bMenuSwiper = new Swiper(".b-menu-slide", {
  slidesPerView: 3,
  slidesToScroll: 1,
  loop: true,
  navigation: {
    nextEl: ".control-next",
    prevEl: ".control-prev",
  },
});

bMenuSwiper.on("realIndexChange", function (a) {
  let idx = (a.realIndex % 3) + 1;
  console.log(idx);
  $(".slidetext-wrapper").hide();
  $("#business-" + idx).show();
});

$(".new_slides").slick({
  centerMode: true,
  centerPadding: 60,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
