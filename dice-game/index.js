const winnerEl = document.getElementById('winner')
const player1Dice = document.querySelector('#player-1 .dice')
const player2Dice = document.querySelector('#player-2 .dice')
const button = document.querySelector('button')

const dicePatterns = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
}

const renderDice = (diceEl, number) => {
    diceEl.innerHTML = ''
    const positions = dicePatterns[number]

    for (let i = 0; i < 9; i++) {
        const dot = document.createElement('div')
        if (positions.includes(i)) {
            dot.className = 'dot'
        }
        diceEl.appendChild(dot)
    }
}

const play = () => {
    const player1 = Math.floor(Math.random() * 6) + 1
    const player2 = Math.floor(Math.random() * 6) + 1

    renderDice(player1Dice, player1)
    renderDice(player2Dice, player2)

    decideWinner(player1, player2)

}

const decideWinner = (player1, player2) => {
    if (player1 > player2) {
        winnerEl.innerHTML = "Player 1 Wins!"
    } else if (player1 < player2) {
        winnerEl.innerHTML = "Player 2 Wins!"
    } else {
        winnerEl.innerHTML = "DRAW!"
    }
}

button.addEventListener('click', play)
play()