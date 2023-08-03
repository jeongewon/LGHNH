/* 한수연 mainslide */
$(function(){
  let container = $('.swiper-slide');  
  let imgRatio = 1920/1080;  

  $(window).resize(function(){
    let winWidth = $(window).width();
    let winHeight = $(window).height();
    let browserRatio = winWidth/winHeight;  

    if(browserRatio < imgRatio){
      container.css({
        height: '100%',
        width: winHeight * imgRatio,
        top: 0,
        left: (winWidth - (winHeight * imgRatio))/2
      });
    }else{
      container.css({
        width: '100%',
        height: winWidth / imgRatio,
        left: 0,
        top: (winHeight - winWidth / imgRatio)/2
      });
    }
  });
  
  $(window).trigger('resize');
});

const movieSwiper = new Swiper('.m1_slide', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  on: {
    init: function () {
      let time = $('.m1_slide .swiper-slide-active').find('video').get(0).duration;
      setTimeout(function(){
        movieSwiper.slideNext();
      },time*1000);
    },
  },
});
movieSwiper.on('slideChange', function(){  
  console.log(movieSwiper.activeIndex);
  $('.m1_slide .swiper-slide').find('video').get(0).pause();
  $('.m1_slide .swiper-slide').find('video').get(0).currentTime = 0;
  $('.m1_slide .swiper-slide').eq(movieSwiper.activeIndex).find('video').get(0).play();
});