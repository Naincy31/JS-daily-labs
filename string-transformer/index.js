const input = document.querySelector('input')
const lowerEl = document.getElementById('lower')
const upperEl = document.getElementById('upper')
const camelEl = document.getElementById('camel')
const pascalEl = document.getElementById('pascal')
const snakeEl = document.getElementById('snake')
const kebabEl = document.getElementById('kebab')
const trimEl = document.getElementById('trim')

const stringTransform = ({ text = input.value.trim() }) => {
    const camelCase = text.split(' ').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
    const pascalCase = text.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join('')

    lowerEl.textContent = text.toLowerCase()
    upperEl.textContent = text.toUpperCase()
    camelEl.textContent = camelCase
    pascalEl.textContent = pascalCase
    snakeEl.textContent = text.replaceAll(' ', '_')
    kebabEl.textContent = text.replaceAll(' ', '-')
    trimEl.textContent = text.replaceAll(' ', '')
}

input.addEventListener('input', stringTransform)
stringTransform({})