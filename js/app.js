'use strict';
$(document).ready(function() {

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    var randomNumber;

  	var newGame = function(){
      randomNumber = Math.floor(Math.random()*100)+1;
  		console.log(randomNumber);
  		console.log('hello world');
  	};

  	newGame();

    $("a.new").click(function() {
      newGame();
    });


  // on form submition - e.g. when the Guess button is pressed
  $('form').submit(function(event){
    event.preventDefault();

    var submitNumber = $('.text').val();

    console.log(submitNumber);

    if (randomNumber == submitNumber) {
      console.log("You win!");
    } else if (Math.abs(randomNumber - submitNumber) >= 50) {
      console.log("You're ice cold!");
    }

  });

});
