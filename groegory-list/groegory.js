let groList = [];
addItemToList();
function getItem(){

const inputElement = document.querySelector(".js-gro-input");
    const value = inputElement.value;

    const priceElement = document.querySelector(".js-gro-price");
    const price = priceElement.value;
    console.log(value);
groList.push({value, price});

//inputElement.value ='';
//priceElement.value = '';
//console.log(groList);
addItemToList();

//const displayElement = document.querySelector(".display").innerHTML=toDo;
}
function addItemToList(){
    let groHtml= '';
    for(let i= 0; i < groList.length; i++){
 const groListt = groList[i];
 const {value, date}= groListt;
    const HTML=`
    <div class=" value">${value}</div>
    <div class=" date">$+${price}</div>
    `;
    

    groHtml+=HTML;
   // console.log(groHtml);
}
    const displayElement = document.querySelector(".display").innerHTML=groHtml;
}

//       function saveToDoList(toDo){
// localStorage.setItem('todo-list', JSON.stringify(toDo));


//       }


