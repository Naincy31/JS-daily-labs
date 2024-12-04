const progressBar = document.getElementById('progress')
const buttons = document.querySelector('.buttons')

let progress = 0
let intervalId = null

const checkButton = (e) => {
    const button = e.target
    if (button.id === 'start') {
        startProgress()
    }

    if (button.id === 'stop') {
        stopProgress()
    }

    if (button.id === "reset") {
        resetProgress()
    }
}

const startProgress = () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            if (progress < 100) {
                progress += 5
                progressBar.value = progress
            } else {
                stopProgress()
            }
        }, 1000)
    }
}

const stopProgress = () => {
    clearInterval(intervalId)
    intervalId = null
}

const resetProgress = () => {
    stopProgress()
    progress = 0
    progressBar.value = progress
}

buttons.addEventListener('click', checkButton)