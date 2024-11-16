const inputEle = document.querySelector('input')
const submitBtn = document.getElementById('submit')
const startBtn = document.getElementById('start')
const output = document.getElementById('output')
const guessDisplay = document.getElementById('guess-display')
const form = document.getElementById('form');

let guessArr = []
let botGuess

const onStartGame = () => {
    output.textContent = ''
    guessDisplay.textContent = ''
    guessArr = []
    botGuess = Math.round(Math.random() * 100)

    inputEle.disabled = false
    submitBtn.disabled = false
    startBtn.disabled = true
    inputEle.focus()
}

const onFinishGame = (msg) => {
    output.textContent = msg
    inputEle.disabled = true
    submitBtn.disabled = true
    startBtn.disabled = false
    startBtn.focus()
}

const onSubmit = (e) => {
    e.preventDefault()
    const guess = inputEle.value
    inputEle.value = ''
    guessArr.push(guess)
    guessDisplay.textContent = `Your guesses: ${guessArr.join(', ')}`

    if (guess > botGuess) {
        output.textContent = 'Too high!'
    } else if (guess < botGuess) {
        output.textContent = 'Too low!'
    } else {
        onFinishGame('You got it! Congrats')
        return;
    }

    inputEle.focus()

    if (guessArr.length >= 10) {
        onFinishGame('You lost! The number was: ' + botGuess)
    }

}

form.addEventListener('submit', onSubmit)
startBtn.addEventListener('click', onStartGame)
onStartGame()