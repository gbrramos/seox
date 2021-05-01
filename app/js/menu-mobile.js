$('#nav-icon2').click(function () {
	var target = $(this).data('alvo');
	var larguraMenu = $(target).outerWidth();
	$('nav#menu').toggleClass('open');
	$(this).toggleClass('open');
});

function menu() {
	width = screen.width;
	console.log(width);
	target = document.getElementById('menu');
	if (width > 769) {
		testClassTarget = target.matches('.open');
		if (testClassTarget == true) {
			target.classList.remove("open");
			target.style.left = '0px';
		} else {
			target.classList.add("open");
			target.style.left = '-600px';
		}
	}else{
		target.style.position = 'relative';
		target.style.left = 'inherit';
	}
}

function arrow(){
	t = document.getElementsByClassName('link_gray');
	console.log(t);
}