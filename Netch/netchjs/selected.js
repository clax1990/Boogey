






let getSelectedDoor1Button1 = document.getElementById("Selected-Door4-Button1");
let getSelectedDoor2Button2 = document.getElementById("Selected-Door4-Button2");

let getSelectedDoor4 = document.getElementById("Selected-Door4");

let getSelectKimberlyButton1 = document.getElementById("Selected-Kimberly-Button1");
let getSelectKimberlyButton2 = document.getElementById("Selected-Kimberly-Button2");
let getSelectKimberlyButton3 = document.getElementById("Selected-Kimberly-Button3");

let getBubbleChatText = document.getElementById("Bubble-Chat-Text");
let getBubbleChatContainer = document.getElementById("Bubble-Chat-Container");
let key4 = 0;

let shroud1 = document.getElementById("Shroud1");
let shroud2 = document.getElementById("Shroud2");

function door4(){
   getSelectedDoor1Button1.style.display = "flex";
   getSelectedDoor2Button2.style.display = "flex";
}


 function doorButton1(){

     if (key4 === 1){
     shroud2.style.display = "none";
     getStoryTextDisplay.style.display = "flex";
     getStoryTextDisplay.innerHTML = `You unlock the door and make your way into the house..<br> Welcome to Boogey. Good Luck.`
     getSelectedDoor4.style.display = "none";  



        getSelectedDoor1Button1.style.display = "none";
        getSelectedDoor2Button2.style.display = "none";
     } else {
        getBubbleChatText.innerHTML = "You need a Key to enter Boogeys manson.";
        getBubbleChatContainer.style.display = "flex";
        getSelectedDoor1Button1.style.display = "none";
        getSelectedDoor2Button2.style.display = "none";
     }

 }

 function doorButton2(){
   getSelectedDoor1Button1.style.display = "none";
   getSelectedDoor2Button2.style.display = "none";
 }





 function kimberly(){
    
    getSelectKimberlyButton1.style.display = "flex";
    getSelectKimberlyButton2.style.display = "flex";
    getSelectKimberlyButton3.style.display = "flex";
 }


 function BubbleOkButton(){
    getBubbleChatContainer.style.display = "none";
 }