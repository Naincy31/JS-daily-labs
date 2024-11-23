const descriptionEl = document.getElementById('description')
const form = document.getElementById('form')
const amountEl = document.getElementById('amount')
const transactionTypeEl = document.getElementById('transaction-type')
const transactionsListEl = document.getElementById('transactions-list')
const balanceEl = document.getElementById('balance')

let balance = 0

const addTransaction = (e) => {
    e.preventDefault()
    const description = descriptionEl.value
    const amount = amountEl.value
    const transactionType = transactionTypeEl.value
    createTransaction(description, amount, transactionType)
}

const createTransaction = (desc, amt, tt) => {
    const transactionDiv = document.createElement('div')
    transactionDiv.classList.add(tt)

    const descriptionP = document.createElement('p')
    descriptionP.textContent = desc

    const amountP = document.createElement('p')
    amountP.textContent = `₹${parseFloat(amt).toFixed(2)}`

    transactionDiv.appendChild(descriptionP)
    transactionDiv.appendChild(amountP)

    if (tt === "income") {
        balance += parseFloat(amt)
    } else {
        balance -= parseFloat(amt)
    }

    balanceEl.textContent = `₹${balance.toFixed(2)}`
    transactionsListEl.appendChild(transactionDiv)
}

form.addEventListener('submit', addTransaction)