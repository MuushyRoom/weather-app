const place = document.querySelector('.place-container')
const currentDay = document.querySelector('.current-day')
const currentTemp = document.querySelector('.primary-temp')
const feelsLikeTemp = document.querySelector('.feels-like-temp')


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
console.log("🚀 ~ displayLocation ~ time:", time)

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
