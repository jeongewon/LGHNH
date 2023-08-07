//line-up 페이드인 애니메이션
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

//섹션3 멀티플 슬라이드
$(function(){
  const beautySwiper = new Swiper('.beauty_s3_multiple', {
    slidesPerView: 5,
    spaceBetween: 50,

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 810
    },
    breakpoints: {
      1900 : {  
        slidesPerView: 5,
        spaceBetween: 50
      },
      1600: {  
        slidesPerView: 4,
        spaceBetween: 40
      },
    }
  });
});
