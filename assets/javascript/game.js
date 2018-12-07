var computerChoicesLists = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var test=["blue", "green"];

var wins = 0;
var losses = 0;
var tries = 0;
var userGuessList =[];
var quote = [
    "You've done it before and you can do it now. See the positive possibilities. Redirect the substantial energy of your frustration and turn it into positive, effective, unstoppable determination. -Ralph Marston",
    "If you think you can do it, you can. -John Burroughs",
    "Have confidence in everything. No matter what it is that you're doing, know that you can do it better than anyone. -O'Shea Jackson, Jr.",
    "Yes, we have to look at our opponents and study our opponents. But you have to look at you first and know you can do it. -Bernard Hopkins",
    "When people ask me what the most important thing is in life, I answer: 'Just breathe.' -Yoko Ono",
    "The past cannot be changed. The future is yet in your power. -unknown",
    "The way is not in the sky. The way is in the heart. -unknown",
    "It does not matter how slowly you go as long as you do not stop. -Confucius",
    "Without hard work, nothing grows by weeds. -Gordon B. Hinckly",
    "I'd rather attempt to do something great and fail than to attempt to do nothing and succeed. -Robert H. Schuller"
];


var directionText = document.getElementById("direction-text");
var computerChoiceText =  document.getElementById ("computerchoice-text");
var winText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var triesText = document.getElementById("tries-text");
var userChoiceText = document.getElementById("userchoice-text");
var quoteText = document.getElementById("quote-text");




document.onkeyup = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    userGuessList.push(userGuess);
    console.log(userGuessList);
    var randomNumber = Math.floor(Math.random()* quote.length);

var computerChoice = computerChoicesLists[Math.floor(Math.random()* computerChoicesLists.length)];


    

    if (tries === 0){
        losses++;
        tries = 9;
        userGuessList = [];
        console.log("if guesses get to zero then declare loss and reset to 9")
        
    }

    else if (userGuess != computerChoice){
        tries--;

    }

    else if (userGuess === computerChoice){
        console.log("user guess is equal to computer choice");
        wins++;
        tries = 9;
        userGuessList = [];

        
    }

    

    winText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    triesText.textContent = "Guesses Left: " + tries;
    userChoiceText.textContent = "Your Guesses so far: " + userGuessList;
    quoteText.textContent = "Remember: "  + quote[randomNumber];
   
    
};