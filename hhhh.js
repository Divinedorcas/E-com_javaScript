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

 //Develop a program to calculate the shipping cost based on 
  //  the destination zone and the weight of the package (you will be provided)
  //  Calcualte the shipping cost according to these conditions:
  //  If the destination is  'Abuja', the shiping cost is $5 per kilogram
  //  If the destination is 'Kaduna', the shiping cost is $7 per kilogram
  //  If the destination is 'Lagos', the shiping cost is $10 per kilogram
  //  If the destination is not 'Abuja', 'Kaduna', or 'Lagos', 
  //  display an error message "We do not cover this destination

 function calculateShippingCost(city, shipingPrice){
if(city==="abuja"){

}elseif(city==="kaduna"){}
elseif(city==="lagos"){}
else{
    print();
}
 }