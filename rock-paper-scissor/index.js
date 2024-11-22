const choices = document.querySelectorAll('.choice')
const botImageChoice = document.getElementById('bot-choice')
const resultEl = document.getElementById('result')
const botEl = document.getElementById('bot')
const resetBtn = document.getElementById('reset-btn')
const resultTable = document.getElementById('result-table')
const humanScoreEl = document.getElementById('human-score')
const botScoreEl = document.getElementById('bot-score')

const botChoices = ['rock', 'paper', 'scissors']

let humanScore = 0
let botScore = 0

const handleClick = (e) => {
    const humanChoice = e.target.id
    botEl.style.display = 'block'
    const botChoice = botChoices[Math.floor(Math.random() * 3)]
    botImageChoice.src = `./images/${botChoice}.png`
    const result = predictWinner(humanChoice, botChoice)
    resultEl.textContent = `${result}`
    resultTable.style.display = 'grid'
    humanScoreEl.textContent = humanScore
    botScoreEl.textContent = botScore
}

const predictWinner = (human, bot) => {
    if (human === bot) {
        return "It's a draw"
    } else if (
        (human === "rock" && bot === "scissors") ||
        (human === "paper" && bot === "rock") ||
        (human === "scissors" && bot === "paper")
    ) {
        humanScore++
        return "You win!"
    } else {
        botScore++
        return "Bot win!"
    }
}

const resetGame = () => {
    humanScore = 0
    botScore = 0
    botEl.style.display = 'none'
    resultTable.style.display = 'none'
    resultEl.textContent = `Choose your weapon!`
}

choices.forEach(choice => {
    choice.addEventListener('click', (e) => handleClick(e))
})

resetBtn.addEventListener('click', resetGame)