let randomNum = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessfield');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame)
{
   submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validGuess(guess);
   });
}

function validGuess(guess){
    if(isNaN(guess))
    {
        alert('please, Enter valid number');
    }
    else if(guess > 100)
    {
        alert('please, Enter less than 100 number');
    }
    else if(guess < 1)
    {
        alert('please, Enter more than 1 number');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11)
        {
            CleanUp(guess);
            dispalyMessage(`Game Over. Random Number is ${randomNum}`);
            endGame();
        }
        else{
            CleanUp(guess);
            checkGuess(guess);
        }
    }

}

// comapre with randomNumber
function checkGuess(guess){
    if(guess > randomNum){
        dispalyMessage(`Number is TOO HIGH`);
    }
    else if(guess < randomNum){
        dispalyMessage(`Number is TOO LOW`);
    }
    else if(guess === randomNum){
        dispalyMessage(`You are RIGHT`);
        endGame();
    }
}

function CleanUp(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},   `;
    numGuess++;
    Remaining.innerHTML = `${11-numGuess}`;
}

function dispalyMessage(message){
    lowOrHi.innerHTML= `${message}`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h4 id="newGame">Start new Game</h4>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newButton = document.querySelector('#newGame');
    newButton.addEventListener('click', function(val){
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess=[];
        numGuess =1;
        guessSlot.innerHTML='';
        Remaining.innerHTML= `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        StartOver.removeChild(p);
        
        playGame = true;
    });  
}
