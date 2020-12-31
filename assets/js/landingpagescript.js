var startButtonEl = document.querySelector("#start-btn");
var leaderBoardButtonEl = document.querySelector("#leaderboard-btn");

var startNewGame = function () {
    //remove the old categories to refresh the page with new ones. 
    localStorage.removeItem("categoryIds","categoryTitles");
    localStorage.removeItem("categoryTitles");
    localStorage.setItem("score",JSON.stringify(0));
    window.location.replace("./category.html");
}
//start a new game when the start button is clicked
startButtonEl.addEventListener("click",startNewGame);

//change html page when leaderboard button is clicked
leaderBoardButtonEl.addEventListener("click", function() {
    window.location.replace("./leaderboard.html");
});