$(document).ready(function(){

	$('#work .thumbnail').hover(function(){
		$(this).children('.hover-text').slideDown();
	}, function(){
		$(this).children('.hover-text').fadeOut();
	});

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-150
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});