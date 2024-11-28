const search = document.getElementById('search')
const input = document.querySelector('input')
const searchBtn = document.querySelector('button')

const weatherIcon = new Map([
    ['smoke', './images/smoke.png'],
    ['clear', './images/clear.png'],
    ['clouds', './images/clouds.png'],
    ['humidity', './images/humidity.png'],
    ['mist', './images/mist.png'],
    ['snow', './images/snow.png'],
    ['wind', './images/wind.png'],
    ['rain', './images/rain.png'],
    ['drizzle', './images/drizzle.png']
])


const apiKey = '46d47581a51a79782741111953e700af';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    console.log(response.status);

    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        const data = await response.json()
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'
        document.querySelector('.weather img').src = weatherIcon.get(data.weather[0]?.main?.toLowerCase())
        document.querySelector('.temp').innerHTML = Math.round(data.main?.temp) + ' °C'
        document.querySelector('.city').textContent = data.name
        document.querySelector('.humidity').innerHTML = data.main?.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind?.speed + 'km/h'
    }

}

searchBtn.addEventListener('click', () => checkWeather(input.value))

search.addEventListener('submit', (e) => {
    e.preventDefault()
    checkWeather(input.value)
})