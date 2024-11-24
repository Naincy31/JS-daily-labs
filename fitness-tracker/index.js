const addWorkoutBtn = document.getElementById('add-workout')
const workoutInput = document.getElementById('workout')
const durationInput = document.getElementById('duration')
const workoutsEl = document.getElementById('workouts')
const fieldsRequiredEl = document.getElementById('required-msg')
const modeToggleBtn = document.getElementById('mode-toggle')

const addWorkout = () => {
    const workoutType = workoutInput.value.trim()
    const duration = durationInput.value.trim()
    if (!workoutType || !duration) {
        fieldsRequiredEl.textContent = "Please fill in both fields"
    } else {
        fieldsRequiredEl.textContent = ''
        createWorkoutList(workoutType, duration)
    }
}

const createWorkoutList = (workout, duration) => {
    const workoutEl = document.createElement('li')
    workoutEl.textContent = `${workout} - ${duration} minutes`

    const deleteBtn = document.createElement('button')
    deleteBtn.id = 'delete'
    deleteBtn.textContent = "Delete"

    deleteBtn.addEventListener('click', () => {
        workoutsEl.removeChild(workoutEl)
    })

    workoutEl.appendChild(deleteBtn)
    workoutsEl.appendChild(workoutEl)
}

const modeToggle = (e) => {
    const body = document.body
    const container = document.querySelector('.container')

    e.target.innerHTML = e.target.classList.contains('dark') ? 'Light' : 'Dark'
    e.target.classList = e.target.classList.contains('dark') ? 'light' : 'dark'

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode')
        container.classList.remove('dark-mode')
    } else {
        body.classList.add('dark-mode')
        container.classList.add('dark-mode')
    }
}

addWorkoutBtn.addEventListener('click', addWorkout)
modeToggleBtn.addEventListener('click', modeToggle)