/* 이은서 nav */
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
/* 박혜인 nav */
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
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

// const bMenuSwiper = new Swiper(".b-menu-slide", {
//   slidesPerView: 3,
//   slidesToScroll: 1,
//   loop: true,
//   navigation: {
//     nextEl: ".control-next",
//     prevEl: ".control-prev",
//   },
// });

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

  /*정이원*/
  $( ".news_box" ).accordion({
    heightStyle: "content"
  });

  let newstt = $('.news_tt');

  newstt.click(function(){
    $(this).toggleClass('active');
    $(this).next().find('.news_content').slideUp();
})


/* 한수연 mainslide */
// $(function(){
//   let container = $('.swiper-slide');  
//   let imgRatio = 1920/1080;  

//   $(window).resize(function(){
//     let winWidth = $(window).width();
//     let winHeight = $(window).height();
//     let browserRatio = winWidth/winHeight;  

//     if(browserRatio < imgRatio){
//       container.css({
//         height: '100%',
//         width: winHeight * imgRatio,
//         top: 0,
//         left: (winWidth - (winHeight * imgRatio))/2
//       });
//     }else{
//       container.css({
//         width: '100%',
//         height: winWidth / imgRatio,
//         left: 0,
//         top: (winHeight - winWidth / imgRatio)/2
//       });
//     }
//   });
  
//   $(window).trigger('resize');
// });

// const movieSwiper = new Swiper('.m1_slide', {
//   direction: 'horizontal',
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//   on: {
//     init: function () {
//       let time = $('.m1_slide .swiper-slide-active').find('video').get(0).duration;
//       setTimeout(function(){
//         movieSwiper.slideNext();
//       },time*1000);
//     },
//   },
// });
// movieSwiper.on('slideChange', function(){  
//   console.log(movieSwiper.activeIndex);
//   $('.m1_slide .swiper-slide').find('video').get(0).pause();
//   $('.m1_slide .swiper-slide').find('video').get(0).currentTime = 0;
//   $('.m1_slide .swiper-slide').eq(movieSwiper.activeIndex).find('video').get(0).play();
// });




