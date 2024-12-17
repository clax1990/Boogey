
 


 let count = 0;
 let playerPosition = 0;





 function movePlayerPiece() {
   let randomNumber = Math.floor(Math.random() * 6) + 1;

    count = count + randomNumber;
    playerPosition = count;


    console.log(`You Rolled a ${randomNumber}`);
    console.log(`Current Player Position: ${playerPosition}`);
    console.log(`Count: ${count}`);
    switch (playerPosition) {
    case 1:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '250%'
      
      
       });
    break;
 
    case 2:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '440%'
      
      
       });
    break;
 
    case 3:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '665%'
      
      
       });
    break;

    case 4:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '880%'
      
      
       });
    break;
 
    case 5:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '1100%'
      
      
       });
    break;
 
    case 6:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '1330%'
      
      
       });
    break;

    case 7:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '1550%'
      
      
       });
    break;
 
    case 8:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '1770%'
      
      
       });
    break;
 
    case 9:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '2000%'
      
      
       });
    break;

    case 10:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '2220%'
      
      
       });
    break;
 
    case 11:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '2450%'
      
      
       });
    break;
 
    case 12:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '2670%'
      
      
       });
    break;

    case 13:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '2890%'
      
      
       });
    break;
 
    case 14:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '3100%'
      
      
       });
    break;
 
    case 15:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '3330%'
      
      
       });
    break;

    case 16:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '3550%'
      
      
       });
    break;
 
    case 17:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '3770%'
      
      
       });
    break;
 
    case 18:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '3990%'
      
      
       });
    break;

    case 19:
      gsap.to('.Player-Piece1' , {
      
         duration: 2, transition: 3, x: '4230%'
      
      
       });
    break;
 
   
 
    
 }
 

   
  
 }


