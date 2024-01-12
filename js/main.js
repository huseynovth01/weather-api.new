const api_key_weather = '6868b8fa3b6c58f26253fe0ada1a3035';
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const city = prompt();
const DEFAULT_QUERY = `?q=${city}&APPID=${api_key_weather}&units=metric`;

const container = document.querySelector('.container')
const cityName = document.querySelector('#cityName')
const Temperature = document.querySelector('#temp')
const Humidity = document.querySelector('#humidity')
const Wind_Speed = document.querySelector('#windSpeed')
const Description = document.querySelector('#description')
const weatherIcon = document.querySelector('#weatherIcon')

const fetchapiData = async () => {
  const response = await fetch(`${BASE_URL}${DEFAULT_QUERY}`, {
    method: "GET"
  })
  const data = await response.json()
  displayData(data)
}

fetchapiData()

function displayData(element) {
  Temperature.textContent = element.main.temp
  Humidity.textContent = element.main.humidity
  Wind_Speed.textContent = element.wind.speed
  Description.textContent = element.weather[0].description
  weatherIcon.src= `https://openweathermap.org/img/wn/${element.weather[0].icon}.png`
}





