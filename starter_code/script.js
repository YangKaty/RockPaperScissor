var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var rsp = ["rock", "scissors", "paper"];
    var Index = Math.floor((Math.random() * 3));
    var rspIndex=rsp[Index];
    return(rspIndex);
}
// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
    if (userValue == "rock" && aiValue == "scissors"){
        userPoint++;
        return("User");
    }
    if (userValue == "rock" && aiValue == "paper"){
        aiPoint++;
        setScore();
        return("Ai");
    }
    if (userValue == "scissors" && aiValue == "paper"){
        userPoint++;
        setScore();
        return("User");
    }
    if (userValue == "scissors" && aiValue == "rock"){
        aiPoint++;
        setScore();
        return("Ai");
    }
    if (userValue == "paper" && aiValue == "rock"){
        userPoint++;
        setScore();
        return("User");
    }
    if (userValue == "paper" && aiValue == "scissors"){
        aiPoint++;
        setScore();
        return("Ai");
    }
    else {
        return ("draw")
    }
}

// This function sets the scoreboard with the correct points
function setScore() {
    $("#userPoint").text(userPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();
    alert(aiValue);
    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
    $(".token").click(
        function(evt){
            alert("");
            evaluate(evt);
        })
});
