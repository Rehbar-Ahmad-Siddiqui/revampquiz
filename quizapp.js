const questions = [
    {
        que : 'When was the quiz project was assigned ? ',
        'a' : '10-02-2023',
        'b' : '09-02-2023',
        'c' : '01-02-2023',
        'd' : '08-02-2023',
        'correct' : 'a',
    },
    {
        que : 'What is the project submission date ?',
        'a' : '09-02-2023',
        'b' : '10-02-2023',
        'c' : '11-02-2023',
        'd' : '13-02-2023',
        'correct' : 'd',
    },
    {
        que : 'How many teams members can be there in one team in this competition ?',
        'a' : 'Five',
        'b' : 'Two',
        'c' : 'Four',
        'd' : 'Six',
        'correct' : 'c',
    },
];

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => { 
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    timer();
}; 

const timer = () => {
    var count = 30;
    var interval = setInterval(function(){
    document.getElementById('count').innerHTML=count;
    count--;
    if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
    submitQuiz();
  }
}, 1000);
};

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
         right++;
    }else{
         wrong++;
    }
    index++;
    loadQuestion();
    return;
};
const getAnswer = () =>  {
    let answer;
    optionInputs.forEach(
        (input) => {
           if(input.checked){
           answer = input.value;
           }
        }
    )
    return answer;
};
const reset = () =>{
  optionInputs.forEach(
    (input) => {
        input.checked = false;
    }
  )
};

const endQuiz = () => {
   document.getElementById("box").innerHTML = `
    <div style="text-align: center">
    <h3> Thank You for Playing the Quiz . </h3> 
    <h2> ${right}/${total} are correct. ${wrong} are wrong.</h2>
    </div>
    `
};
//inital call
loadQuestion();