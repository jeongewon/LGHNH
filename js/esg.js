// HEADER
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
  title = $('.title a'),
  info = $('.info');

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    aside_header.addClass('white');
  } else {
    aside_header.removeClass('white');
  }
});
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
  $(this).toggleClass('active');
})
open_aside.click(function(){
  $('.aside_menu_side').css({right: '0'})
})
close_aside.click(function(){
  $('.aside_menu_side').css({right: '-286px'})
    open_aside.show();
});
/* resize */
$(window).resize(function(){
  width = $(window).width();
  console.log(width);
  if (width > 768) {
    header.show();
  } else {
    header.hide();
    $('.aside_menu_side').css({right: '-286px'})
  }
})



/* ESG */
/* ESG 아코디언 */
$( ".lisk_accordion" ).accordion({
  heightStyle: "content"
});

let liskBtn = $('.liskBox').find('button');

liskBtn.click(function(){
  $(this).toggleClass('active');
  $(this).$('.lisk_content').css({display:block});
})


/* ESG 숫자 카운팅 */
$('.result_sales').find('span').each(function(){
  let $this = $(this),
  countTo = $this.attr('data-count');

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



