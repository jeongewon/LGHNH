/* Header */
let mainMenu = $('.origin .main_menu > li'),
    twodebth = $('.main_menu li ul'),
    formLabel = $('.search_bar label'),
    header = $('header'),
    headerClone = $('.origin').contents().clone(),
    headerCloneContainer = $('<div class="header-clone"></div>'),
    width = $(window).width(),
    close_aside = $('.close_btn'),
    open_aside = $('.aside_btn'),
    title = $('.title > a');

headerClone.appendTo(headerCloneContainer);
$('body').append(headerCloneContainer);

let clone = $('.header-clone'),
    c_mainmenu = clone.find('.main_menu > li'),
    c_twodebth = clone.find('.main_menu li ul');

$(window).scroll(function () {
  width = $(window).width();
  if (width > 768) {
    if ($(this).scrollTop() > 0) {
      $('.origin').hide();
      headerCloneContainer.addClass('visible');
      // $('.header-clone.visible .desktop_menu').show();
    } else {
      headerCloneContainer.removeClass('visible');
      $('.origin').show();
    }
  } else {
    if ($(this).scrollTop() > 0) {
      header.addClass('white');
    } else {
      header.removeClass('white');
    }
  }
})

mainMenu.hover(function () {
  $('.origin').css({
    height: '600px',
    backgroundColor: 'rgba(0,0,0,.7)'
  }),
  twodebth.css({
    display: 'flex'
  }),
    $('.line').css({
    opacity: 1
  })
}, function () {
  $('.origin').css({
    height: '150px',
    backgroundColor: 'transparent'
  }),
  twodebth.css({
    display: 'none'
  }),
  $('.line').css({
    opacity: 0
  })
});
c_mainmenu.hover(function () {
  let width = $(window).width();
  if (width > 768) {
    clone.css({
      paddingBottom: '54px'
    }),
      c_twodebth.css({
        display: 'flex'
      }),
      $('.line').css({
        opacity: 1
      })
  }
}, function () {
  let width = $(window).width();
  if (width > 768) {
    $('.line').css({
      opacity: 0
    }),
    clone.css({
      paddingBottom: '47px'
    }),
    c_twodebth.css({
      display: 'none'
    })
  }
});

$('label').mouseenter(function () {
  if(clone.hasClass('visible')){
    clone.find('.menu .main_menu').css({
      visibility: 'hidden'
    })
  }else{
    $('.menu .main_menu').css({
      visibility: 'hidden'
    })
  }
});
$('form').mouseleave(function () {
  if(clone.hasClass('visible')){
    clone.find('.main_menu').css({
      visibility: 'visible'
  })
  } else {
    $('.main_menu').css({
      visibility: 'visible',
    })
  }
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
  
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $(this).parent().find('> ul > ul').slideDown();
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
    if ($(window).scrollTop() > 0) {
      headerCloneContainer.addClass('visible')
    } else {
      $('.origin').show();
    }
  } else {
    if (headerCloneContainer.hasClass('visible')) {
      headerCloneContainer.removeClass('visible');
    }
  }
})

/* Beauty */
$(function(){  

  let intro_h3 = $('.beauty_intro h3'),  //사업분야
      intro_h2 = $('.beauty_intro h2'),  //글로벌 명품 BEAUTY
      intro_p = $('.beauty_intro p'),  
      introDivision = $('.beauty_division');

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




/*
$(window).on('scroll', function(){
  $(window).scrollTop();
})
*/

/* line-up 페이드인 애니메이션
$(window).on('scroll', function(){
  let windowScrollNum = $(window).scrollTop();
  let bizCate = $('.beauty_intro h3');
  let introTitle = $('.beauty_intro h2');
  let introDesc = $('.beauty_intro p');
  let division1 = $('.beauty_intro + .beauty_division');
  
  if(windowScrollNum >= 0){
    bizCate.addClass('beauty_lineup');
    introTitle.addClass('beauty_lineup');
    introDesc.addClass('beauty_lineup');
    division1.addClass('beauty_lineup');
  }
});
*/