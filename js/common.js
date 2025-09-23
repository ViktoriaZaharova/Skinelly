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

// mobile menu
const mainNavigation = document.querySelector(".main-navigation");
const toggler = mainNavigation.querySelector(".navbar-toggler");

const openSideNav = () => mainNavigation.classList.add("active");
const closeSideNav = () => mainNavigation.classList.remove("active");
toggler.addEventListener("click", openSideNav);

if (toggler) {
	const body = document.querySelector('body');
	const close = document.querySelector('.sidebar-close');
	toggler.addEventListener("click", function (e) {
		body.classList.add('active');
	});
	close.addEventListener("click", function (e) {
		body.classList.remove('active');
		mainNavigation.classList.remove('active');
	});
};

$('.reviews-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	autoplay: true,
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
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