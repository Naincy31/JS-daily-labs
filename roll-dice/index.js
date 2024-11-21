const dicesContainer = document.querySelector('.dice-container')
const button = document.querySelector('button')

const numberOfDices = 4

const dotsPattern = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
}

const createRandomDices = (dicesContainer, number) => {
    dicesContainer.innerHTML = ''
    dicesContainer.classList.add('active')
    for (let i = 0; i < number; i++) {
        const numberOfDots = Math.floor(Math.random() * 6) + 1
        const dice = createDice(numberOfDots)
        dicesContainer.appendChild(dice)
    }
}

const createDice = (dots) => {
    const dice = document.createElement('div')
    dice.classList.add('dice')
    const positions = dotsPattern[dots]
    for (let i = 0; i < 9; i++) {
        const dot = document.createElement('div')
        if (positions.includes(i)) {
            dot.classList.add('dot')
        }
        dice.appendChild(dot)
    }
    return dice
}

button.addEventListener('click', () => {
    const interval = setInterval(() => {
        createRandomDices(dicesContainer, numberOfDices)
    }, 50)

    setTimeout(() => {
        clearInterval(interval)
    }, 1000)
})