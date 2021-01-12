//get leaderboard data and parse into array that is split and then sort by highest score
leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
//only split leaderboard if there is more than one value in it
if (leaderboard.length > 1){
leaderboardArray = leaderboard.split(",");
}
else{
    leaderboardArray = leaderboard;
}
//sort from hightest to lowest score
leaderboardArray.sort(function(a, b){return b - a});

//add the items to the dom
var leaderboardPopulator = function () {
    var name = JSON.parse(localStorage.getItem("name"));
    if (!name){
        getName();
    }
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
        nameEl.textContent = name;
        //add avatar next
        var avatarEl = document.createElement("img");
        avatarEl.classList.add("grid-child");
        avatarEl.classList.add("avatar");
        avatarEl.classList.add("center");
        avatarEl.src = "https://robohash.org/${" + name + "}";
        //append name and then score to container
        containerEl.appendChild(nameEl);
        containerEl.appendChild(scoreEl);
        containerEl.appendChild(avatarEl);
        //append to page
        document.querySelector("#leaderboard-body").appendChild(containerEl);
    }
}

var getName = function(){
    //create modal to get name value
    name = "NaN";
    var leaderboardNameModalEl = document.createElement("div");
    leaderboardNameModalEl.classList.add("modal");
    //create input box and button to submit
    var buttonHolderEl = document.createElement("div");
    buttonHolderEl.classList.add("columns");
    //add text
    var nameDisplayEl = document.createElement("h3");
    nameDisplayEl.textContent = "Enter Your Name Below";
    //add buttons to button holder
    var nameInputBox = document.createElement("input");
    nameInputBox.classList.add("column");
    nameInputBox.classList.add("is-three-fifths");
    nameInputBox.classList.add("button");
    nameInputBox.classList.add("clear-btn");
    nameInputBox.type = "text";
    nameInputBox.placeholder = "Enter Your Name";
    var nameSubmitButton = document.createElement("a");
    nameSubmitButton.classList.add("button");
    nameSubmitButton.classList.add("column");
    nameSubmitButton.classList.add("is-two-fifth");
    nameSubmitButton.classList.add("avatar-btn");
    nameSubmitButton.onclick = function(){localStorage.setItem("name",JSON.stringify(nameInputBox.value)); window.location.reload();};
    nameSubmitButton.textContent = "Submit";
    //append objects to button holder
    buttonHolderEl.appendChild(nameInputBox);
    buttonHolderEl.appendChild(nameSubmitButton);
    //append to dom
    leaderboardNameModalEl.appendChild(nameDisplayEl);
    leaderboardNameModalEl.appendChild(buttonHolderEl);
    document.querySelector("#leaderboard-page").appendChild(leaderboardNameModalEl);
};

leaderboardPopulator();
