
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
let tempMax = tempCMax.toFixed(0)

// GETTING MIN TEMP
let tempKMin = data.main.temp_min
let tempCMin = tempKMin - 273.15;
let tempMin = tempCMin.toFixed(0)



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
                            <p class="wind-speed">${wind} km/h</p>
                        </span>
                          <section class="secondary-temp-container">
                        
                        <span><i class="fa-solid fa-up-long"></i><p class="max-temp-container">${tempMax}°C</p> </span>
                        <span><i class="fa-solid fa-down-long"></i><p class="min-temp-container">${tempMin}°C</p></span>
                        
                        </section>
                      
                    </section>
`;







}