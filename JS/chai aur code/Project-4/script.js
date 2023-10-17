//select all
let randomNum = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt')

const guessSlot = document.querySelector('.guesses')
const remainingSlot = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')
const starOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

//start
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

// logic

//1. function for check guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid number')
    }
    else if (guess < 1) {
        alert('Please Enter a number more than 1')
    }
    else if (guess > 100) {
        alert('Please Enter a number less than 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame();
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

//2.check guess is write or not
function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`Congratulation! You guessed it right.You guessed in ${numGuess-1} attemp`)
        endGame()
    }
    else if (guess < randomNum) {
        displayMessage(`Enter a high number`)
    }
    else if (guess > randomNum) {
        displayMessage(`Enter a low number`)
    }
}
//3. display updated guess or clean
function displayGuess(guess) {
    userInput.value = ''  //after takein input clean up the input field
    guessSlot.innerHTML += `${guess} ,`
    numGuess++;
    remainingSlot.innerHTML = `${11 - numGuess}`
}
//4. display message
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

//5.End the Game
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    starOver.appendChild(p);
    playGame = false;
    newGame()
}
//6.stat a  new game
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {

        let randomNum = parseInt(Math.random() * 100 + 1)
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remainingSlot.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        starOver.removeChild(p)
        playGame = true;
    })
}
