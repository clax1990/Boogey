
 


 let count = 0;
 let playerPosition = 0;





 function movePlayerPiece() {
   let randomNumber = Math.floor(Math.random() * 6) + 1;

    count = count + randomNumber;
    playerPosition = count;


    console.log(`You Rolled a ${randomNumber}`);
    console.log(`Current Player Position: ${playerPosition}`);
    console.log(`Count: ${count}`);
    
    if (playerPosition >= 54){
     count = 0;
     playerPosition = 0;
      alert("hello world");
      console.log(`You Rolled a ${randomNumber}`);
      console.log(`Current Player Position: ${playerPosition}`);
      console.log(`Count: ${count}`);
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, y: '20%'});
      //gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, y: '80%'});
    }


    switch (playerPosition) {
    case 1:
      gsap.to('.Player-Piece1' , {duration: 0.5, transition: 3, x: '220%'});
      
    break;
 
    case 2:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '450%'
      
      
       });
    break;
 
    case 3:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '660%'
      
      
       });
    break;

    case 4:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '880%'
      
      
       });
    break;
 
    case 5:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '1100%'
      
      
       });
    break;
 
    case 6:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '1330%'
      
      
       });
    break;

    case 7:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '1550%'
      
      
       });
    break;
 
    case 8:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '1770%'
      
      
       });
    break;
 
    case 9:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '2000%'
      
      
       });
    break;

    case 10:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '2220%'
      
      
       });
    break;
 
    case 11:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '2450%'
      
      
       });
    break;
 
    case 12:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '2670%'
      
      
       });
    break;

    case 13:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '2890%'
      
      
       });
    break;
 
    case 14:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '3100%'
      
      
       });
    break;
 
    case 15:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '3330%'
      
      
       });
    break;

    case 16:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '3550%'
      
      
       });
    break;
 
    case 17:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '3770%'
      
      
       });
    break;
 
    case 18:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '3990%'
      
      
       });
    break;

    case 19:
      gsap.to('.Player-Piece1' , {
      
         duration: 0.5, transition: 3, x: '4240%'
      
      
       });
    break;

    case 20:
    gsap.timeline()
    .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4240%'})
    .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '200%'})

    break;

    case 21:
    gsap.timeline()
    
    .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
    .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '400%'})

    break;

    case 22:
    gsap.timeline()
    
    .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
    .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '600%'})

    break;

    case 23:
    gsap.timeline()
    
    .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
    .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '800%'})

    break;

    case 24:
      gsap.timeline()
      
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1000%'})
  
      break;

    case 25:
         gsap.timeline()
         
         .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
         .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1200%'})
     
    break;

    case 26:
      gsap.timeline()
      
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1400%'})
  
    break;

    case 27:
      gsap.timeline()
      
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
  
    break;

    case 28:
         gsap.timeline()
         
         //.to('.Player-Piece1', {duration: 2, transition: 3, x: '4230%'})
         .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
         .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4030%'})
     
    break;

    case 29:
      gsap.timeline()
      
     // .to('.Player-Piece1', {duration: 2, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '3800%'})

  
    break;

    case 30:
      gsap.timeline()
      
    //  .to('.Player-Piece1', {duration: 2, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '3600%'})
  
    break;


    case 31:
       gsap.timeline()
      // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
       .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
       .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '3350%'})
    break;

    case 32:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '3150%'})
    break;

    case 33:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '2900%'})
    break;

    case 34:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '2700%'})
    break;

    case 35:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '2450%'})
    break;

    case 36:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '2250%'})
    break;

    case 37:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '2000%'})
    break;

    case 38:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '1800%'})
    break;

    case 39:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '1600%'})
    break;

    case 40:
      gsap.timeline()
   //   .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '1350%'})
    break;
    
    case 41:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '1150%'})
    break;

    case 42:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '900%'})
    break;

    case 43:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '700%'})
    break;

    case 44:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '480%'})
    break;

    case 45:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '260%'})
    break;

    case 46:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '10%'})
    break;

    case 47:
      gsap.timeline()
      //.to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      //.to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1400%'})

    break;

    case 48:
      gsap.timeline()
      //.to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
      //.to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1200%'})

    break;

    case 49:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1000%'})

    break;

    case 50:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '800%'})

    break;

    case 51:
      gsap.timeline()
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '600%'})

    break;

    case 52:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '400%'})

    break;

    case 53:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '200%'})

    break;

    case 54:
      gsap.timeline()
     // .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '4230%'})
    //  .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '1600%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, x: '10%'})
      .to('.Player-Piece1', {duration: 0.5, transition: 3, y: '00%'})

    break;








   







    

     

   
 
 
   
 
    
 }
 

   
  
 }


