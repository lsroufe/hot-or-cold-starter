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
  var guessCount = 0;

	var newGame = function(){
    randomNumber = Math.floor(Math.random()*100)+1;
		console.log(randomNumber);
		guessCount = 0;
    $('#feedback').text("Make your guess!");
    $('#count').text("0");
    $('#guessList').empty();
    $('#userGuess').val("");
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
      $('#feedback').text("You win!");
    } else if (Math.abs(randomNumber - submitNumber) >= 50) {
      $('#feedback').text("You're ice cold!");
    } else if (Math.abs(randomNumber - submitNumber) >= 30) {
      $('#feedback').text("You're cold!");
    } else if (Math.abs(randomNumber - submitNumber) >= 20) {
      $('#feedback').text("You're warm!");
    } else if (Math.abs(randomNumber - submitNumber) >= 10) {
      $('#feedback').text("You're really warm!");
    }

    $('#count').text(++guessCount);

    $('#guessList').append('<li>' + submitNumber + '</li>');

  });

});
