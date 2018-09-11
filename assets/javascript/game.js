var currentGoalNumber = 0;
var wins = 0;
var losses = 0;
var totalScoreNumber = 0;
var greenNumber = 0;
var blueNumber = 0;
var redNumber = 0;
var purpleNumber = 0;

$(document).ready(function(){
    // Make a function that will generate a random number and set that to the current goal number
    function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    function setNumbers() {
        currentGoalNumber = getRndInteger(19,120);
        greenNumber = getRndInteger(1,12);
        blueNumber = getRndInteger(1,12);
        redNumber = getRndInteger(1,12);
        purpleNumber = getRndInteger(1,12);
        totalScoreNumber = 0;

        updateScore();

        $("#current-goal").text("Current Goal: " + currentGoalNumber);
        
        // console.log("Current Goal: " + currentGoalNumber);
        // console.log("Green: " + greenNumber);
        // console.log("Blue: " + blueNumber);
        // console.log("Red: " + redNumber);
        // console.log("Purple: " + purpleNumber);
    }
    setNumbers();
    // Make a function that updates the totalScore
    function updateScore(){
        $("#total-score-number").text(totalScoreNumber);
    }
    // Make a function to check if the total score is the right number
    function checkScore(){
        if(totalScoreNumber === currentGoalNumber && currentGoalNumber != 0){
            wins++;
            $("#wins").text("Wins: " + wins);
            setNumbers();
        }
        else if(totalScoreNumber > currentGoalNumber){
            losses++;
            $("#losses").text("Losses: " + losses);
            setNumbers();
        }
    }
    // Make a function that updates the score upon clicking a crystal
    $("#green-crystal").on("click", function() {
        totalScoreNumber += greenNumber;
        updateScore();
        checkScore();
    });

    $("#blue-crystal").on("click", function() {
        totalScoreNumber += blueNumber;
        updateScore();
        checkScore();
    });

    $("#red-crystal").on("click", function() {
        totalScoreNumber += redNumber;
        updateScore();
        checkScore();
    });

    $("#purple-crystal").on("click", function() {
        totalScoreNumber += purpleNumber;
        updateScore();
        checkScore();
    });
})
