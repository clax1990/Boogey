

let storyChoiceCount = 1;

 let getImage1 = document.getElementById("Image1");


 function storyChoice1(){
 KimberlyTalkGate1 = 1;
     switch (storyChoiceCount) {
         case 1:
         getStoryTextDisplay.innerHTML = "Woman: Use that key Mr.John gave you to get in.<br> That way I know Its really you and not some theif."
         getStoryChoice1.innerHTML = "Continue";



         storyChoiceCount = 2;
         console.log(`StoryChoiceCount: ${storyChoiceCount}`);
         break;
   
         case 2:
         getStoryTextDisplay.innerHTML = "---You look down in your bag and find the key<br> Mr. John gave you. <br> Must have slipped your mind...---"
         getStoryImageContainer.style.display = "none";
         console.log(`getStoryImageContainer-display is off`);
         storyChoiceCount = 3;
         console.log(`StoryChoiceCount: ${storyChoiceCount}`);
         break;

         case 3:
         getStoryTextDisplay.style.display = "none";
         getStoryChoice1.style.display = "none";
         getStoryImageContainer.style.display = "none";
         
         key4 = 1;
         console.log(`Key4: ${key4}`);
         storyChoiceCount = 4;
         console.log(`StoryChoiceCount: ${storyChoiceCount}`);
         break;

         case 4:
         
         KimberlyTalkGate1 = 2;
         kimberlyTalkButton();
         break;

         case 5:
         
         KimberlyTalkGate1 = 3;
         kimberlyTalkButton();
         break;

         case 6:
            KimberlyTalkGate1 = 4;
            kimberlyTalkButton();
         break;

         case 7:
            KimberlyTalkGate1 = 5;

            kimberlyTalkButton();
         break;

         case 8:
          
          getStoryChoice1.style.display = "none";
          getStoryTextDisplay.innerHTML = "";
          getStoryImageContainer.style.display = "none";
          getDiceRollButton.disabled = false;
          KimberlyTalkGate1 = 6;
          getSelectKimberly.style.display = "flex";
         // kimberlyTalkButton();
         break;

         case 9:
         getStoryTextDisplay.innerHTML = "Kimberly: Check around the house often<br> as items tend to just appear!";
         getStoryChoice1.innerHTML = "Ok thanks.";
         getStoryChoice2.style.display = "none";
         KimberlyTalkGate1= 7;
         kimberlyTalkButton();
         //kimberlyTalkButton();
         break;

         case 10:
            
          getStoryTextDisplay.innerHTML = "";
          getStoryImageContainer.style.display = "none";
          getStoryChoice1.style.display = "none";
          KimberlyTalkGate1= 8;
         
          getSelectKimberly.style.display = "flex";
         //kimberlyTalkButton();
         break;

         case 11:
         alert("11");
         getStoryTextDisplay.innerHTML = "";
         getStoryImageContainer.style.display = "none";
         getStoryChoice1.style.display = "none";
         break;

    
     }


 }