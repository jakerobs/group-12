var userAnswerEl = document.querySelector("#user-form");
var answerInputBox = document.getElementById("answer");
var answerCheck = document.querySelector("#answer-check");

//Get answers from url 
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var categoryTitle = urlParams.get("categoryTitle");
var categoryQuestion = urlParams.get("categoryQuestion");
var categoryAnswer = urlParams.get("categoryAnswer");
var difficulty = urlParams.get("difficulty");
document.querySelector("#trivia-question").textContent = "Question: " + categoryQuestion;
document.querySelector("#trivia-categories").textContent = "The category is: " + categoryTitle;

console.log(categoryAnswer);

//add value to end of clickedButton array to end game once all buttons are clicked
clickedButtons = JSON.parse(localStorage.getItem("clickedButtons"));
console.log(clickedButtons);
//split clicked buttons list 
clickedButtonsList = clickedButtons.split(',');

if (clickedButtonsList.length === 20) {
    clickedButtonsList = clickedButtonsList + ",done"
    localStorage.setItem("clickedButtons",JSON.stringify(clickedButtonsList));
}

var formSubmitHandler = function (event) {
    event.preventDefault();

    //get value from form input
    var userAnswerEl = answerInputBox.value.trim();

    if (userAnswerEl) {
        checkAnswer(userAnswerEl);
        answerInputBox.value = "";
    } else {
        alert("Please Enter an Answer!");
    }
};

var checkAnswer = function (userAnswerEl) {
    categoryAnswerLower = categoryAnswer.toLowerCase();
    userAnswerLower = userAnswerEl.toLowerCase();

    if (userAnswerLower === categoryAnswerLower) {
        console.log("Correct Answer");
        answerCheck.innerHTML = "";
        var answerCheckEl = document.createElement("h4");
        answerCheckEl.textContent = "Correct!";
        answerCheckEl.classList.add("column", "has-text-success");
        answerCheck.appendChild(answerCheckEl);
        setTimeout(function () {
            //bring user back to category page after answering question
            scorePoints();
        }, 500);

    }
    else {
        console.log("Wrong Answer");
        answerCheck.innerHTML = "";
        var answerCheckEl = document.createElement("h4");
        answerCheckEl.textContent = "Incorrect!";
        answerCheckEl.classList.add("column", "has-text-danger");
        answerCheck.appendChild(answerCheckEl);
        setTimeout(function () {
            window.location.replace("./category.html");
        }, 500);
    }
};

var scorePoints = function() {
    var score = JSON.parse(localStorage.getItem("score"));
    score = parseInt(score);
    score = score + parseInt(difficulty);
    localStorage.setItem("score",JSON.stringify(score));
    window.location.replace("./category.html");
};

var loadScore = function() {
    var score = JSON.parse(localStorage.getItem("score"));
    //assign scores to page
    if (!score){
        score = 0;
        document.querySelector("#current-score").textContent = "Score: " + 0;;
    }
    else {
        document.querySelector("#current-score").textContent = "Score: " + score;
    }
};

// progress bar fuctions
function timer(time, update, complete) {
    var start = new Date().getTime();
    var interval = setInterval(function () {
        var now = time - (new Date().getTime() - start);
        if (now <= 0) {
            clearInterval(interval);
            complete();
        }
        else update(Math.floor(now / 1000));
    }, 10);
}

timer(
    30000,
    function move() { // updates bar 
        var element = document.getElementById("progress");
        element.value += 0.01
    },
    function () { // when finished, return to question selection page. 
        console.log("Timer complete!");
        //add score to the value of the replaced html
        setTimeout(function() {
            //bring user back to category page after timer displays it is over
            window.location.replace("./category.html")
        },1000);
    }
)

//getQuestionData();
userAnswerEl.addEventListener("submit", formSubmitHandler);

//load score
loadScore();