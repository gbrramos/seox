$('#nav-icon2').click(function(){
	var target = $(this).data('alvo');
	var larguraMenu = $(target).outerWidth();

	if(window.screen.availWidth >= 1024){
		if (!$(this).hasClass('open')){	
		$(target).animate({
			width:600,
		},function(){
					$("#nav-icon2").toggleClass('abrir');	
				})
		}
		else{
			$(target).animate({
			width:'0',
		},function(){
			$("#nav-icon2").toggleClass('abrir');	
			})
		}
		}else{
			if (!$(this).hasClass('open')){
			$(target).fadeIn(0);
			$(target).animate({
				right:0,
				opacity:1,
			},function(){
						$("#nav-icon2").toggleClass('abrir');	
					})
			}
			else{
				$(target).animate({
				right:'-' + larguraMenu,
				opacity:1,
			},function(){
						$("#nav-icon2").toggleClass('abrir');
						$(target).fadeOut('fast');	
					})
			}
		
		}

		$('nav#menu').toggleClass('open');
		$(this).toggleClass('open');

	});


