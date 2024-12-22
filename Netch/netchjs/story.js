

let storyChoiceCount = 1;

 let getImage1 = document.getElementById("Image1");


 function storyChoice1(){
 
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

    
     }


 }