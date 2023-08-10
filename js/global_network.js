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

/* global network */

let cc = $('.count > div');
cc.each(function () {
  let ccc = $(this).find('.counting')
  let data = ccc.attr('data-num');
  console.log(data);
  $({ num: 0 }).animate({ num: data }, {
    duration: 1500,
    progress: function () {
      ccc.text(Math.ceil(this.num));
    }
  })
})

let $count = $('.count'),
    btn = $('.contry_btn'),
    allData = [],
    allFlag = [],
    filteredData = [],
    filteredFlag = [],
    container = $('.corporate_list'),
    flagcont = $('.contry_flag');

let ratio = window.devicePixelRatio;

$.getJSON("./data/corporate.json", initCountry);
$.getJSON("./data/flag.json", initFlag);

function initCountry(data){
  allData = data;
  loadCountry('usa');
}
function initFlag(data){
  allFlag = data;
  loadFlag('usa');
}

btn.click(function(){
  btn.removeClass('active');
  $(this).addClass('active');
  let val = $(this).attr('data-contry');
  loadCountry(val);
  loadFlag(val);
  targetfade(container.find('li'), 30);
  targetfade(flagcont, 10);
})

function targetfade(target, move) {
  target.css({transform: `translateY(${move}%)`});
  target.animate({transform: 'translateY(0%)'},800,'linear');
}

function loadFlag(val2){
  filteredFlag = allFlag.filter(fl => fl.country == val2);
  $.each(filteredFlag, (i, item) => {
    if(ratio>=2){
      flagcont.attr('src',`${item.img2}`)
    }else{
      flagcont.attr('src',`${item.img}`)
    }
  })
}

function loadCountry(val3){
  let corporateHTML = '';
  filteredData = allData.filter(cl => cl.country == val3);
  let first = filteredData[0];
  loadWeather1(first.city);
  targetfade(wcontainer, 10);
  $.each(filteredData,(i, item)=>{
    corporateHTML += `
    <li data-contry="${item.country}" data-city="${item.city}" class="city">
      <h4 class="sub-cont-tt">${item.corporate.title}</h4>
      <div class="corporate_info">
        <p class="b-l-16">${item.corporate.address}</p>
        <p class="b-l-16">${item.corporate.tell}</p>
      </div>
    </li>
    `
  })
  container.html(corporateHTML);
}

/* weather api */

let wcontainer = $('.weather_icon');

$(document).on('click', '.city', function() {
  let city = $(this).attr('data-city');
  targetfade(wcontainer, 10);
  loadWeather2(city);
})

loadWeather1('New York');

function loadWeather2(val4){
  $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${val4}&appid=eaa34fc695456c14f8e7f8b0000a79c9`, function(data){
  let icon = data.weather[0].icon;
    let alt = data.weather[0].main;
    
  wcontainer.html(`<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${alt}">`);
  $('.weather_api p').text(alt);
});
}

function loadWeather1(val4){
  $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${val4}&appid=eaa34fc695456c14f8e7f8b0000a79c9`, function(data){
  let icon = data.weather[0].icon;
    let alt = data.weather[0].main;
    
  wcontainer.html(`<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${alt}">`);
});
}

/* scroll events */

$(window).scroll(function(){
  let sct = $(this).scrollTop();
  let oft = $('.fade_up').offset().top - 600;
  if(sct > oft){
    AOS.init();
  }
})