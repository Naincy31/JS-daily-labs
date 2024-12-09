const inputEl = document.getElementById('input')
const outputEl = document.getElementById('output')
const buttonsContainer = document.querySelector('.buttons')

let inputEquation = ''
let outputValue = null
let operation = []
const delimeters = '/[+\-\/x]'

const determineInput = (e) => {
    const input = e.target.dataset.value
    if (outputValue) {
        clearFields()
    }
    if (!input) return;

    switch (input) {
        case '=':
            calculateOutput()
            break;
        case '+':
        case '-':
        case 'x':
        case '/':
            if (inputEquation && !isLastCharacterOperator()) {
                inputEquation = inputEquation.concat(input)
                operation.push(input)
                updateInputDisplay()
            }
            break;
        case 'C':
            clearFields()
            break;
        default:
            inputEquation = inputEquation.concat(input)
            updateInputDisplay()

    }
}

const isLastCharacterOperator = () => {
    const lastCharacter = inputEquation.slice(-1)
    return ['+', '-', 'x', '/'].includes(lastCharacter)
}

const updateInputDisplay = () => {
    inputEl.textContent = inputEquation || '0'
}

const clearFields = () => {
    inputEquation = ''
    outputValue = null
    updateInputDisplay()
    outputEl.hidden = true
    inputEl.style.fontSize = '25px'
}

const calculateOutput = () => {
    if (!inputEquation || isLastCharacterOperator()) {
        return alert('Invalid equation')
    }

    try {
        const sanitizedEquation = inputEquation.replace(/x/g, '*')
        outputValue = eval(sanitizedEquation)
        outputEl.textContent = outputValue
        inputEl.style.fontSize = '10px'
        outputEl.style.fontSize = '15px'
        outputEl.hidden = false
    } catch (error) {
        alert('Error in equation')
    }


}

buttonsContainer.addEventListener('click', determineInput)