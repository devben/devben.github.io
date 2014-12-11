$('.number').numberReel({
	infinite:true
});

var heroBtn = $('.hero-section1 [data-trigger="clickme"]');
var heroNumbers = $('.hero-section1 [data-trigger="numberReel"]');

heroBtn.on('click', function(){
	var number = Math.floor(Math.random() * 99999);
	heroNumbers.html(pad('00000',number,true)).numberReel();
});

//clickme demo

var btn = $('.demo-click [data-trigger="clickme"]');
var numbers = $('#onClick');

btn.on('click', function(){
	var number = Math.floor(Math.random() * 9999);
	numbers.html(pad('0000',number,true)).numberReel();
	 $('[data-msg="helpText"]').removeClass('hide');
});

 function pad(pad, str, padLeft) {
	  if (str == undefined) return pad;
	  if (padLeft) {
	    return (pad + str).slice(-pad.length);
	  } else {
	    return (str + pad).substring(0, pad.length);
	  }
	}
// function numberReelRun() {
// 	$('.hero-section2 > div').html(pad('0000',Math.floor(Math.random() * 9999),true)).numberReel();
// 		$('.hero-section3 > div').html(pad('0000',Math.floor(Math.random() * 9999),true)).numberReel();
// }
//     $(document).scrollsnap({
//         snaps: '.snap',
//         proximity: 200,
//         duration: 800,
//         onSnap: numberReelRun,
//         easing: 'easeOutCubic'
//     });
