


 let getStoryTextDisplay = document.getElementById("Story-Text-Display");
 let getStoryChoice1 = document.getElementById("Story-Choice1");
 
 let eventGate = 0;

 function Event1(){

    //STORY
    getStoryTextDisplay.innerHTML = "As you begin to make your way inside, You see<br> something out of the corner of your eye.....<br>something is in the window..";
  
    //DISPLAY
    if(getDiceRollButton.style.display = "flex"){
      getDiceRollButton.style.display = "none";
    } else {
      getDiceRollButton.style.display = "flex";
    }
    
      
    if(getStoryChoiceDisplayContainer.style.display = "none"){
       getStoryChoiceDisplayContainer.style.display = "flex";
    } else {
       getStoryChoiceDisplayContainer.style.display = "none";
    }
    
    getStoryChoice1.style.display = "flex";
    eventGate = eventGate + 1;
    console.log(`Event Gate from Event1function: ${eventGate}`);
 };


 function Boogey(){
   alert("Summoning Boogey!");
   getStoryTextDisplay.innerHTML = "Now you've done it..."
   getStoryChoice1.style.display = "flex";
   getStoryChoice1.innerHTML = "Continue";
   getStoryChoiceDisplayContainer.style.display = "flex";
 }