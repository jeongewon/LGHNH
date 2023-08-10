/* 이은서 nav */
let mainMenu = $(".origin .main_menu > li"),
  twodebth = $(".main_menu li ul"),
  formLabel = $(".search_bar label"),
  header = $(".origin"),
  aside_header = $(".aside"),
  width = $(window).width(),
  close_aside = $(".close_btn"),
  open_aside = $(".aside_btn"),
  clone = $(".header-clone"),
  c_mainmenu = clone.find(".main_menu > li"),
  c_twodebth = clone.find(".main_menu li ul"),
  title = $(".title > a"),
  info = $(".info");

c_mainmenu.hover(
  function () {
    clone.css({
      paddingBottom: "54px",
    }),
      c_twodebth.css({
        display: "flex",
      }),
      $(".line").css({
        opacity: 1,
      });
  },
  function () {
    clone.css({
      paddingBottom: "47px",
    }),
      c_twodebth.css({
        display: "none",
      }),
      $(".line").css({
        opacity: 0,
      });
  }
);
$("label").mouseenter(function () {
  if (clone.hasClass("visible")) {
    clone.find(".menu .main_menu").css({
      visibility: "hidden",
    });
  } else {
    $(".menu .main_menu").css({
      visibility: "hidden",
    });
  }
});
$("form").mouseleave(function () {
  clone.find(".main_menu").css({
    visibility: "visible",
  });
});
$(".lang").mouseenter(function () {
  $(".lang_list").css({
    display: "block",
  });
});
$(".lang_list").mouseleave(function () {
  $(".lang_list").css({
    display: "none",
  });
});
/* aside */
title.on('click', function (e) {
  e.preventDefault();
  $(this).parent().siblings('li').find('> ul').slideUp();
  $(this).parent().find('> ul').slideToggle();
  $(this).parent().siblings('.title').find('a').removeClass('active');
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $(this).siblings('ul').find('li > ul').slideDown();
  }else{
    $(this).siblings('ul').find('li > ul').slideUp();
  }
});

open_aside.click(function () {
  $(".aside_menu_side").css({ right: "0" });
});
close_aside.click(function () {
  $(".aside_menu_side").css({ right: "-286px" });
  open_aside.show();
  $(this).removeClass("active");
  title.parent().find("> ul").slideUp();
});
/* resize */
$(window).resize(function () {
  width = $(window).width();
  if (width > 768) {
    header.show();
  } else {
    header.hide();
    $(".aside_menu_side").css({ right: "-286px" });
  }
});

$(".slider5").slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

let section2Tab = $(".sec2-list li");
let section3Tab = $(".sec3-list li");

section2Tab.css({ cursor: "pointer" });
section2Tab.click(function () {
  section2Tab.removeClass("active");
  $(this).addClass("active");
  let idx = $(this).index();
  $(".sec_2_contt").hide();
  $("#sec2_" + idx).show();
});

section3Tab.css({ cursor: "pointer" });
$(".sec_3_contt").hide();
$("#sec3_0").show();
section3Tab.click(function () {
  section3Tab.removeClass("active");
  $(this).addClass("active");
  let idx = $(this).index();
  $(".sec_3_contt").hide();
  $("#sec3_" + idx).show();
});

$(".d_cont_wrapper").slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        adaptiveHeight: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});

/* 이원 aside */
let goTop = $("#top");
$(window).on("scroll", function () {
  let tct = $(this).scrollTop();
  if (tct > 500) {
    goTop.addClass("active");
  } else {
    goTop.removeClass("active");
  }
});
goTop.click(function (e) {
  e.preventDefault();
  $("html,body").stop().animate({ scrollTop: 0 }, "easeInCubic");
});
