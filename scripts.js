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

	