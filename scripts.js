$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop()>700);
});

$(window).scroll(function(){
	if($(this).scrollTop()>700){
		$('.color-change').addClass('ncol');
	} else{
		$('.color-change').removeClass('ncol');
	}
});

/* Works, but causes some glitchiness with the navbar color
$(document).ready(function() {
	$(window).scroll(function() {
		$('.fade-in').each( function(i) {
			var objectBottom= $(this).offset().top + $(this).outerHeight();
			var windowBottom= $(window).scrollTop() + $(window).height();
			var offset=200;
			if(windowBottom > objectBottom-offset) {
				$(this).animate({
					'opacity': '1'
				}, 500);
			}
		});
	});
});*/