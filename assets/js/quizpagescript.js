var userAnswer = document.querySelector("#answer").textContent;

var getQuestionData = function(){
    //get question data from url
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var categoryTitle = urlParams.get("categoryTitle");
    var categoryQuestion = urlParams.get("categoryQuestion");
    var categoryAnswer = urlParams.get("categoryAnswer");

    document.querySelector("#trivia-question").textContent = "Question: " + categoryQuestion;
    document.querySelector("#trivia-categories").textContent = "The category is: " + categoryTitle;
    return categoryTitle, categoryAnswer;
};
getQuestionData();