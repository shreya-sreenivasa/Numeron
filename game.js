var time = 4
var score = 0

var number1 = Math.round(Math.random() * 100)
var number2 = Math.round(Math.random() * 100)

var number1box = document.getElementById("number1")
var number2box = document.getElementById("number2")

number1box.innerHTML = number1;
number2box.innerHTML = number2;

var greaterThan = document.getElementById("greater-than")
greaterThan.onclick = () => {
    if (number1 > number2) {
        score++;
        resetTime(timerId)
    } else {
        location.href = "./gameover.html?score" + score;
    }
    number1 = Math.round(Math.random() * 100)
    number2 = Math.round(Math.random() * 100)
    number1box.innerHTML = number1;
    number2box.innerHTML = number2;
}


var lesserThan = document.getElementById("lesser-than")
lesserThan.onclick = () => {
    if (number1 < number2) {
        score++;
        resetTime(timerId)
    } else {
        location.href = "./gameover.html?score" + score;
    }
    number1 = Math.round(Math.random() * 100)
    number2 = Math.round(Math.random() * 100)
    number1box.innerHTML = number1;
    number2box.innerHTML = number2;
}

var equalThan = document.getElementById("equal-to")
equalThan.onclick = () => {
    if (number1 == number2) {
        score++;
        resetTime(timerId)
    } else {
        location.href = "./gameover.html?score" + score;
    }
    number1 = Math.round(Math.random() * 100)
    number2 = Math.round(Math.random() * 100)
    number1box.innerHTML = number1;
    number2box.innerHTML = number2;
}

var timer = document.getElementById("timer")
var timerId

function startTimer() {
    time = 4
    timer.innerHTML = time
    timerId = setInterval(() => {
        time--;
        if (time == 0) {
            location.href = "./gameover.html?score" + score;
        }
        timer.innerHTML = time
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId)
    startTimer();
}
startTimer();