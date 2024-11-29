
let toDo = [];
addToDo();
function toDoList(){
 

    const inputElement = document.querySelector(".js-to-do-input");
    const value = inputElement.value;
    
    const dateElement = document.querySelector(".js-to-date-input");
    const date = dateElement.value;

toDo.push({value,date});

inputElement.value ='';
dateElement.value = '';
addToDo();
//console.log(toDo);


//const displayElement = document.querySelector(".display").innerHTML=toDo;
}
function addToDo(){
    let toDoHtml= '';
    for(let i= 0; i < toDo.length; i++){
 const toDoListt = toDo[i];
 const {value, date}= toDoListt;
    const HTML=`
    <div class=" value"><ol>${value}</ol></div>
    <div class=" date">${date}</div>
    <button onclick="
    toDo.splice(${i},1);
    addToDo();
    " class="delete"> DELETE </button>
    `;
    

    toDoHtml+=HTML;
    //console.log(toDoHtml);
}
    const displayElement = document.querySelector(".display").innerHTML=toDoHtml;
}

      function saveToDoList(toDo){
localStorage.setItem('todo-list', JSON.stringify(toDo));


      }