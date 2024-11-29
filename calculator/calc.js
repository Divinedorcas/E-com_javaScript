 const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calc button');

//console.log(display);

let num1 = '';
let num2 = '';
let result = '';
let operator = '';


buttons.forEach(button=>{
   button.addEventListener( 'click', ()=>{
      const buttonValue = button.textContent;
//console.log(buttonValue);

if(!isNaN(buttonValue)){
   if(!operator){
      num1 += buttonValue;
      display.Value = num1;
   }
   else{
      num2 += buttonValue;
      display.value = num2;
   }
}

if(['*','+','/','-'].includes(buttonValue)){
   operator = buttonValue;
display.value = operator;
}

if(buttonValue === '='){
calculateResult();
}
if(buttonValue === 'C'){
   cancelResult();
   }
   });
});

 function calculateResult(){
   switch(operator){
      case '*':
      result = Number(num1) * Number(num2)
      break;
      case '+':
      result = Number(num1) + Number(num2)
      break;
      case '/':
      result = Number(num1) / Number(num2)
      break;
      case '-':
      result = parseFloat(num1) - parseFloat(num2)
      break;
      default:
         result = 'Error'
   }
   display.value = result;
 num1 = '';
 num2 = '';
 operator = '';
 }

function cancelResult() {
   num1 = '';
   num2 = '';
   result = '';
   operator = '';
   display.value = '';
}
function history(){

   const history= JSON.parse(localStorage.getItem("result"));
}

JSON.stringify(localStorage.setItem("result", calculateResult()));


