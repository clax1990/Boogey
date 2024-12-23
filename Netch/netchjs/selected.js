


let KimberlyTalkGate1 = 0;



let getSelectedDoor1Button1 = document.getElementById("Selected-Door4-Button1");
let getSelectedDoor2Button2 = document.getElementById("Selected-Door4-Button2");

let getSelectedDoor4 = document.getElementById("Selected-Door4");

let getSelectKimberlyButton1 = document.getElementById("Selected-Kimberly-Button1");
let getSelectKimberlyButton2 = document.getElementById("Selected-Kimberly-Button2");
let getSelectKimberlyButton3 = document.getElementById("Selected-Kimberly-Button3");

let getSelectKimberly = document.getElementById("Selected-Kimberly");

let getBubbleChatText = document.getElementById("Bubble-Chat-Text");
let getBubbleChatContainer = document.getElementById("Bubble-Chat-Container");

let getShopContainer = document.getElementById("Shop-Container");

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


 function kimberlyCancelButton(){
    getSelectKimberlyButton1.style.display = "none";
    getSelectKimberlyButton2.style.display = "none";
    getSelectKimberlyButton3.style.display = "none";
 }

 function kimberlyTalkButton(){
    
    

   
    switch (KimberlyTalkGate1){
       case 1:

        getSelectKimberly.style.display = "none";

         getSelectKimberlyButton1.style.display = "none";
         getSelectKimberlyButton2.style.display = "none";
         getSelectKimberlyButton3.style.display = "none";
         getStoryImageContainer.style.display = "flex";
         getDiceRollButton.style.display = "flex";

         getDiceRollButton.disabled = true;


         getStoryTextDisplay.innerHTML = "Woman: Well Tom..<br> Those dice over there will get you across the board.<br>You will be moved 1-6 spaces each roll."
         getStoryChoice1.style.display = "flex";
        
         
         console.log(`KimberlyTalkButton() Gate1: ${KimberlyTalkGate1}`)
       break;

       case 2:
        getStoryTextDisplay.innerHTML = "Woman: The Bag icon holds your belongings.<br> The bag Icon also serves to summon your<br> Player sheet."
        getBagButton.style.display = "flex";
       
        storyChoiceCount = 5;
       break;

       case 3:
       getStoryTextDisplay.innerHTML = "Woman: Boogey will be around here somewhere.<br>You need to use his picture to banish him and<br> I've had no luck finding it."
       storyChoiceCount = 6;
       break;

       case 4:
       getStoryTextDisplay.innerHTML = "Woman: If Boogey finds you without his picture<br> then you're a dead man.."
       storyChoiceCount = 7;
      
       break;

       case 5:
         getStoryTextDisplay.innerHTML = "Woman: My name is Kimberly by the way..<br> Off you go.."
        
         storyChoiceCount = 8;
        

       break;

       case 6:
      
       getStoryImageContainer.style.display = "flex";
       getStoryChoice1.style.display = "flex";
       getStoryChoice2.style.display = "flex";
       getSelectKimberlyButton1.style.display = "none";
       getSelectKimberlyButton2.style.display = "none";
       getSelectKimberlyButton3.style.display = "none";
       getSelectKimberly.style.display = "none";
       getStoryTextDisplay.innerHTML = "Kimberly: What do you need?<br> You should be finding BOOGEY.";
       getStoryChoice1.innerHTML = "Do you have any tips for me?";
       getStoryChoice2.innerHTML = "Nevermind";
       storyChoiceCount = 9;
       break;

       case 7:
       //getStoryTextDisplay.innerHTML = "";
       //getStoryImageContainer.style.display = "none";
       //getStoryChoice1.style.display = "none";
       
       storyChoiceCount= 10;
       break;

       case 8:

       getStoryTextDisplay.innerHTML = "Kimberly: What?";
       getStoryImageContainer.style.display = "flex";
       getStoryChoice1.style.display = "flex";
       getStoryChoice1.innerHTML = "Nevermind";
       getSelectKimberlyButton1.style.display = "none";
       getSelectKimberlyButton2.style.display = "none";
       getSelectKimberlyButton3.style.display = "none";
       getSelectKimberly.style.display = "none";
       //KimberlyTalkGate1 === 8;
       //storyChoiceCount= 11;
       break;
    }



 }


 



 function kimberlyShopButton(){
   getShopContainer.style.display = "flex";
   getSelectKimberlyButton1.style.display = "none";
   getSelectKimberlyButton2.style.display = "none";
   getSelectKimberlyButton3.style.display = "none";
 }


 function BubbleOkButton(){
    getBubbleChatContainer.style.display = "none";
 }