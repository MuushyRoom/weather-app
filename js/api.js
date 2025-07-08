// GEOLOCATION API
const options = {
    maximumAge:0,
    enableHighAccuracy: false,
    timeout:1500,
};

//GET COORDS IF SUCCESS
const success = (pos) => {
const coords = pos.coords
const lon = coords.longitude;
const lat = coords.latitude;

//
getWeather(lat,lon)

}

const error = (err) => {
console.log(err)
};

//GET USER PERMISSION FOR LOCATION
navigator.geolocation.getCurrentPosition(success, error, options)
    console.log()


// CREATE AN ASYNC FUNCTION FOR GETTING DATA
async function getWeather(lat,lon){

    try{
    const api_key = "37e5574b2579cb49aa9987e7ece20b6f";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`

         const response = await fetch(url)
         const data = await response.json()
         console.log("🚀 ~ getWeather ~ data:", data)
      
        displayWeather(data)
        displayIcon(data)
       
    }catch(error){
        console.log(error)
    }finally{
        console.log("get weather executed")
    }
  
   
}


