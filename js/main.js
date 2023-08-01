let mainMenu = $('.main_menu > li'),
	twodebth = $('.main_menu li ul'),
	formLabel = $('.search_bar label'),
  header = $('header'),
  headerClone = header.contents().clone(),
  headerCloneContainer = $('<div class="header-clone"></div>');
  
  headerClone.appendTo(headerCloneContainer);
  $('body').append(headerCloneContainer);

$(window).scroll(function(){
  if($(this).scrollTop() > 0){
    headerCloneContainer.addClass('visible');
    header.hide();
  }else{
    headerCloneContainer.removeClass('visible');
    header.show();
  }
});

let clone = $('.header-clone'),
    c_mainmenu = clone.find('.main_menu > li'),
    c_twodebth = clone.find('.main_menu li ul');
    console.log(c_twodebth);

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

mainMenu.hover(
	function () {
		header.css({
			height: '600px',
			backgroundColor: 'rgba(0,0,0,.7)'
		}),
		twodebth.css({
			display: 'flex'
		}),
			$('.line').css({
			opacity: 1
		})
	},
	function () {
		header.css({
			height: '150px',
			backgroundColor: 'transparent'
		}),
		twodebth.css({
			display: 'none'
		}),
		$('.line').css({
			opacity: 0
		})
	}
);

console.log(clone.find('.main_menu'));

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