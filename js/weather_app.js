const place = document.querySelector('.place-container')
const currentDay = document.querySelector('.current-day')
const currentTemp = document.querySelector('.primary-temp')
const feelsLikeTemp = document.querySelector('.feels-like-temp')
const weather_details = document.querySelector('.weather-details-container')

// get day
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];


function displayWeather(data){

const weatherInfo = data

// GETTING CURRENT TEMP
let tempK = weatherInfo.main.temp
let tempC = tempK - 273.15;
let currentTempC = tempC.toFixed(0)


// GETTING FEELS LIKE TEMP
let tempKFeelsLike = weatherInfo.main.feels_like
let tempCFeelsLike = tempKFeelsLike - 273.15;
let tempFeelsLike = tempCFeelsLike.toFixed(0)


// DISPLAY DATA


// DAY
currentDay.innerText = day;

//CURRENT TEMP
currentTemp.innerText=`${currentTempC}°C`;


// FEELS LIKE TIME
feelsLikeTemp.innerHTML=`Feels like ${tempFeelsLike}°C`;




}


// DISPLAY LOCATION
function displayLocation(data){
const time_container = document.querySelector('.time')  
const header_time = document.querySelector('.header-time')

const time = convertTime(data.formatted)


const city = data.cityName
const country = data.countryName

place.innerText =`${city}, ${country}`;
time_container.innerHTML=`${time}`;
header_time.innerHTML=`${time}`;
}


function convertTime(raw_time){


    let space = raw_time.indexOf(" ")
    const  military_time = raw_time.slice(space)

    const [hoursStr, minutesStr] = military_time.split(':');
    let hours = parseInt(hoursStr);
    const minutes = parseInt(minutesStr);

    let period = 'AM';

  // Adjust hours for PM and handle midnight/noon
  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  } else if (hours === 0) {
    hours = 12; // 00:xx becomes 12:xx AM
  }

  // Format minutes with leading zero if necessary
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${formattedMinutes} ${period}`;
}


function showError(){
weather_details.innerHTML =`<p class="error-message">Please allow location access to enable full functionality of this app."</p>`;

setTimeout(()=>{
alert("Website will now refresh, Please grant location access")
location.replace(location.href);
},5000)

navigator.geolocation.getCurrentPosition(success, error, options)

}



// WEATHER ICON CONTAINER
const weatherIconContainer = document.querySelector('.weather-icon-container')
const maxTemp = document.querySelector('.max-temp-container')
const minTemp = document.querySelector('.min-temp-container')


const weather_conditions = {
   
    day:{
        "01d": "sunny-day.svg",
        "02d": "cloudy-day-3.svg",
        "03d": "cloudy.svg",
        "04d": "fair-day.svg",
        "09d": "rainy-7.svg",
        "10d": "rainy-3-day.svg",
        "11d": "thunderstorms.svg",
        "13d": "snowy-6.svg",
        "50d": "haze.svg"
    },
      night:{
       "01n": "sunny-night.svg",
        "02n": "cloudy-night-3.svg",
        "03n": "cloudy.svg",
        "04n": "fair-night.svg",
        "09n": "rainy-7.svg",
        "10n": "rainy-3-night.svg",
        "11n": "thunderstorms.svg",
        "13n": "snowy-6.svg",
        "50n": "haze.svg"
    }
}



function displayIcon(data){
// console.log(data.weather[0].icon)
// const updated_weather = "50n";
const updated_weather = data.weather[0].icon;
const weather = weather_conditions.day[updated_weather] || weather_conditions.night[updated_weather]
const humidity = data.main.humidity
const wind = data.wind.gust * 3.6



// GETTING MAX TEMP
let tempKMax = data.main.temp_max
let tempCMax = tempKMax - 273.15;
let tempMax = tempCMax.toFixed(1)

// GETTING MIN TEMP
let tempKMin = data.main.temp_min
let tempCMin = tempKMin - 273.15;
let tempMin = tempCMin.toFixed(1)



weatherIconContainer.innerHTML=`
<img class="weather-icon" src="assets/weather-icons-container/animated/${weather}">
<p class="weather-description">${data.weather[0].description}</p>
 <section class="additional-weather-icon">
                        <span class="humidity-container">
                            <i class="fa-solid fa-droplet"></i>
                            <p class="humidity">${humidity}%</p>
                        </span>
                         <span class="wind-speed-container">
                            <i class="fa-solid fa-wind"></i>
                            <p class="wind-speed">${wind.toFixed(1)} km/h</p>
                        </span>
                          <section class="secondary-temp-container">
                        
                        <span><i class="fa-solid fa-up-long"></i><p class="max-temp-container">${tempMax}°C</p> </span>
                        <span><i class="fa-solid fa-down-long"></i><p class="min-temp-container">${tempMin}°C</p></span>
                        
                        </section>
                      
                    </section>
`;







}