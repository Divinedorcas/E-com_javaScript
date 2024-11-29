function clickButton(){
    const randomNumber= Math.random();

    if (randomNumber >=0 && randomNumber < 1/3){
        console.log('rock');
    }
    else if ( randomNumber >1/4 && randomNumber <2/3 ){
        console.log('paper');
    }
    else if ( randomNumber >=2/3 && randomNumber >0 ){
        console.log('scissors');
    }
else{
    console.log('not working');
}

    
 }