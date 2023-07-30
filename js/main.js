let mainMenu = document.querySelectorAll('.main_menu'),
    twodebth = document.querySelectorAll('.main_menu li ul > li'),
		header = document.querySelector('header');
        console.log(twodebth);
mainMenu.forEach(item=>{
	item.addEventListener('mouseover',()=>{
		header.style.height = '600px';
        // headerAfer.style.opacity = 1;
        header.style.backgroundColor = 'rgba(0,0,0,.7)';
	});
	item.addEventListener('mouseout',()=>{
		header.style.height = '150px';
	});
})