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
		$(this).attr('src', 'img/images/loveletters.png');						
})
$('.section1 .center-image img').mouseover(function () {
	let newsrc = $(this).attr('src')					
	$(this).attr('src', 'img/images/letter.png');
})