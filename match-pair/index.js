const emojisContainer = document.getElementById('emojis-container')
const scoreBoard = document.getElementById('matched')
const btn = document.getElementById('restart')


let gameState = {
    matchedPairs: 0,
    totalPairs: 8,
    lockBoard: false
}


const emojis = [
    '🥝', '🍉', '🍓', '🍕', '🍔', '🥪', '🥟', '🍨'
]


const getShuffledEmojis = () => {
    const emojiPairs = [...emojis, ...emojis] //Duplicate Emojis
    return emojiPairs.sort(() => Math.random() - 0.5)
}

const createGameBoard = () => {
    emojisContainer.innerHTML = ''
    const shuffledEmojis = getShuffledEmojis()

    shuffledEmojis.forEach((emoji) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const emojiSpan = document.createElement('span')
        emojiSpan.classList.add('emoji')
        emojiSpan.textContent = emoji
        emojiSpan.hidden = true

        card.appendChild(emojiSpan)
        emojisContainer.appendChild(card)

        card.addEventListener('click', handleCardClick)
    })

    gameState.matchedPairs = 0
    scoreBoard.textContent = gameState.matchedPairs

}

const handleCardClick = (e) => {
    const card = e.target
    const emojiSpan = card.querySelector('.emoji')
    if (gameState.lockBoard || card.classList.contains('active') || e.target.classList.contains('clicked')) {
        return
    }

    card.classList.add('clicked')
    emojiSpan.hidden = false

    const cards = emojisContainer.querySelectorAll('.clicked')

    if (cards.length === 2) {
        checkForMatch(cards)
    }

    scoreBoard.textContent = matchedPairs
    const emojiEl = e.target.querySelector('.emoji')
    emojiEl.hidden = false
}

const checkForMatch = (cards) => {
    const [firstCard, secondCard] = cards

    const firstEmoji = firstCard.querySelector('.emoji').textContent
    const secondEmoji = secondCard.querySelector('.emoji').textContent

    if (firstEmoji === secondEmoji) {
        handleMatch(firstCard, secondCard)
    } else {
        handleMisMatch(cards)
    }
}

const handleMatch = (firstCard, secondCard) => {
    firstCard.classList.add('active')
    secondCard.classList.add('active')

    firstCard.classList.remove('clicked')
    secondCard.classList.remove('clicked')

    gameState.matchedPairs++
    scoreBoard.textContent = gameState.matchedPairs

    if (gameState.matchedPairs === gameState.totalPairs) {
        setTimeout(() => {
            alert('Great game! Restarting...')
            createGameBoard()
        }, 500)
    }

}

const handleMisMatch = (cards) => {
    gameState.lockBoard = true

    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove('clicked')
            card.querySelector('.emoji').hidden = true
        })

        gameState.lockBoard = false
    }, 1000)
}

btn.addEventListener('click', () => {
    createGameBoard()
})

createGameBoard()