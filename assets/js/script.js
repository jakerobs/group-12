var gradeButtonEl = document.querySelectorAll("#btn-grade");


//fetch call to get random categories and assign them to category headers
var categories = function(){
    var min = Math.ceil(1);
    var max = Math.floor(18415);
    var result =  Math.floor((Math.random() * (max - min)) + min);
    fetch("http://jservice.io/api/categories?count=4&offset="+result).then(function(response) { 
        if (response.ok){
            response.json().then(function(data){
                //replace text data on categories page with new categories
                console.log(data);
                document.querySelector("#category-one").textContent = data[0].title;
                document.querySelector("#category-two").textContent = data[1].title;
                document.querySelector("#category-three").textContent = data[2].title;
                document.querySelector("#category-four").textContent = data[3].title;
                var categoryOneId = data[0].id;
                var categoryTwoId = data[1].id;
                var categoryThreeId = data[2].id;
                var categoryFourId = data[3].id;
                saveIds(categoryOneId, categoryTwoId, categoryThreeId, categoryFourId);
            });
        } else{
            //change this alert to be modal later
            alert("Error: " + response.statusText);
        }
    });
};

//fetch info from http://jservice.io/api/"category"
//take fetched information and update the quizpage
var gradeButtonClickHandler = function(event){
    console.log(event.target.parentNode.id);
    loadIds();

    //get difficulty rating of button
    var difficulty = event.target.getAttribute("data-difficulty");

    if (event.target.parentNode.id === "category-1"){
        //call questionHandlerFunction with category id and difficulty level
        questionHandler(categoryIds[0],difficulty);
    } 
    else if (event.target.parentNode.id === "category-2"){
        //call questionHandlerFunction with category id and difficulty level
        questionHandler(categoryIds[1],difficulty);
    }
    else if (event.target.parentNode.id === "category-3"){
        //call questionHandlerFunction with category id and difficulty level
        questionHandler(categoryIds[2],difficulty);
    }
    else if (event.target.parentNode.id === "category-4"){
        //call questionHandlerFunction with category id and difficulty level
        questionHandler(categoryIds[3],difficulty);
    }
};

var questionHandler = function(id,difficulty){
    fetch("http://jservice.io/api/clues?category=" + id + "&value=" + difficulty).then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    //find response that fits difficulty requirement
                });
            }
        });
};

//function to save values of the category ids
var saveIds = function(categoryOneId, categoryTwoId, categoryThreeId, categoryFourId){
    //assign ids to array
    var categoryIds = [ categoryOneId, categoryTwoId, categoryThreeId, categoryFourId ];
    //save array to storage
    localStorage.setItem("categoryIds",JSON.stringify(categoryIds));
};

//function to load values of the category ids found;
var loadIds = function(){
    categoryIds = JSON.parse(localStorage.getItem("categoryIds"));
    if (!categoryIds){
        categories();
    }
    
    return categoryIds;
};

var startNewGame = function(){
    localStorage.removeItem("categoryIds");
    loadIds();
}



//autocorrect fetch
//update input box with fetch value

//add functioning to landing page


gradeButtonEl.forEach(function(el){
    el.addEventListener("click",gradeButtonClickHandler);
});

//run once the category page is opened
startNewGame();