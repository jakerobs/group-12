var startButtonEl = document.querySelector("#start-btn");

var startNewGame = function () {
    localStorage.removeItem("categoryIds","categoryTitles");
}

startButtonEl.addEventListener("click",startNewGame);