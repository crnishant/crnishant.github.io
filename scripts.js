/* card elements on about me page fading in on scroll, partially
working
$(document).ready(function() {
	$(window).scroll( function(){
		$('.card-deck').each( function(i){
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if( bottom_of_window > bottom_of_element ){
				$(this).animate({'opacity':'1'},10);
			}
 		});
	});
});*/

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

	