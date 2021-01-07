//get leaderboard data and parse into array that is split and then sort by highest score
leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
leaderboardArray = leaderboard.split(",");
leaderboardArray.sort(function(a, b){return a - b});

//add the items to the dom
var leaderboardPopulator = function () {
    for (var i = 0; i < leaderboardArray.length; i++) {
        var containerEl = document.createElement("div");
        containerEl.classList.add("grid-container");
        //create score element
        var scoreEl = document.createElement("div");
        scoreEl.classList.add("grid-child");
        scoreEl.classList.add("score");
        scoreEl.textContent = leaderboardArray[i];
        //create name element
        var nameEl = document.createElement("div");
        nameEl.classList.add("grid-child");
        nameEl.classList.add("name");
        nameEl.textContent = JSON.parse(localStorage.getItem("name"));
        //add avatar next
        var avatarEl = document.createElement("div");
        avatarEl.classList.add("grid-child");
        avatarEl.classList.add("avatar");
    // add link to image here //////////////////////////////////////////////////
        //append name and then score to container
        containerEl.appendChild(nameEl);
        containerEl.appendChild(scoreEl);
        containerEl.appendChild(avatarEl);
        //append to page
        document.querySelector("#leaderboard-body").appendChild(containerEl);
    }
    

}

leaderboardPopulator();
