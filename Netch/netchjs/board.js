





let PlayerPosition = 0;
 let Gate1 = 0;


 let PlayerPiece1 = document.getElementById("Player-Piece1");
 let PlayerPiece2 = document.getElementById("Player-Piece2");
 let PlayerPiece3 = document.getElementById("Player-Piece3");
 let PlayerPiece4 = document.getElementById("Player-Piece4");
 let PlayerPiece5 = document.getElementById("Player-Piece5");
 let PlayerPiece6 = document.getElementById("Player-Piece6");
 let PlayerPiece7 = document.getElementById("Player-Piece7");
 let PlayerPiece8 = document.getElementById("Player-Piece8");
 let PlayerPiece9 = document.getElementById("Player-Piece9");
 let PlayerPiece10 = document.getElementById("Player-Piece10");
 let PlayerPiece11 = document.getElementById("Player-Piece11");
 let PlayerPiece12 = document.getElementById("Player-Piece12");
 let PlayerPiece13 = document.getElementById("Player-Piece13");
 let PlayerPiece14 = document.getElementById("Player-Piece14");
 let PlayerPiece15 = document.getElementById("Player-Piece15");
 let PlayerPiece16 = document.getElementById("Player-Piece16");
 let PlayerPiece17 = document.getElementById("Player-Piece17");
 let PlayerPiece18 = document.getElementById("Player-Piece18");
 let PlayerPiece19 = document.getElementById("Player-Piece19");
 let PlayerPiece20 = document.getElementById("Player-Piece20");



 let PlayerPieces = [PlayerPiece1, PlayerPiece2,PlayerPiece3,PlayerPiece4,PlayerPiece5,PlayerPiece6,PlayerPiece7,PlayerPiece8,PlayerPiece9,PlayerPiece10,PlayerPiece11,PlayerPiece12,PlayerPiece13,PlayerPiece14,PlayerPiece15,PlayerPiece16,PlayerPiece17,PlayerPiece18,PlayerPiece19,PlayerPiece20];




function movePlayerPiece() {
     let randomNumber = Math.floor(Math.random() * 6) + 1;
     PlayerPosition = PlayerPosition + randomNumber;
    
      console.log(`${PlayerPosition}`);
      console.log(`You Rolled a ${randomNumber}`);
      
      if(PlayerPosition >= 21){
        alert("No more room");
      }else {

      
     switch (PlayerPosition) {
         case 1:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
               
           
         break;
      
         case 2:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;
      
         case 3:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 4:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 5:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 6:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 7:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 8:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 9:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 10:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 11:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 12:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 13:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 14:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 15:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 16:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 17:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 18:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 19:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;

         case 20:
            PlayerPieces[PlayerPosition].style.display = "flex";
            PlayerPieces[PlayerPosition - randomNumber].style.display = "none";
         break;
   
  }}}