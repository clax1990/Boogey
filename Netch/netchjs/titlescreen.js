

let getStoryChoiceDisplayContainer = document.getElementById("Story-Choice-Display-Container");
let getStoryChoiceDisplay = document.getElementById("Story-Choice-Display");
let getStoryDisplayContainer = document.getElementById("Story-Display-Container");
let getInterface1Container = document.getElementById("Interface1-Container");
let getInterface2Container = document.getElementById("Interface2-Container");
let getBoardContainer = document.getElementById("Board-Container");
let getTitleScreenContainer = document.getElementById("Title-Screen-Container");
let getStoryImageContainer = document.getElementById("Story-Image-Container");

let getBagButton = document.getElementById("Bag-Button");

function newGame(){
    getTitleScreenContainer.style.display = "none";
    getStoryImageContainer.style.display = "flex";
   // getStoryChoiceDisplayContainer.style.display = "flex";
    getStoryDisplayContainer.style.display = "flex";
    getInterface1Container.style.display = "flex";
    getBoardContainer.style.display = "flex";
    getBagButton.style.display = "flex";
    getDiceRollButton.style.display = "none";
    getStoryTextDisplay.innerHTML = "Woman: Hey! You must be Tom! <br>--She yells from a window-- "
    getStoryChoiceDisplayContainer.style.display ="flex";
    getStoryChoice1.style.display = "flex";
    getStoryChoice1.style.display = "flex";
    getStoryChoice1.innerHTML = "Yes ma'am I'm Tom.";
    getBagButton.style.display = "none";
    getPlayerStatsAttackTextContainer.innerHTML = `Attack (${Attack.PlayerAttack})`;
    getPlayerStatsGoldTextContainer.innerHTML = `Gold (${Gold.PlayerGold})`;
}

 