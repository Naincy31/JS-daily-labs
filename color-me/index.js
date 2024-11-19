const form = document.getElementById('form')
const inputEl = document.querySelector('input')
const circleContainer = document.querySelector('.circle-container')

const handleSubmit = (e) => {
    e.preventDefault()
    const inputNumber = inputEl.value

    const matchingCircle = circleContainer.querySelector(`.circle[data-number="${inputNumber}"]`)

    if (matchingCircle && !matchingCircle.classList.contains('active')) {
        const activeCircle = circleContainer.querySelector('.circle.active')
        if (activeCircle) {
            activeCircle.classList.remove('active')
        }
        matchingCircle.classList.add('active')
    }

}

form.addEventListener('submit', handleSubmit)