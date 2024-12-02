const squares = document.querySelectorAll('.square')
const resetBtn = document.querySelector('button')

let currentPlayer = 'X'
let gameActive = true
let board = Array(9).fill("")

const winPatterns = [
    [0, 1, 2], //top row
    [3, 4, 5], //second row
    [6, 7, 8], //third row
    [0, 4, 8], //diagonal l to r
    [2, 4, 6], //diagonal r to l
    [0, 3, 6], //first col
    [1, 4, 7], //second col
    [2, 5, 8], //third col
]

const handleSquareClick = (e) => {
    const clickedBox = e.target
    const clickedBoxIndex = Array.from(squares).indexOf(clickedBox)
    console.log(Array.from(squares));

    if (board[clickedBoxIndex] !== "" || !gameActive) return

    board[clickedBoxIndex] = currentPlayer
    clickedBox.textContent = currentPlayer

    if (checkWinner()) {
        alert(`${currentPlayer} wins!`)
        gameActive = false
        return
    }

    if (board.every(cell => cell !== "")) {
        alert("It's a draw!")
        gameActive = false
        return
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X"

}

const checkWinner = () => {
    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer)
    })
}

const resetGame = () => {
    currentPlayer = 'X'
    gameActive = true
    board = Array(9).fill("")
    squares.forEach(square => square.textContent = "")
}


squares.forEach(square => square.addEventListener('click', handleSquareClick))
resetBtn.addEventListener('click', resetGame)