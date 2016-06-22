"use strict";
//add IFFE function

             //Sample animation code

//var box = $(".box");

	// box.animate({
	// 	"width": "75px", //or +=number -=number
	// 	"height": "100px"
	// }, 3000, function(){
	// 	console.log("done")
	//}).animate({}); chain them or
	//box.animate({blahblah}) make them separate - the next one won't start until the first one finishes (same result)

	// setTimeout(function() { easier?
	// 	console.log("rfghufd");
	// }, 3000);

	// setInterval(function() {
	// 	console.log("rfghufd");
	// }, 3000);

var sampleButton = document.querySelector('#img1'); //<------possible way to do animation???

console.log(img1.dataset.info); 
console.log(img1.dataset.number);





     //Button Listeners

 // interval time in milliseconds






$('#startButton').click(function() {
	console.log("Begin!");
	alert("Captain America says begin!");
	$('[data-number="1"]').addClass('flash');

	var count = 0;
	var max = 2;
	var interval = 1000;

	setInterval(function simonSays() {

   		if (count >= max) {
        	$('[data-number="1"]').removeClass('flash');

    	} else {
        count++;

    	}
	}, interval);
	
});






$('#img1').click(function() {
	console.log("One!");
});

$('#img2').click(function() {
	console.log("Two!");
});

$('#img3').click(function() {
	console.log("Three!");
});

$('#img4').click(function() {
	console.log("Four!");
});





