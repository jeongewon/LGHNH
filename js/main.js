let mainMenu = $('.main_menu > li'),
	twodebth = $('.main_menu li ul'),
	header = $('header'),
	formLabel = $('.search_bar label'),
	link = $('.main_menu li a');

link.hover(function () {
	$(this).css({ color: 'var(--BC-LGRed)' })
	},	
	function () {
	$(this).css({ color:'var(--MC-LGWhite)'})
 });
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
		// header.html('<span></span>');
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

formLabel.mouseenter(function () {
	header.css({
		height: '150px',
		backgroundColor: 'transparent'
	}),
	twodebth.css({
		display: 'none'
	}),
	$('.main_menu').css({
		display: 'none'
	});
});

$('form').mouseleave(function () {
	$('.main_menu').css({
		display: 'flex'
	});
})