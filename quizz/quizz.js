    let score = 0;
    let currentQuestion = 0;
   let result = '';

   const  questions = [
    {question: "1. what is your favourite programming language? a. Javascript b. phython c. php",
        answer: "phython"

    },
    {
       question: "2. what is your favourite teacher? a. john b. philip c. sam",
           answer: "sam"
    }
   ];
document.querySelector('.display').innerHTML=questions[currentQuestion].question;

function submitAnser(answer){


    if(userAnswer=== questions[currentQuestion].answer){
        alert(`Bravo, you got it right,
            And your score is: ${score}`)
    
    }else{
        alert('Incorrect answer')
    }
    
  



    // function getQuestion(){
    //     for(let i= 0; i< questions[1].length; i++){
    //         console.log('hey');
    //         }
    //         submitAnser();

    //answerInput.value = '';
    // }
}