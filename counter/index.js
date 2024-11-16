const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const resetBtn = document.getElementById('reset')
const inputEle = document.querySelector('input')
const headingEle = document.querySelector('h1')

let counter = 0

const updateHeading = () => {
    headingEle.innerText = counter
}

const defaultInputValue = () => {
    if (inputEle.value.trim() === '') {
        inputEle.value = 1
    }
}

incrementBtn.addEventListener('click', () => {
    counter += Number(inputEle.value) || 1
    updateHeading()
})

decrementBtn.addEventListener('click', () => {
    counter -= Number(inputEle.value) || 1
    updateHeading()
})

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateHeading()
})

inputEle.addEventListener('blur', defaultInputValue)