const form = document.getElementById('form')
const inputEl = document.querySelector('input')
const chipsContainer = document.querySelector('.chips')

// const createChip = () => {
//     const chipEl = document.createElement('div')
//     chipEl.classList.add('chip')
//     chipEl.textContent = inputEl.value
//     const deleteBtn = document.createElement('button')
//     deleteBtn.classList.add('delete')
//     deleteBtn.textContent = 'X'
//     chipEl.appendChild(deleteBtn)
//     chipsContainer.appendChild(chipEl)
// }

inputEl.addEventListener('input', createChip)