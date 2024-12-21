
 


 let count = 0;
 let playerPosition = 0;
 let getDiceRollButton = document.getElementById("Dice-Roll-Button");

 let randomNumberBoogey = Math.random() * 100; 


 function movePlayerPiece() {



  
 console.log(`Event Gate: ${eventGate}`);
   setTimeout(() => {
      getDiceRollButton.disabled = true;
    }, .1); 
    
    setTimeout(() => {
      getDiceRollButton.disabled = false;
    }, 3000);

   let randomNumber = Math.floor(Math.random() * 6) + 1;

    count = count + randomNumber;
    playerPosition = count;


    console.log(`You Rolled a ${randomNumber}`);
    console.log(`Current Player Position: ${playerPosition}`);
    console.log(`Count: ${count}`);
    console.log(`StoryChoice-Count: ${storyChoiceCount}`)


  
    
     if (playerPosition >= 54){
     count = 0;
     playerPosition = 0;
      console.log(`You Rolled a ${randomNumber}`);
      console.log(`Current Player Position: ${playerPosition}`);
      console.log(`Count: ${count}`);
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, y: '20%'});
      //gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, y: '80%'});
     }

     switch (playerPosition) {

     case 1:

       gsap.to('.Player-Piece1' , {duration: 0.5, opacity: 1, x: '165%'});

       Event1();
     
       if (randomNumberBoogey < 1) {
           console.log("You got the 1 in 100 chance!");
           Boogey();
           console.log(`Game over. Game ended on Tile ${playerPosition}`);
       } 

     break;
 
     case 2:
       gsap.to('.Player-Piece1' , {duration: 0.5, opacity: 1, x: '335%'});
       Event2();

       if (randomNumberBoogey < 1) {
        console.log("You got the 1 in 100 chance!");
        Boogey();
        console.log(`Game over. Game ended on Tile ${playerPosition}`);
       } 

     break;
 
     case 3:
      gsap.to('.Player-Piece1' , {duration: 0.5, x: '495%'});
     break;

     case 4:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '660%'});
     break;
 
     case 5:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '825%'});
     break;
 
     case 6:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '990%'});
     break;

    case 7:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '1155%'});
    break;
 
    case 8:
      gsap.to('.Player-Piece1' , {duration: 0.5, x: '1320%'});
    break;
 
    case 9:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '1485%'});
    break;

    case 10:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '1650%'});
    break;
 
    case 11:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '1815%'});
    break;
 
    case 12:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '1980%'});
    break;

    case 13:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '2140%'});
    break;
 
    case 14:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '2310%'});
    break;
 
    case 15:
       gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '2474%'});
    break;

    case 16:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '2635%'});
    break;
 
    case 17:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '2800%'});
    break;
 
    case 18:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '2965%'});
    break;

    case 19:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '3140%'});
    break;

    case 20:
    gsap.timeline()
    .to('.Player-Piece1', {duration: 0.5, opacity: 1, x: '3140%'})
    .to('.Player-Piece1', {duration: 0.5,  opacity: 1, y: '150%'})

    break;

    case 21:
    gsap.timeline()
    
    .to('.Player-Piece1', {duration: 0, opacity: 1, x: '3140%'})
    .to('.Player-Piece1', {duration: 0.5,  opacity: 1 , y: '300%'})

    break;

    case 22:
    gsap.timeline()
    
    .to('.Player-Piece1', {duration: 0,  opacity: 0, x: '3140%'})
    .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '450%'})

    break;

    case 23:
    gsap.timeline()
    
    .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
    .to('.Player-Piece1', {duration: 0.5,  opacity: 1, y: '600%'})

    break;

    case 24:
      gsap.timeline()
      
      .to('.Player-Piece1', {duration: 0, transition: 3, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, opacity: 1, y: '750%'})
  
      break;

    case 25:
         gsap.timeline()
         
         .to('.Player-Piece1', {duration: 0, transition: 3, opacity: 0, x: '3140%'})
         .to('.Player-Piece1', {duration: 0.5, transition: 3, opacity: 1, y: '900%'})
     
    break;

    case 26:
      gsap.timeline()
      
      .to('.Player-Piece1', {duration: 0, transition: 3, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, opacity: 1, y: '1050%'})
  
    break;

    case 27:
      gsap.timeline()
      
      .to('.Player-Piece1', {duration: 0, transition: 3, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, opacity: 1, y: '1200%'})
  
    break;

    case 28:
         gsap.timeline()
         
         //.to('.Player-Piece1', {duration: 2, transition: 3, x: '4230%'})
        // .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
         .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '1210%'})
         .to('.Player-Piece1', {duration: 1, opacity: 1, x: '2985%'})
         
     
    break;

    case 29:
      gsap.timeline()
      
    //  .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '2820%'})
  
    break;

    case 30:
      gsap.timeline()
      
    //  .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 0, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '2650%'})
  
    break;


    case 31:
       gsap.timeline()
    //   .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
       .to('.Player-Piece1', {duration: 0, opacity: 0, y: '1210%'})
       .to('.Player-Piece1', {duration: 1, opacity: 1, x: '2485%'})
    break;

    case 32:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '2323%'})
    break;

    case 33:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '2160%'})
    break;

    case 34:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '1990%'})
    break;

    case 35:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '1830%'})
    break;

    case 36:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '1670%'})
    break;

    case 37:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 0, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '1500%'})
    break;

    case 38:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '1335%'})
    break;

    case 39:
      gsap.timeline()
     //.to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '1170%'})
    break;

    case 40:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '1010%'})
    break;
    
    case 41:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '840%'})
    break;

    case 42:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 0, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '680%'})
    break;

    case 43:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '510%'})
    break;

    case 44:
      gsap.timeline()
      //.to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 0, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '350%'})
    break;

    case 45:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0, opacity: 0, x: '3140%'})
      .to('.Player-Piece1', {duration: 0, opacity: 0, y: '1210%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, x: '180%'})
    break;

    case 46:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, y: '1210%'})
      .to('.Player-Piece1', {duration: 0.5, opacity: 1, x: '10%'})
    break;

    case 47:
      gsap.timeline()
      //.to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      //.to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0, opacity:1, x: '10%'})
      .to('.Player-Piece1', {duration: 1, opacity: 1, y: '1060%'})

    break;

    case 48:
      gsap.timeline()
      //.to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      //.to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '900%'})

    break;

    case 49:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '760%'})

    break;

    case 50:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0, opacity: 0, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '610%'})

    break;

    case 51:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0, opacity: 0, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '460%'})

    break;

    case 52:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0, opacity: 1, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '312%'})

    break;

    case 53:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0, opacity: 0, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '200%'})

    break;

    case 54:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0, opacity: 0, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '00%'})

    break;

    default:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0, opacity: 0, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, opacity: 1, y: '-10%'})
    break;








   







    

     

   
 
 
   
 
    
 }
 

   
  
 }


