const form = document.getElementById('bmi-form')
const submitBtn = document.getElementById('submit')
const bmiOutput = document.getElementById('bmi-output')
const heightInput = document.getElementById('height')
const weightInput = document.getElementById('weight')

const onStart = () => {
    heightInput.focus()
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (Number(heightInput.value) === 0 || Number(weightInput.value) === 0) {
        bmiOutput.textContent = 'Please enter valid height and weight'
        heightInput.focus()
        return;
    }
    const heightInMeters = heightInput.value / 100
    const bmi = weightInput.value / Math.pow(heightInMeters, 2)
    bmiOutput.textContent = `Your bmi is: ${bmi.toFixed(2)}`
    heightInput.value = '0'
    weightInput.value = '0'
    heightInput.focus()
}

form.addEventListener('submit', handleSubmit)
onStart()