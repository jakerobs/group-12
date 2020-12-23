var userAnswerEl = document.querySelector("#user-form");
var answerInputBox = document.getElementById("answer");
var answerCheck = document.querySelector("#answer-check");

//Get answers from url 
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var categoryTitle = urlParams.get("categoryTitle");
var categoryQuestion = urlParams.get("categoryQuestion");
var categoryAnswer = urlParams.get("categoryAnswer");
document.querySelector("#trivia-question").textContent = "Question: " + categoryQuestion;
document.querySelector("#trivia-categories").textContent = "The category is: " + categoryTitle;


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
    // var categoryAnswerLower = categoryAnswer.toLowerCase;
    // var userAnswerLower = userAnswerEl.toLowerCase;

    if (userAnswerLower === categoryAnswerLower) {
        console.log("Good work");
        answerCheck.innerHTML = "";
        var answerCheckEl = document.createElement("h4");
        answerCheckEl.textContent = "Correct!";
        answerCheckEl.classList.add("column","has-text-success");
        answerCheck.appendChild(answerCheckEl);
    }
    else {
        console.log("Not Good Work");
        answerCheck.innerHTML = "";
        var answerCheckEl = document.createElement("h4");
        answerCheckEl.textContent = "Incorrect!";
        answerCheckEl.classList.add("column","has-text-danger");
        answerCheck.appendChild(answerCheckEl);
    }
};

//getQuestionData();
userAnswerEl.addEventListener("submit", formSubmitHandler);