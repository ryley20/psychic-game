      
    
    //global variables
    var Alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
                          "s","t","u","v","w","x","y","z"];
    
    var outcomeBox = document.getElementById("outcome");

    var win = document.getElementById("win");
    
    var winCount = 0;
    
    var loss = document.getElementById("loss");
    
    var lossCount = 0;

    var LettersSoFar = document.getElementById("lettersSoFar");
    
    var guessesLeft = document.getElementById("guessesLeft");
    
    var max_guess_count = 10;
    
    var guess_count = 0;
    
    var answer = Alphabet[Math.floor(Math.random() * Alphabet.length)];

    var guesses = [];
    

    //function used for the end of the game along with win and loss count adder
    function gameOver(didWin) {
        message = "";

        if (didWin){
            winCount++;
            message = "You won! The correct answer was "+answer+".";
        }
        else{
            lossCount++;
            message = "You lost! The correct answer was "+answer+".";
        }

        console.log(message);
        outcomeBox.textContent = message;

        answer = Alphabet[Math.floor(Math.random() * Alphabet.length)];
        max_guess_count = 10;
        guesses = [];
        guess_count = 0;
    }
    //key function gets called when any key is pressed
    document.onkeyup = function(event) {
        var won = 0;

        outcomeBox.textContent = "";
        var guess = event.key;
        guesses[guess_count] = event.key;

        if (guess === answer) {
            won = 1;
        }

        if (won === 1 || max_guess_count === 0){
            gameOver(won)
        }

        guess_count++;
        guessesLeft.textContent = --max_guess_count;

        LettersSoFar.textContent = guesses;

        win.textContent = winCount;
        loss.textContent =  lossCount;
    }