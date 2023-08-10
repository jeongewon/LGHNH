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

/*about us*/

/*counting animation */

let bigNum = $('.big365'),
    bigdata = bigNum.attr('data-num'),
    smallNumcontainer = $('.small365_contents'),
    countingSwitch = false;

$(window).scroll(function(){
  let sct2 = $(this).scrollTop();
  let ost = $('.sec2.contents').offset().top - 500;
  if(sct2 > ost){
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
    if(!countingSwitch){
      smallNumcontainer.each(function () {
        let smallNum = $(this).find('.small_num');
        let smallData = smallNum.attr('data-num');
        $({ num: 0 }).stop().animate({ num: smallData }, {
          duration: 500,
          progress: function () {
            smallNum.text(Math.ceil(this.num));
          }
        })
        countingSwitch = true;
      });
    }   
  }
})

/* summary */

let summaryCard = $('.sec3 .arc_card'),
  summayMoreBtn = summaryCard.find('.more_btn');


$(window).resize(function () {
  if ($(this).width() < 480) {
    $('.sec3 .arc_card').addClass('active');
  } else {
    $('.sec3 .arc_card').removeClass('active');
  }
})
    
summayMoreBtn.click(function () {
  $(this).toggleClass('close');
  $(this).parent('.arc_card').toggleClass('active');
})

/* history */

let allData = [],
    filteredData = [],
    yearBtnList = $('.versionh'),
    container = $('.history_list'),
    historys = container.find('li'),
    yearBtn = yearBtnList.find('li'),
    yearContainer = $('.year_list_container'),
    periodBtn = $('.year_btn'),
    perAllData = [],
    filterPData = [],
    slickSwitch = false;

$.getJSON("./data/period.json", initPeriod);

function initPeriod(pdata){
  perAllData = pdata;
  loadPeriod(2010);
}

function loadPeriod(period){
  let periodHTML = '';
  filterPData = perAllData.filter(pl => pl.period == period);
  $.each(filterPData,(i, item)=>{
    periodHTML += `
    <li class="years" data-year="${item.year}"><span>${item.year}</span></li>
    `
  })
  yearBtnList.html(periodHTML);
}

$.getJSON("./data/history.json", initHistory);

function initHistory(data){
  allData = data;
  loadHistory(2021);
};

periodBtn.click(function () {
  let period = $(this).attr('data-period');
  loadPeriod(period);
  periodBtn.removeClass('active');
  $(this).addClass('active');
  yearBtnList.attr('data-period', period)
  if(period < 2010){
    under2010(period);
    containerfade();
  } else{
    if ($(window).width() <= 768) {
      clickcircle();
      containerfade();
    } else {
      clickyear();
      containerfade();
    }
  }
  if ($(window).width() <= 768) {
    slickReactive('.slider1');
  }
});

function clickcircle() {
  let clickcircle = '<li class="clickcircle d-flex g-2 aic"><i class="fa-solid fa-arrow-up"></i><h5>상단의 년도를 클릭해보세요</h5></li>';
  container.html(clickcircle);
}
function clickyear() {
  let clickyear = '<li class="clickyear d-flex g-2 aic"><i class="fa-solid fa-arrow-left"></i><h5>좌측의 년도를 클릭해보세요</h5></li>'
  container.html(clickyear);
}

function containerfade() {
  container.find('li').css({transform: 'translateY(150%)'});
  container.find('li').animate({transform: 'translateY(0%)'},800,'linear');
}

function slickReactive(target) {
  $(target).slick('unslick');
    $(target).slick({
      arrows: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3
    });
}

let filteredUnder = [];

function under2010(val){
  let underHTML = '';
  filteredUnder = allData.filter(ul => ul.period == val);
  $.each(filteredUnder,(i, item)=>{
    underHTML += `
    <li data-year="${item.year}">
    <h5 class="history_title sm-tt">${item.history.title}</h5>
    <h5 class="history_contents sm-tt">${item.history.contents}</h5>
    </li>`
  }); 
  container.html(underHTML);
}

