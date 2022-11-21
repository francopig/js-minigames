const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice; 
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
     userChoice = event.target.id;
     userChoiceDisplay.innerHTML = userChoice;

     generateComputerChoice();
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
} 