let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 10) {
    alert('Please enter a number less than 10');
  } else {
    prevGuess.push(guess);
    if (numGuesses === 5) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Your Guess it Right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is Too Low');
  } else if (guess > randomNumber) {
    displayMessage('Number is Too High');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuesses++;
  remaining.innerHTML = `${6 - numGuesses}`;
}

function displayMessage(messsage) {
  lowOrHi.innerHTML = `<h2>${messsage}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('dissbled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame" >Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame')
  newGameBtn.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = []
    numGuesses = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${6 - numGuesses}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
  })

}
