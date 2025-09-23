$('[name="phone"]').mask('+7 (999) 999-99-99');

// header scroll
if (screen.width > 992) {
	var element = document.getElementById('header');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 50) {
			element.classList.add("scroll");
		} else {
			element.classList.remove("scroll");
		}
	});
}

$('.reviews-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	autoplay: true,
	responsive: [	
		{ breakpoint: 992, settings: { slidesToShow: 2 } },
		{ breakpoint: 576, settings: { slidesToShow: 1 } }
	]
});


$('.to-from-results-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	dots: true,
	autoplay: true,
});