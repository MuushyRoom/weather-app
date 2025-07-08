
// WEATHER ICON CONTAINER
const weatherIconContainer = document.querySelector('.weather-icon-container')



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
console.log(data.weather[0].icon)
// const updated_weather = "50n";
const updated_weather = data.weather[0].icon;
const weather = weather_conditions.day[updated_weather] || weather_conditions.night[updated_weather]
weatherIconContainer.innerHTML=`<img class="weather-icon" src="assets/weather-icons-container/animated/${weather}">`;





}