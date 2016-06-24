"use strict";

(function () {

var steveSays = []; 
var index = 0;
var allowUserInput = false;

function mathRandom(){
	return Math.floor((Math.random() * 4) + 1);
};


function shallWePlayAGame (){

	var interval = 1000;

	steveSays.forEach(function (div, index){ 

		setTimeout(function() {  
			
			$('[data-number="' + div + '"]').addClass("flash");
			
			setTimeout(function() { 
				
				$('[data-number="' + div + '"]').removeClass("flash");
			}, interval - 100);

		}, interval * index)

	});

	setTimeout(function() {
		allowUserInput = true;
	}, interval * steveSays.length)

};


function weArePlayingAGame (){

	$('[data-info="image"]').click(function(event) { 
	 	if (allowUserInput){

		if ($(this).data("number") == steveSays[index]) { 
			
    		if (steveSays.length == (index + 1)) { 
  				steveSays.push(mathRandom()); 
  				$("#score").val(
  					(index+1)
  					);
  					index = 0; 
  					allowUserInput = false;
  				shallWePlayAGame(); 
  			} else {
  				steveSays[index++];
  			};

  		} else {
    		steveSays = []; 
    		alert("Steve says Hail Hydra.");
    		$("#score").val(0);
    		allowUserInput = false;
    		index = 0;
    		$("button").show("button");

		}
		};
	});
};

	 //Start Button listener

$('#startButton').click(function() {
    $("button").hide("button");
	$("#score").val("0"); 
	steveSays = [];
	alert("Captain America says begin!");

	steveSays.push(mathRandom());
	shallWePlayAGame();
	
});

weArePlayingAGame();


})();



