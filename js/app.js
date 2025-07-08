const place = document.querySelector('.place-container')
const currentDay = document.querySelector('.current-day')
const currentTemp = document.querySelector('.primary-temp')
const feelsLikeTemp = document.querySelector('.feels-like-temp')
const maxTemp = document.querySelector('.max-temp-container')
const minTemp = document.querySelector('.min-temp-container')




// WEATHER ICON CONTAINER
const weatherIconContainer = document.querySelector('.weather-icon-container')
console.log("🚀 ~ weatherIconContainer:", weatherIconContainer)

// console.log("🚀 ~ minTemp:", minTemp)
// // console.log("🚀 ~ currentTemp:", currentTemp)
// // console.log("🚀 ~ currentDay:", currentDay)
// // console.log("🚀 ~ place:", place)

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
async function displayWeather(data){
const weatherInfo = await data

const city = weatherInfo.name
const country = weatherInfo.sys.country


// GETTING CURRENT TEMP
let tempK = weatherInfo.main.temp
let tempC = tempK - 273.15;
let currentTempC = tempC.toFixed(0)


// GETTING MAX TEMP
let tempKMax = weatherInfo.main.temp_max
let tempCMax = tempKMax - 273.15;
let tempMax = tempCMax.toFixed(0)

// GETTING MIN TEMP
let tempKMin = weatherInfo.main.temp_min
let tempCMin = tempKMin - 273.15;
let tempMin = tempCMin.toFixed(0)


// GETTING FEELS LIKE TEMP
let tempKFeelsLike = weatherInfo.main.feels_like
let tempCFeelsLike = tempKFeelsLike - 273.15;
let tempFeelsLike = tempCFeelsLike.toFixed(0)

maxTemp.innerHTML=`MAX.${tempMax}°C`;
minTemp.innerHTML=`MIN.${tempMin}°C`;
feelsLikeTemp.innerHTML=`Feels like ${tempFeelsLike}°C`;
currentDay.innerText = day;
place.innerText =`${city}, ${country}`;
currentTemp.innerText=`${currentTempC}°C`;

}


function displayIcon(data){
// const weather_conditions = new Map([
//   ["clearDay", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

weatherIconContainer.innerHTML=`<img class="weather-icon" src="assets/weather-icons-container/animated/partly-cloudy-day.svg">`;





}