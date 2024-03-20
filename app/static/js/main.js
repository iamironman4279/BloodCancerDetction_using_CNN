$(document).ready(function () {
	$(".datepicker").datepicker({ 
		autoclose: true, 
		todayHighlight: true
	}).datepicker('update', new Date());
})
			
$('.text-white a').on('click', function () {
	$(this).attr('href')
	$($(this).attr('href')).addClass('active');
});

$('.section1 .center-image img').mouseout(function () {
		let oldsrc = $(this).attr('src');
		$(this).attr('src', 'images/loveletters.png');						
})
$('.section1 .center-image img').mouseover(function () {
	let newsrc = $(this).attr('src')					
	$(this).attr('src', 'images/letter.png');
})


// (function($) {
//     "use strict";

//     /*------------------------------------------------------------------------------*/
//     /*01. Owl Sliders
// /*------------------------------------------------------------------------------*/

//     // Banner slider 1
//     var banner1 = $('.main-slider');
//     banner1.owlCarousel({
//         items: 1,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 6000,
//         autoplayHoverPause: true,
//         smartSpeed: 450,
//         margin: 0,
//         nav: false,
//         dots: false
//     });

//     // Custom banner nav buttons
//     $('.banner-mav-arrows .left-ar').on('click', function() {
//         event.preventDefault();
//         banner1.trigger('prev.owl.carousel');
//     });
//     $('.banner-mav-arrows .right-ar').on('click', function() {
//         event.preventDefault();
//         banner1.trigger('next.owl.carousel');
//     });

//     // Banner slider 2
//     var banner2 = $('.main-slider-2');
//     banner2.owlCarousel({
//         items: 1,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 6000,
//         autoplayHoverPause: true,
//         smartSpeed: 450,
//         margin: 0,
//         nav: false,
//         dots: false
//     });

//     // Custom banner nav buttons
//     $('.banner-mav-arrows-2 .left-sl2').on('click', function() {
//         event.preventDefault();
//         banner2.trigger('prev.owl.carousel');
//     });
//     $('.banner-mav-arrows-2 .right-sl2').on('click', function() {
//         event.preventDefault();
//         banner2.trigger('next.owl.carousel');
//     });

//     // Banner slider 3
//     var banner3 = $('.main-slider-3');
//     banner3.owlCarousel({
//         items: 1,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 6000,
//         autoplayHoverPause: true,
//         smartSpeed: 450,
//         margin: 0,
//         nav: true,
//         dots: false
//     });

//     // team slider
//     var teamslide = $('.team-slider');
//     teamslide.owlCarousel({
//         loop: true,
//         margin: 40,
//         nav: true,
//         navText: ["<i class='fas fa-caret-left'></i>", "<i class='fas fa-caret-right'></i>"],
//         dots: false,
//         autoplay: true,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             768: {
//                 items: 2
//             },
//             850: {
//                 items: 3
//             },
//             1000: {
//                 items: 4
//             }
//         }
//     });

//     // team slider 2
//     var teamslide2 = $('.team-slider-2');
//     teamslide2.owlCarousel({
//         loop: true,
//         margin: 40,
//         nav: false,
//         dots: false,
//         autoplay: true,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             768: {
//                 items: 2
//             },
//             1000: {
//                 items: 3
//             }
//         }
//     });
//     // Custom banner nav buttons
//     $('.team-2-arrows .left').on('click', function() {
//         event.preventDefault();
//         teamslide2.trigger('prev.owl.carousel');
//     });
//     $('.team-2-arrows .right').on('click', function() {
//         event.preventDefault();
//         teamslide2.trigger('next.owl.carousel');
//     });

//     // testimonial slider
//     var testislide = $('.testimonial-2');
//     testislide.owlCarousel({
//         loop: true,
//         margin: 30,
//         nav: true,
//         navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
//         dots: false,
//         autoplay: false,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             768: {
//                 items: 2
//             },
//             1000: {
//                 items: 2
//             }
//         }
//     });

//     // Clients logos slider
//     $('.client-logo-slide').owlCarousel({
//         loop: true,
//         margin: 90,
//         autoplay: true,
//         nav: false,
//         dots: false,
//         autoplayTimeout: 3000,
//         autoplaySpeed: 1000,
//         autoplayHoverPause: true,
//         responsive: {
//             0: {
//                 items: 2,
//                 margin: 50
//             },
//             600: {
//                 items: 2
//             },
//             991: {
//                 items: 3
//             },
//             1200: {
//                 items: 5
//             }
//         }
//     });

//     // Post image slider
//     var postSlider = $('.post-image-slider');
//     postSlider.owlCarousel({
//         items: 1,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 4000,
//         margin: 0,
//         nav: true,
//         navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
//         dots: false
//     });

//     // Relative product slider
//     var reprdtSlider = $('.relative-prdt-slider');
//     reprdtSlider.owlCarousel({
//         loop: true,
//         margin: 30,
//         nav: false,
//         dots: false,
//         autoplay: true,
//         autoplayTimeout: 4000,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 1
//             },
//             600: {
//                 items: 2
//             },
//             1199: {
//                 items: 3
//             },
//             1200: {
//                 items: 4
//             }
//         }
//     });
//     // Custom blog nav buttons
//     $('.prdt-nav-left').on('click', function() {
//         event.preventDefault();
//         reprdtSlider.trigger('prev.owl.carousel');
//     });
//     $('.prdt-nav-right').on('click', function() {
//         event.preventDefault();
//         reprdtSlider.trigger('next.owl.carousel');
//     });

