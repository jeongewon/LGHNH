/* 이은서 nav */
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
    header.show();
  } else {
    header.hide();
    $('.aside_menu_side').css({right: '-286px'})
  }
})

/*about us*/

/*counting animation */

let bigNum = $('.big365'),
    bigdata = bigNum.attr('data-num');

var step = $.animateNumber.numberStepFactories.append('')
bigNum.animateNumber(
  {
    number: bigdata,
    numberStep: step
  },
  {
    easing: 'swing',
    duration: 1500
  }
);

let smallNumcontainer = $('.small365_contents');

smallNumcontainer.each(function () {
  let smallNum = $(this).find('.small_num');
  let smallData = smallNum.attr('data-num');
  $({ num: 0 }).animate({ num: smallData }, {
    duration: 1500,
    progress: function () {
      smallNum.text(smallData);
    }
  })
});

/* summary */

let summaryCard = $('.sec3 .arc_card'),
  summayMoreBtn = summaryCard.find('.more_btn');
    
summayMoreBtn.click(function () {
  $(this).toggleClass('close');
  $(this).parent('.arc_card').toggleClass('active');
})

/* history */

let allData = [],
    filteredData = [],
    yearBtnList = $('.year_list'),
    yearBtn = yearBtnList.find('li'),
    container = $('.history_list'),
    historys = container.find('li'),
    yearContainer = $('.year_list_container'),
    periodBtn = $('.year_btn'),
    perAllData = [],
    filterPData = [];

$.getJSON("./data/period.json", initPeriod);

function initPeriod(pdata){
  perAllData = pdata;
  console.log(pdata);
}

$.getJSON("./data/history.json", initHistory);

function initHistory(data){
  allData = data;
  loadHistory(2021);
}

yearBtn.click(function(){
  let val = $(this).attr('data-year');
  loadHistory(val);
  yearBtn.removeClass('active');
  $(this).addClass('active');
  container.find('li').css({transform: 'translateY(150%)'});
  container.find('li').animate({transform: 'translateY(0%)'},800,'linear');

})

function loadHistory(val){
  let listHTML = '';
  //해야할일 빈배열에 year과 일치하는 값을 가진 히스토리만 저장
  // 버튼을 누를 때마다 해당 부분만 html로 보여주기
  filteredData = allData.filter(hl => hl.year == val);
  $.each(filteredData,(i, item)=>{
    listHTML += `
    <li data-year="${val}">
      <h5 class="history_title sm-tt">${item.history.title}</h5>
      <h5 class="history_contents sm-tt">${item.history.contents}</h5>
  </li>`
  });
  container.html(listHTML);
}

/* ci */

let ciMoreBtn = $('.sec5 .more_btn'),
    clickMe = $('.clickme'),
    color = $('.color'),
    colorChip = $('.color_chip');

ciMoreBtn.click(function () {
  $(this).toggleClass('close');
  $(this).parent('.arc_card').toggleClass('information');
})

clickMe.click(function () {
  $(this).parent('.color').addClass('active');
})