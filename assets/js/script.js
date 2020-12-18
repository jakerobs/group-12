var gradeButtonEl = document.querySelectorAll("#btn-grade");


//fetch call to get random categories and assign them to category headers
var categories = function(){
    fetch("http://jservice.io/api/categories?count=4").then(function(response) { 
        if (response.ok){
            response.json().then(function(data){
                //replace text data on categories page with new categories
                console.log(data);
                document.querySelector("#category-one").textContent = data[0].title;
                document.querySelector("#category-two").textContent = data[1].title;
                document.querySelector("#category-three").textContent = data[2].title;
                document.querySelector("#category-four").textContent = data[3].title;
                var categoryOneId = data[0].id;
                var categoryTwoId = data[0].id;
                var categoryThreeId = data[0].id;
                var categoryFourId = data[0].id;
                categoryIds(categoryOneId, categoryTwoId, categoryThreeId, categoryFourId);
            });
        } else{
            //change this alert to be modal later
            alert("Error: " + response.statusText);
        }
    });
};

var categoryIds = function(categoryOneId, categoryTwoId, categoryThreeId, categoryFourId) {
    //do something with the ids
    return categoryOneId, categoryTwoId, categoryThreeId, categoryFourId;
};


//fetch info from http://jservice.io/api/"category"
//take fetched information and update the quizpage
var gradeButtonClickHandler = function(event){
    console.log(event.target.parentNode.id);

    //get difficulty rating of button
    var difficulty = event.target.getAttribute("data-difficulty");

    if (event.target.parentNode.id === "category-1"){
        //do this
        console.log(categoryOneId);
        //call questionHandlerFunction with category id and difficulty level
    } 
    else if (event.target.parentNode.id === "category-2"){
        //do this
        console.log(categoryTwoId);
        //call questionHandlerFunction with category id and difficulty level
    }
    else if (event.target.parentNode.id === "category-3"){
        //do this
        console.log(categoryThreeId);
        //call questionHandlerFunction with category id and difficulty level
    }
    else if (event.target.parentNode.id === "category-4"){
        //do this
        console.log(categoryFourId);
        //call questionHandlerFunction with category id and difficulty level
    }
};



//autocorrect fetch
//update input box with fetch value


//save high scores

//load high scores

//add functioning to landing page


gradeButtonEl.forEach(function(el){
    el.addEventListener("click",gradeButtonClickHandler);
});

//call categories
categories();