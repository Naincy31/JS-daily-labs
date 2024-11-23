const amountInputEl = document.getElementById('amount')
const customTipEl = document.getElementById('custom-tip')
const peopleEl = document.getElementById('people')
const tipButtons = document.querySelectorAll('.btn-tip > button')
const generateBillBtn = document.getElementById('generate-bill')
const tipValueEl = document.querySelector('.tip-value')
const totalValueEl = document.querySelector('.total-value')
const perPersonValue = document.querySelector('.pp-value')
const resetBtn = document.getElementById('reset')

let amountValue = 0
let people = 0
let tip = 0

const validateInput = () => {
    if (amountValue > 0 && people > 0 && tip >= 0) {
        generateBillBtn.disabled = false
        generateBillBtn.classList.add('active')
        return true
    } else {
        generateBillBtn.disabled = true
        generateBillBtn.classList.remove('active')
        return false
    }
}

const enableElements = (e) => {
    amountValue = parseFloat(amountInputEl.value)
    if (amountValue > 0) {
        peopleEl.disabled = false
        customTipEl.disabled = false
        tipButtons.forEach((btn) => {
            btn.classList.add('true')
            btn.disabled = false
        })
    } else {
        tipButtons.forEach((btn) => {
            btn.classList.remove('true')
            btn.disabled = true
        })
        peopleEl.disabled = true
        customTipEl.disabled = true
    }

    validateInput()
}

const setPeopleValue = () => {
    people = parseFloat(peopleEl.value)
    validateInput()
}

const setTipValue = () => {
    if (customTipEl.value !== 0) {
        tip = parseFloat(customTipEl.value / 100)
        tipButtons.forEach((btn) => {
            btn.classList.remove('active')
        })
    }
    validateInput()
}

const selectTip = (e) => {
    tipButtons.forEach((btn) => {
        btn.classList.remove('active')
        if (e && e.target.innerHTML == btn.innerHTML) {
            btn.classList.add('active')
            tip = parseFloat(btn.innerHTML) / 100
        }
    })
    customTipEl.value = ''
    validateInput()
}

const generateBill = () => {
    resetBtn.disabled = false
    resetBtn.classList.add('active')
    tipValueEl.textContent = `₹${tip * amountValue}`
    totalValueEl.textContent = `₹${amountValue + (tip * amountValue)}`
    perPersonValue.textContent = `₹${(amountValue + (tip * amountValue)) / people}`
}

const reset = () => {
    amountInputEl.value = ''
    tipButtons.forEach((btn) => {
        btn.classList.remove('active')
    })
    enableElements()
    tipValueEl.textContent = ''
    totalValueEl.textContent = ''
    perPersonValue.textContent = ''
    customTipEl.value = ''
    selectTip()
    peopleEl.value = ''
    setPeopleValue()
    validateInput()
    resetBtn.classList.remove('active')
    resetBtn.disabled = true

}

amountInputEl.addEventListener('input', enableElements)
peopleEl.addEventListener('input', setPeopleValue)
customTipEl.addEventListener('input', setTipValue)
tipButtons.forEach((btn) => {
    btn.addEventListener('click', selectTip)
})

generateBillBtn.addEventListener('click', generateBill)
resetBtn.addEventListener('click', reset)