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

/* ESG 숫자 카운팅 */
let result = $('.result_sales');
let resultOST = result.offset().top;
let isActive = false;

$(window).scroll(function(){
    if($(this).scrollTop() > resultOST){
        if(!isActive){
            resultAnimation();
            isActive = ture;
        }
    }
});

function resultAnimation(){

  result.each(function(){
        let $this = $(this);
        let title = $this.find('h3 > span');
        let targetNum = title.attr('data-num');
        // let targetSVG = $this.find('circle');

        $({num:0}).animate({num:targetNum},{
            duration: 1500,
            progress: function(){
                let now = Math.ceil(this.num);
                title.text(now);
                // let value = 628 - (628*now/100);
                // targetSVG.css({strokeDashoffset: value});
            }
        });
    })
}



/* ESG 아코디언 */
let question = $('.liskBox').find('button'),
answer = $('.lisk_content'),
ac_header = $('.lisk_ad_header');
/*
question을 클릭하면 할일
모든 question에서 active 제거
클릭한 그 요소에 active 추가
*/

question.click(function(){
    $(this).toggleClass('active');
    // $(this).next().slideToggle();
    answer.css({display:'flex'});
    ac_header.css({background: '#409778'});
})

