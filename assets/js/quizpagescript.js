var getQuestionData = function(){
    //get question data from url
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var categoryTitle = urlParams.get("categoryTitle");
    var categoryQuestion = urlParams.get("categoryQuestion");
    var categoryAnswer = urlParams.get("categoryAnswer");

    document.querySelector("#trivia-question").textContent = categoryQuestion;
    return categoryTitle, categoryAnswer;
};
getQuestionData();