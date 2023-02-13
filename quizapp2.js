const questions = [
    {
        que : 'What is HTML Fullform ?',
        'a' : 'Hyper Text Mark-up Language',
        'b' : 'Human Text Making Language',
        'c' : 'Hyper Tone Mark-up Language',
        'd' : 'Hyper Text Making Language',
        'correct' : 'a',
    },
    {
        que : 'Which is the mark-up langauge ? ',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'PHP',
        'd' : 'JavaScript',
        'correct' : 'a',
    },
    {
        que : 'What does T represnts in HTML ?',
        'a' : 'Tone',
        'b' : 'Texture',
        'c' : 'Text',
        'd' : 'Ten',
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