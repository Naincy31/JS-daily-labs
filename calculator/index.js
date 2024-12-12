const inputEl = document.getElementById('input')
const outputEl = document.getElementById('output')
const buttonsContainer = document.querySelector('.buttons')

let inputEquation = ''
let outputValue = null
let operations = []
let bodmassValue = null
const delimeters = /[+\-\/x]/

//12+3-9/2x8
//operations: [+, -, /, x]
//inputEqwith = [12, 3, 9, 2, 8]

const calculateBodmass = () => {
    inputEqwithoutOperations = inputEquation.split(delimeters).map(Number)
    console.log('Numbers without operations: ', inputEqwithoutOperations);
    console.log('operations: ', operations);

    let i = 0
    while (i < operations.length) {
        console.log('inside x / loop');

        if (operations[i] === 'x' || operations[i] === '/') {
            const result =
                operations[i] === 'x'
                    ? inputEqwithoutOperations[i] * inputEqwithoutOperations[i + 1]
                    : inputEqwithoutOperations[i] / inputEqwithoutOperations[i + 1]

            inputEqwithoutOperations.splice(i, 2, result)
            operations.splice(i, 1)
        } else {
            i++
        }
    }

    i = 0
    while (i < operations.length) {
        console.log('inside + - loop');
        const result =
            operations[i] === '+'
                ? inputEqwithoutOperations[i] + inputEqwithoutOperations[i + 1]
                : inputEqwithoutOperations[i] - inputEqwithoutOperations[i + 1]

        inputEqwithoutOperations.splice(i, 2, result)
        operations.splice(i, 1)
    }

    bodmassValue = inputEqwithoutOperations[0]
    console.log("Final Result: ", bodmassValue)

}

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
                operations.push(input)
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
    operations = []
    bodmassValue = null
}

const calculateOutput = () => {
    if (!inputEquation || isLastCharacterOperator()) {
        return alert('Invalid equation')
    }

    calculateBodmass()

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

