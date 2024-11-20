const horizontalPosEl = document.getElementById("horizontal")
const verticalPosEl = document.getElementById("vertical")
const toastTypeEl = document.getElementById("type")
const form = document.getElementById("form")
const toastInputEl = document.getElementById("message")
const toastOpEl = document.getElementById("toast")
const toastMessageEl = document.getElementById("toast-message")
const durationEl = document.getElementById('duration')
const durationOpEl = document.getElementById('duration-output')

const setDuration = () => {
    durationOpEl.innerHTML = durationEl.value
}

const typeStyles = {
    Normal: { backgroundColor: "white", color: "black" },
    Success: { backgroundColor: "rgba(0, 204, 0, 0.3)", color: "rgb(0, 204, 0)" },
    Error: { backgroundColor: "rgba(255, 0, 0, 0.3)", color: "rgb(255, 0, 0)" },
    Warning: { backgroundColor: "rgba(255, 148, 77, 0.3)", color: "rgb(255, 148, 77)" },
    Info: { backgroundColor: "rgba(51, 153, 255, 0.3)", color: "rgb(51, 153, 255)" },
}

const showToast = (e) => {
    e.preventDefault()
    const duration = durationEl.value
    const toastType = toastTypeEl.value
    toastMessageEl.innerText = toastInputEl.value || "Default message"
    toastOpEl.style.backgroundColor = typeStyles[toastType].backgroundColor
    toastOpEl.style.color = typeStyles[toastType].color

    toastOpEl.style.top = ""
    toastOpEl.style.bottom = ""
    toastOpEl.style.left = ""
    toastOpEl.style.right = ""

    if (horizontalPosEl.value === "right") {
        toastOpEl.style.right = "10px"
    } else {
        toastOpEl.style.left = "10px"
    }

    if (verticalPosEl.value === "top") {
        toastOpEl.style.top = "10px"
    } else {
        toastOpEl.style.bottom = "10px"
    }

    toastOpEl.classList.add("active")

    setTimeout(() => {
        toastOpEl.classList.remove("active")
    }, duration * 1000)
}


toastOpEl.querySelector(".fa-close").addEventListener("click", () => {
    toastOpEl.classList.remove("active")
})

durationEl.addEventListener('change', setDuration)
form.addEventListener("submit", showToast)
