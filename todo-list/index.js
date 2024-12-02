const itemInputEl = document.getElementById('item-input')
const todoList = document.getElementById('todo-list')
const form = document.getElementById('form')

const checkItem = (e) => {
    e.preventDefault()
    const itemName = itemInputEl.value
    console.log(itemName)

    if (itemName && itemName.length > 0) {
        addItem(itemName)
    } else {
        alert("Please add an item")
    }
}

const addItem = (item) => {
    const itemLi = document.createElement('li')
    itemLi.id = item
    const inputEl = document.createElement('input')
    inputEl.type = "text"
    inputEl.value = item
    inputEl.disabled = true

    const pencilEl = document.createElement('i')
    pencilEl.classList.add('fa', 'fa-pencil')

    const deleteEl = document.createElement('i')
    deleteEl.classList.add('material-icons')
    deleteEl.innerHTML = 'delete'

    itemLi.append(inputEl, pencilEl, deleteEl)
    todoList.appendChild(itemLi)
}

const handleListClick = (e) => {
    const target = e.target
    const parentLi = target.parentNode

    if (target.classList.contains('fa-pencil')) {
        const inputEl = parentLi.querySelector('input')

        if (inputEl) {
            target.classList.remove('fa-pencil')
            target.classList.add('fa-save')
            inputEl.disabled = false
            inputEl.classList.add('active')
            inputEl.focus()
        }
    } else if (target.classList.contains('fa-save')) {
        const inputEl = parentLi.querySelector('input')

        if (inputEl) {
            target.classList.remove('fa-save')
            target.classList.add('fa-pencil')
            inputEl.disabled = true
            inputEl.classList.remove('active')
        }
    }

    if (target.classList.contains('material-icons') && target.textContent === 'delete') {
        parentLi.remove()
    }
}


form.addEventListener('submit', checkItem)

todoList.addEventListener('click', handleListClick)
