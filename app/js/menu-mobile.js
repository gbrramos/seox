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
	
		testClassTarget = target.matches('.open');
		if (testClassTarget == true) {
			target.classList.remove("open");
			target.style.left = '0px';

		} else {
			target.classList.add("open");
			target.style.left = '-600px';

		}
	
}
