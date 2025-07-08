// GEOLOCATION API
// HEADERS
const options = {
    maximumAge:0,
    enableHighAccuracy: false,
    timeout:3500,
};

//GET COORDS IF SUCCESS
const success = (pos) => {
const coords = pos.coords
const lon = coords.longitude;
const lat = coords.latitude;

// RUN FETCH API IF SUCCESS
getWeather(lat,lon)
getTime(lat,lon)
}


// error
const error = (err) => {
console.log("GEOLOCATION API ",err)
};

//GET USER PERMISSION FOR LOCATION
navigator.geolocation.getCurrentPosition(success, error, options)


// ------------------------------
// CREATE AN ASYNC FUNCTION FOR GETTING DATA
async function getWeather(lat,lon){

    try{
    const api_key = "37e5574b2579cb49aa9987e7ece20b6f";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`

         const response = await fetch(url)

        //  TO JSON
         const data = await response.json()
         console.log("WEATHER JSON DATA", data)
      
        displayWeather(data)
        displayIcon(data)
        
       
    }catch(error){
        console.log(error)
    }finally{
        console.log("FETCH WEATHER API EXECUTED")
    }
  
   
}


// timezone api
async function getTime(lat,lon){

   try{
   const time_api_key = "OP8SN3JOUQX2";
const timezone_query = `http://api.timezonedb.com/v2.1/get-time-zone?key=${time_api_key}&format=json&by=position&lat=${lat}&lng=${lon}`
         
        const response = await fetch(timezone_query)


        //  TO JSON
         const data = await response.json()
         console.log("TIMEZONE JSON DATA", data)
      
            displayLocation(data)
       
    }catch(error){
        console.log(error)
    }finally{
        console.log("TIMEZONE API EXECUTED")
    }


   
}