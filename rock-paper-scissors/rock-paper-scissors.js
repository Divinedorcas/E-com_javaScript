function startGame(){
   const  randomMove = Math.random();
  



   if (randomMove >=0 && randomMove < 1/3){
        computerPick =  'rock';
   }
  

   else if (randomMove>1/4 && randomMove <2/3){
    computerPick =  'paper';
}


else if (randomMove >=2/3 && randomMove >0 ){
    computerPick =  'scissors';
}
return computerPick;

}


function playGame(myPick){

  const  computerPick= startGame();

  let result = "";
            if (myPick=== 'rock'){
                if(computerPick==='rock'){
                    result= 'tie';
                }
                else if(computerPick==='paper'){
                    result='lose';
                }
                else if(computerPick==='scissors'){
                    result='win';
                }
             
             startGame();
        }
        console.log(result) ; 
    }
    //    else if (myPick=== 'paper'){
    //         if(computerPick==='rock'){
    //             console.log('win');
    //         }
    //         else if(computerPick==='paper'){
    //             console.log('tie');
    //         }
    //         else if(computerPick==='scissors'){
    //             console.log('lose');
    //         }
            
    //         }
    //             else if (myPick=== 'scissors'){
    //                 if(computerPick==='rock'){
    //                     console.log('lose');
    //                 }
    //                 else if(computerPick==='paper'){
    //                     console.log('win');
    //                 }
    //                 else if(computerPick==='scissors'){
    //                     console.log('tie');
    //                 }
                    
    //                 }
        else{
            console.log("not working");
}

}