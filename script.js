//player makes choice

playerChoice = prompt("[R]ock, [P]aper, or [S]cissors?");

//computer makes choice

//The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

computerChoice = math.Random();
if (computerChoice < 0.34) {
    computerChoice = "R";
} else if(computerChoice <= 0.67) {
    computerChoice = "P";
} else {
    computerChoice = "S";
}

//decision re: if player or computer wins [could use else/else if or switch]

//display stats (won or lost and total score)

//ask if they want to play again

