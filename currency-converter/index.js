const inputAmountEl = document.getElementById('input-amount')
const outputAmountEl = document.getElementById('output-amount')
const form = document.getElementById('form')
const addcurrBtn = document.getElementById('add-curr')
const customcurrEl = document.getElementById('custom-curr')
const convertcurrBtn = document.getElementById('convert-curr')
const presentcurrDD = document.getElementById('present-curr')
const convertToCurrDD = document.getElementById('convert-to-curr')

const currencyRates = {
    USD: 1,
    EUR: 0.9548,
    GBP: 0.7956,
    INR: 84.4948
}

const convertCurr = (e) => {
    e.preventDefault()
    const inputAmt = parseFloat(inputAmountEl.value)
    const presentCurr = presentcurrDD.value
    const convertToCurr = convertToCurrDD.value
    const outputAmt = (inputAmt / currencyRates[presentCurr]) * currencyRates[convertToCurr]

    outputAmountEl.value = outputAmt.toFixed(2)

}

const addCurrency = () => {
    const customCurrCode = customcurrEl.value.toUpperCase()
    if (customCurrCode && !currencyRates[customCurrCode]) {
        const exchangeRate = parseFloat(prompt(`Enter exchange rate for 1 USD to ${customCurrCode}`))
        if (!isNaN(exchangeRate)) {
            currencyRates[customCurrCode] = exchangeRate
            updateCurrOptions(customCurrCode)
        } else {
            alert('Invalid exchange rate. Please enter a valid number')
        }
    } else if (currencyRates[customCurrCode]) {
        alert(`Currency ${customCurrCode} already exists`)
    } else {
        alert("Invalid currency code. Please enter a valid code (e.g., CAD).")
    }
}

const updateCurrOptions = (currCode) => {
    const option = document.createElement('option')
    option.value = currCode
    option.innerText = currCode
    presentcurrDD.appendChild(option)
    const toOption = option.cloneNode(true)
    convertToCurrDD.appendChild(toOption)
}

addcurrBtn.addEventListener('click', addCurrency)

form.addEventListener('submit', convertCurr)