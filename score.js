var urlParams = new URLSearchParams(window.location.search);
var score = urlParams.get("score");

var scoreBoard = document.getElementById("score-board")

var playAgain = document.getElementById("play-again-button")

scoreBoard.innerHTML = score;
playAgain.onclick = () => {
    location.href = "./game.html"
}