$(document).on('click', '.versionh .years span', function() {
  let val = $(this).parent('.years').attr('data-year');
  loadHistory(val);
  $(this).parent('.years').siblings().removeClass('active');
  $(this).parent('.years').addClass('active');
  containerfade();
  if($(window).width() > 748){
    let historyTop = $('.history .list_card').offset().top;
    $('html,body').stop().animate({scrollTop: historyTop - 400},1000,'linear');
  }
})

function loadHistory(val){
  let listHTML = '';
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


$(window).resize(function () {
  if ($(this).width() <= 768) {
    slickActive('.slider1');
    clickcircle();
    slickActive('.slider2');
  }else{
    $('.slider1').slick('unslick');
    clickyear();
    $('.slider2').slick('unslick');
  }
})

/* ci */

let ciMoreBtn = $('.sec5 .more_btn'),
    clickMe = $('.clickme'),
    color = $('.color'),
    colorChip = $('.color_chip');

ciMoreBtn.click(function () {
  $(this).toggleClass('close');
  let card = $(this).parent('.arc_card');
  card.toggleClass('hide');
  if(card.hasClass('hide')){
    card.find('.card_info').fadeIn();
    card.find('.sep_line').fadeIn();
    card.find('.card_info').css({opacity:0, display: 'block'})
    card.find('.card_info').stop().animate({opacity: 1},2000,'swing')
  }else{
    card.find('.card_info').fadeOut();
    card.find('.sep_line').fadeOut();
    card.stop().animate({opacity: 1},2200,'swing')}
})


clickMe.click(function () {
  $(this).parent('.color').addClass('active');
})

/* award */

let AAData = [],
    filteredAA = [],
    aYearBtn = $('.versiona li'),
    awardList = $('.award_list');

$.getJSON("./data/award.json", initAward);

function initAward(adata){
  AAData = adata;
  loadAward(2020);
};

aYearBtn.find('span').click(function(){
  let val3 = $(this).parent('.years').attr('data-year');
  loadAward(val3);
  $(this).parent('.years').siblings().removeClass('active');
  $(this).parent('.years').addClass('active');
  awardList.css({transform: 'translateY(10%)'});
  awardList.animate({transform: 'translateY(0%)'},1000,'linear');
  if($(window).width() > 748){
    let awardTop = $('.award .list_card').offset().top;
    $('html,body').stop().animate({scrollTop: awardTop - 200},1000,'linear');
  }
})

function loadAward(val3){
  let awardHTML = '';
  filteredAA = AAData.filter(al => al.year == val3);
  $.each(filteredAA,(i, item)=>{
    awardHTML += `
    <li data-year="${item.year}">
      <h5 class="award_title sm-tt">${item.award.title}</h5>
      <h5 class="award_content sm-tt">${item.award.content}</h5>
      <h5 class="award_ins sm-tt">${item.award.ins}</h5>
    </li>`
  });
  awardList.html(awardHTML);
}

/* scroll event */

$(window).scroll(function(){
  let sct = $(this).scrollTop();
  let oft = $('.fade_up').offset().top - 600;
  if(sct > oft){
    AOS.init();
  }
})

/* document load */

$(document).ready(function () {
  if ($(this).width() <= 768) {
    slickActive('.slider1');
    clickcircle();
    slickActive('.slider2');
  }
})

function slickActive(target) {
  $(target).slick({
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3
  });
  slickSwitch = true;
}

/* 이원 aside */

let goTop = $('#top');
  $(window).on('scroll',function(){
      let tct = $(this).scrollTop();
      if(tct > 500){
          goTop.addClass('active');
      } else {
          goTop.removeClass('active');
      }
  })
  goTop.click(function(e){
      e.preventDefault();
      $('html,body').stop().animate({scrollTop:0},'easeInCubic');
  });
