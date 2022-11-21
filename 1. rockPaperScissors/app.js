const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice; 
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
     userChoice = event.target.id;
     userChoiceDisplay.innerHTML = userChoice;

     generateComputerChoice();
     getResult();
}))

function generateComputerChoice(){
    const randomNumber = (Math.floor(Math.random() * 3)) ;
    console.log(randomNumber);

    switch(randomNumber){
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
} 

function getResult (){
    if (userChoice === computerChoice){
        result = 'Draw';
    }

    if(userChoice === 'paper' && computerChoice === 'rock'){
        result = 'Win'
    }
    if(userChoice === 'scissors' && computerChoice === 'rock' ){
        result = 'You lost'
    }
    if(userChoice === 'rock' && computerChoice === 'paper' ){
        result = 'You lost'
    }
    if(userChoice === 'scissors' && computerChoice === 'paper'){
        result = 'Win'
    }
    if(userChoice === 'paper' && computerChoice === 'scissors'  ){
        result = 'You lost'
    }
    if(userChoice === 'rock' && computerChoice === 'scissors' ){
        result = 'Win'
    }

    resultDisplay.innerHTML = result;
}