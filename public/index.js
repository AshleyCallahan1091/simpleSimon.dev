"use strict";
//add IFFE function

var steveSays = []; 
var index = 0;
var allowUserInput = false;

function mathRandom(){
	return Math.floor((Math.random() * 4) + 1);
};


function shallWePlayAGame (){

	steveSays.forEach(function (div, index){ 

		//$('[data-number="' + div + '"]').addClass('flash'); //makes randomly selected image flash

		var count = 0;
		var max = 2;
		var interval = 2000;

		setTimeout(function() {  //makes randomly selected image stop flashing

			// if (count >= max) {
			// 	$('[data-number="' + div + '"]').removeClass('flash');
			// } else {
			//  count++;
			// }

			$('[data-number="' + div + '"]').animate({

					"border-width" : "5px"


				}, 1000).animate({

					"border-width" : "0px"

				}, 1000);




		}, interval * index);
		    
	});

	
};

function weArePlayingAGame (){
	$('[data-info="image"]').click(function(event) { //user interaction
	 
 		console.log($(this).data())
 		console.log($(this).data("number"))

		if ($(this).data("number") == steveSays[index]) { //if user clicks on the right image, it moves to the next number in the array
			
    		if (steveSays.length == (index + 1)) { //if the user gets the right sequence, 
  				steveSays.push(mathRandom()); //a new random number is generated and pushed to the array
  				index = 0; //the index starts over
  				shallWePlayAGame(); //sequence starts over
  			} else {
  				steveSays[index++];
  			};

  		} else {
    		steveSays.length = 0; 
    		alert("Steve says Hail Hydra.") //or the game starts over
		}
	});
};





	 //Start Button listener

$('#startButton').click(function() {
	console.log("Begin!");
	alert("Captain America says begin!");
	steveSays.push(mathRandom());
	console.log(steveSays[index]);
	shallWePlayAGame(); 
});

weArePlayingAGame();





  		





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





