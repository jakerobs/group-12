var startButtonEl = document.querySelector("#start-btn");
var leaderBoardButtonEl = document.querySelector("#leaderboard-btn");

var startNewGame = function () {
    //remove the old categories to refresh the page with new ones. 
    localStorage.removeItem("categoryIds","categoryTitles");
    window.location.replace("./category.html");
}
//start a new game when the start button is clicked
startButtonEl.addEventListener("click",startNewGame);

//change html page when leaderboard button is clicked
leaderBoardButtonEl.addEventListener("click", function() {
    window.location.replace("./leaderboard.html");
});