//     // about work here slider
//     $('.work-gallaty').owlCarousel({
//         loop: true,
//         margin: 30,
//         autoplay: true,
//         autoplayTimeout: 4000,
//         autoplayHoverPause: true,
//         nav: false,
//         responsive: {
//             0: {
//                 items: 2
//             },
//             600: {
//                 items: 4
//             },
//             1000: {
//                 items: 6
//             }
//         }
//     });

//     /*------------------------------------------------------------------------------*/
//     /*02. Mobile menu integration
// /*------------------------------------------------------------------------------*/
//     // Mobile menu integration index 1
//     $('.main-menu-1').meanmenu({
//         meanMenuContainer: '.mobile-menu',
//         meanScreenWidth: "991"
//     });

//     /*------------------------------------------------------------------------------*/
//     /*03. Nice Selector
// /*------------------------------------------------------------------------------*/
//     //nice select
//     $('select').niceSelect(); // changing all select input style

//     /*------------------------------------------------------------------------------*/
//     /*04.Gallery filtering 
// /*------------------------------------------------------------------------------*/
//     $(window).on('load', function() {
//         // masonry gallery listing 
//         var $portfolioGrid = $('.portfolio-filter').isotope({
//             itemSelector: '.grid-item',
//             percentPosition: true,
//             masonry: {
//                 columnWidth: '.grid-sizer'
//             }
//         });

//         //preloader fade out 
//         $('.loader-outer').delay('300').fadeOut(1000);
//     });

//     /*------------------------------------------------------------------------------*/
//     /*05. Cout up number on scroll
// /*------------------------------------------------------------------------------*/
//     $('.counter').counterUp({
//         time: 2000
//     });

//     /*------------------------------------------------------------------------------*/
//     /*06. Coming soon time count
// /*------------------------------------------------------------------------------*/
//     //coming soon date count 
//     $('.clock-count').countdown('2020/03/12', function(event) {
//         var $this = $(this).html(event.strftime('' +
//             '<div class="hour-count count-3"><h1>%D <sup>Days</sup></h1></div>  ' +
//             '<div class="hour-count count-3"><h1>%H <sup>Hours</sup></h1></div>  ' +
//             '<div class="min-count count-3"> <h1>%M <sup>Mins</sup></h1> </div>  ' +
//             '<div class="sec-count count-3"> <h1>%S <sup>Sec</sup></h1> </div> ' +
//             '</div>  '));
//     });

//     /*------------------------------------------------------------------------------*/
//     /*07. Magnific pop up
// /*------------------------------------------------------------------------------*/

//     $('.popup-video').magnificPopup({
//         type: 'iframe'
//     });

//     $('.gallery-links').magnificPopup({
//         type: 'image',
//         gallery: {
//             enabled: true
//         }
//     });
//     /*------------------------------------------------------------------------------*/
//     /*08. Wow animation 
// /*------------------------------------------------------------------------------*/
//     new WOW().init();

//     /*------------------------------------------------------------------------------*/
//     /*09. Other js
// /*------------------------------------------------------------------------------*/
//     $(window).on('scroll', function() {

//         ////fade in  footer button on scroll
//         if ($(this).scrollTop() > 800) {
//             $(".scroll-btn").addClass("opacity-10"); //showing scroll up button
//         } else {
//             $(".scroll-btn").removeClass("opacity-10"); //hiding scroll up button
//         }

//     });

//     //scroll to top on cllick footer button
//     $(".scroll-btn").on('click', function(event) {
//         event.preventDefault();
//         $("html, body").animate({
//             scrollTop: 0
//         }, 800);
//     });

//     // product detail image slider
//     $('#image-gallery').lightSlider({
//         gallery: true,
//         item: 1,
//         thumbItem: 5,
//         slideMargin: 15,
//         speed: 500,
//         auto: false,
//         loop: true,
//         onSliderLoad: function() {
//             $('#image-gallery').removeClass('cS-hidden');
//         }
//     });

//     // color switch
//     $(".each-color.co1").on('click', function(e) {
//         var data1 = $(this).data('color');
//         $(".color-changing").attr('href', data1);
//     });

//     $(".each-color.co2").on('click', function(e) {
//         var data1 = $(this).data('color');
//         $(".color-changing").attr('href', data1);
//     });

//     $(".each-color.co3").on('click', function(e) {
//         var data1 = $(this).data('color');
//         $(".color-changing").attr('href', data1);
//     });

//     $(".each-color.co4").on('click', function(e) {
//         var data1 = $(this).data('color');
//         $(".color-changing").attr('href', data1);
//     });

//     $(".each-color.co5").on('click', function(e) {
//         var data1 = $(this).data('color');
//         $(".color-changing").attr('href', data1);
//     });

//     $(".each-color.co6").on('click', function(e) {
//         var data1 = $(this).data('color');
//         $(".color-changing").attr('href', data1);
//     });

//     $(".each-color.co7").on('click', function(e) {
//         var data1 = $(this).data('color');
//         $(".color-changing").attr('href', data1);
//     });

// })(jQuery); // End jQuery