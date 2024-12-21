
let getSelectedDoor1Button1 = document.getElementById("Selected-Door4-Button1");
let getSelectedDoor2Button2 = document.getElementById("Selected-Door4-Button2");

let key4 = 0;


function door4(){
   getSelectedDoor1Button1.style.display = "flex";
   getSelectedDoor2Button2.style.display = "flex";
}


 function doorButton1(){

     if (key4 === 1){
        alert("hello world");
     } else {
        getStoryTextDisplay.innerHTML = "You need a Key to enter Boogeys manson.";
     }

 }