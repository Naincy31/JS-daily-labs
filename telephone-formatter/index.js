const inputEl = document.querySelector('input')
const number = document.getElementById('number')

const telTransformer = () => {
    let inputValue = inputEl.value.replace(/\D/g, "").slice(0, 10)
    let formattedValue = inputValue

    if (inputValue.length > 3) {
        formattedValue = `+(${inputValue.slice(0, 3)}) - ${inputValue.slice(3, 10)}`
    }
    inputEl.value = formattedValue
    number.textContent = formattedValue || '+(123) - 4567890'
}

inputEl.addEventListener('input', telTransformer)