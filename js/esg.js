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



/* ESG */
/* direction slide */



$('.direction_slide').slick({
  variableWidth: true,
  dotsClass:"slick-dots",
  dots: true,
  infinite: false,
  speed: 100,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1272,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});




		

/* ESG 아코디언 */



/* ESG 숫자 카운팅 */
let result = $('.result_sales');
let resultOST = result.offset().top - 500;
let isActive = false;

$(window).scroll(function(){
  if($(this).scrollTop() > resultOST){
    if(!isActive){
      resultAnimation();
      isActive = true;
    }
  }
});

function resultAnimation(){
  result.each(function(){
    // let $this = $(this);
    // let resultNum = result.find('span');
    // let targetNum = resultNum.attr('data-num');
    
    // $({num:0}).animate({num:targetNum},{
    //   duration:1000,
    //   progress:function(){
    //     let now = Math.ceil(this.num);
    //     resultNum.text(now);
    //   }
    // });
    $('.result_sales').find('span').each(function(){
      let $this = $(this),
      countTo = $this.attr('data-num');
    
      $({countNum: $this.text()}).animate({
        countNum: countTo
      },{
        duration: 1500,
        easing:'linear',
        step: function(){
          $this.text(Math.floor(this.countNum));
        },
        complete: function(){
          $this.text(this.countNum);
        }
      }
      )
    })


  });
}


// $('.result_sales').find('span').each(function(){
//   let $this = $(this),
//   countTo = $this.attr('data-count');

//   $({countNum: $this.text()}).animate({
//     countNum: countTo
//   },{
//     duration: 1500,
//     easing:'linear',
//     step: function(){
//       $this.text(Math.floor(this.countNum));
//     },
//     complete: function(){
//       $this.text(this.countNum);
//     }
//   }
//   )
// })