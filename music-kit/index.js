const container = document.querySelector('.container')

const sounds = new Map([
    ['w', './audios/tom-1.mp3'],
    ['a', './audios/tom-2.mp3'],
    ['s', './audios/tom-3.mp3'],
    ['d', './audios/tom-4.mp3'],
    ['j', './audios/snare.mp3'],
    ['k', './audios/crash.mp3'],
    ['l', './audios/kick-bass.mp3'],
])

const playSound = (e) => {
    const clickedDrum = e.target
    if (clickedDrum.classList.contains('music-button')) {
        removeClassPressed()
        clickedDrum.classList.add('pressed')
        const key = clickedDrum.textContent.trim()
        const soundFile = sounds.get(key)

        if (soundFile) {
            const audio = new Audio(soundFile)
            audio.play()
        }
    }
}

const removeClassPressed = () => {
    const allButtons = document.querySelectorAll('.music-button')
    allButtons.forEach((button) => button.classList.remove('pressed'))
}

container.addEventListener('click', (e) => playSound(e))



