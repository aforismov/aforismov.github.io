$(document).ready(function() {
	var pageW = $(this).width();
	var pageH = $(this).height();
	var i = 0;
	$(document).mousemove(function(e) {
		var v = (e.pageY/(pageH/30)).toFixed(0)-15;
		var h = (e.pageX/(pageW/30)).toFixed(0)-15;
		$('.photo__r').css('opacity', '.3');
		$('.photo__b').css('opacity', '.3');
		$('.photo__r').stop().css('transform', 'translate('+h+'px, '+v+'px)');
		$('.photo__b').stop().css('transform', 'translate('+-h+'px, '+-v+'px)');
		setTimeout(function() {
			$('.photo__r').css('opacity', '0');
			$('.photo__b').css('opacity', '0');
		}, 50);
	});
});
