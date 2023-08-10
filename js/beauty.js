/* ********************** Header ********************** */
let mainMenu = $('.origin .main_menu > li'),
	twodebth = $('.main_menu li ul'),
	formLabel = $('.search_bar label'),
  header = $('.origin'),
  aside_header = $('.aside'),
  width = $(window).width(),
  close_aside = $('.close_btn'),
  open_aside = $('.aside_btn'),
  clone = $('.header-clone'),
  c_mainmenu = clone.find('.main_menu > li'),
  c_twodebth = clone.find('.main_menu li ul'),
  title = $('.title > a'),
  info = $('.info');

c_mainmenu.hover(function(){
    clone.css({
      paddingBottom: '54px'
      }),
      c_twodebth.css({
      display: 'flex'
      }),
      $('.line').css({
      opacity: 1
      })
  },function(){
      clone.css({
        paddingBottom: '47px'
        }),
        c_twodebth.css({
        display: 'none'
        }),
        $('.line').css({
        opacity: 0
        })
})
$('label').mouseenter(function () {
  if(clone.hasClass('visible')){
    clone.find('.menu .main_menu').css({
      visibility: 'hidden'
  })
} else {
  $('.menu .main_menu').css({
    visibility: 'hidden'
  })
  }
});
$('form').mouseleave(function () {
clone.find('.main_menu').css({
  visibility: 'visible'
})
})
$('.lang').mouseenter(function(){
  $('.lang_list').css({
    display: 'block'
    })
});
$('.lang_list').mouseleave(function(){
  $('.lang_list').css({
    display: 'none'
    })
})
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

open_aside.click(function(){
  $('.aside_menu_side').css({right: '0'})
})
close_aside.click(function(){
  $('.aside_menu_side').css({right: '-286px'})
  open_aside.show();
  $(this).removeClass('active');
  title.parent().find('> ul').slideUp();
});
/* resize */
$(window).resize(function(){
  width = $(window).width();
  if (width > 768) {
    header.show();
  } else {
    header.hide();
    $('.aside_menu_side').css({right: '-286px'})
  }
})

/* ********************** Beauty ********************** */
$(window).on('scroll', function(){
  console.log($(window).scrollTop());
})

let winSCT = $(window).scrollTop(),
    introDV = $('.beauty_lineup3'),
    introDV_SCT = 250;

$(window).scroll(function(){
  let window_SCT = $(this).scrollTop(),
      introDivision = $('.beauty_page1 .beauty_division'),
      introDivision_SCT = 400;
 
  if(window_SCT < introDivision_SCT){
    introDivision.stop().animate({width: '95%'}, {duration: 400});
  }else {
    introDivision.stop().animate({width: '85%'}, {duration: 400}); 
  }
})

AOS.init();

$(function(){  
  //Beauty S3 Swiper Slide
  const beautySwiper = new Swiper('.beauty_s3_multiple', {
    slidesPerView: 5,
    spaceBetween: 50,

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      // dragSize: 500
    },
    breakpoints: {
      1900 : {  
        slidesPerView: 4.6,
        spaceBetween: 50
      },
      1600: {  
        slidesPerView: 4,
        spaceBetween: 40
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      771: {
        slidesPerView: 3.5,
        spaceBetween: 25,
      },
      10: {
        slidesPerView: 6,
        draggable: false
      }
    }
  });
});






/* ********************** Aside ********************** */
let goTop = $('#top');

$(window).on('scroll', function () {
  let tct = $(this).scrollTop();
  if (tct > 500) {
    goTop.addClass('active');
  } else {
    goTop.removeClass('active');
  }
})

goTop.click(function (e) {
  e.preventDefault();
  $('html,body').stop().animate({
    scrollTop: 0
  }, 'easeInCubic');
});