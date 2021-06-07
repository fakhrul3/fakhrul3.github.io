//event	pada saat link di klik
$('.page-scroll').on('click', function (){


	//ambil isi
	var tujuan = $(this).attr('href');


	//tangkap
	var elementujuan = $(tujuan);
	
	$('html , body').animate ({
		scrollTop: elementujuan.offset().top -50

	},1250, 'easeInOutExpo');

	event.preventDefault();


});



//parallax
//about

$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
}); 


//scroll
$(window).scroll(function() {
	var wscroll = $(this).scrollTop();

	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wscroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wscroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wscroll/1.2 +'%)'
	});



	//portfolio
	if(wscroll > $('.portfolio').offset().top -400){
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');	
			}, 300 * (i+1));
		});

		//
	}

});






















