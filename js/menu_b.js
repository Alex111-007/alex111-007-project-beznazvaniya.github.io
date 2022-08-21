$(document).ready(function() {
	$('.menu_b').click(function(event) {
		$('.menu_b, .menu').toggleClass('active');
		$('body').toggleClass('lock')
	})
})