$(document).ready(function() {


	// sliders

	$('.slider_right').slick({
		infinite: true,
		dots: false,
		autoplay: false,
		speed: 500,
		arrows: true,
		vertical: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		nextArrow: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
		prevArrow: '<i class="fa fa-angle-down" aria-hidden="true"></i>',
		focusOnSelect: true,
		initialSlide: 7,
		asNavFor: '.slider_left',
		responsive: [
		{
			breakpoint: 720,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1,
				nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
				prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
				infinite: true,
				vertical: false,
				dots: false,
				arrows: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
				prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
				infinite: true,
				vertical: false,
				dots: false,
				arrows: true
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
				prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
				infinite: true,
				vertical: false,
				dots: false,
				arrows: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
				prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
				infinite: true,
				vertical: false,
				dots: false,
				arrows: true
			}
		},
		{
			breakpoint: 360,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
				prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
				infinite: true,
				vertical: false,
				dots: false,
				arrows: true
			}
		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
				prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
				infinite: true,
				vertical: false,
				dots: false,
				arrows: true
			}
		},
		]
	});



	$('.slider_left').slick({
		focusOnSelect: true,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider_right',

		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: false
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: false,
				asNavFor: '.sl3'
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			}

		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
			}

		}
		]
	});

// bottom-slider

	$('.products_similar__slider').slick({
		focusOnSelect: true,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		nextArrow: '<span class="ti-angle-right"></span>',
		prevArrow: '<span class="ti-angle-left"></span>',
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider_right',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: true
			}
		},
		{
			breakpoint: 970,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: true
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: true,
				asNavFor: '.sl3'
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: true,
				dots: false
			}
		},
			{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: false
			}

		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
			}

		}
		]
	});

	//active category
	$(".category__item").click(function(){
		$(".category__item").removeClass("active");
		$(this).addClass("active");
	});
	
	// active menu
	$("li.item_main").click(function(){
		$("li.item_main").removeClass("active");
		$(this).addClass("active");
	});

// tabs 
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// tabs_hidden

$(".tab_item").not(":first").hide();
$(".wrapper .tab_hidden").click(function() {
	$(".wrapper .tab_hidden").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// auto-height

function heightses(){
	$(".descr__text p, .descr__price").height('auto').equalHeights();

	}
	
	$(window).resize(function() {
		heightses();
	});
	setTimeout(function(){
		heightses();
	}, 500)

// toggle menu for small devices (767px)
$(".toggle_mnu").click(function() {
	$(this).toggleClass("on");
	$(".main-mnu").slideToggle();
	$(".sandwich").toggleClass("active");
});


$('.main-mnu li').click(function(){
	$(".main-mnu").slideToggle();
	$(".sandwich").toggleClass("active");
});

$('.main-mnu li ul li').click(function(){
	$(".main-mnu").slideToggle();
	$(".sandwich").toggleClass("active");
});



// sidebar

$(".sidebar dd").hide().prev().click(function() {
	$(this).parents(".sidebar").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});

$(function() {
	var $o, $n;
	$(".title_block").on("click", function() {
		$o = $(this).parents(".accordion_item"), $n = $o.find(".info"),
		$o.hasClass("active_block") ? ($o.removeClass("active_block"),
			$n.slideUp()) : ($o.addClass("active_block"), $n.stop(!0, !0).slideDown(),
			$o.siblings(".active_block").removeClass("active_block").children(
				".info").stop(!0, !0).slideUp())
		});
});






	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Дякуємо за реєстрацію!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	
});
// loader
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});


