// GET API KEYS
import {
WEATHER_API_KEY,
TIMEZONE_API_KEY,
} from '../api_keys.js';





// GEOLOCATION API
// HEADERS
const options = {
    maximumAge:0,
    enableHighAccuracy: true,
    timeout:3500,
};

//GET COORDS IF SUCCESS
const success = (pos) => {
const coords = pos.coords
const lon = coords.longitude;
const lat = coords.latitude;

// console.log("🚀 ~ success ~ lat:", lat)
// console.log("🚀 ~ success ~ lon:", lon)
// RUN FETCH API IF SUCCESS
getWeather(lat,lon)
getTime(lat,lon)
}


// error
const error = (err) => {
console.log("GEOLOCATION API ",err)
showError()
};

//GET USER PERMISSION FOR LOCATION

navigator.geolocation.getCurrentPosition(success, error, options)




// ------------------------------
// CREATE AN ASYNC FUNCTION FOR GETTING DATA
async function getWeather(lat,lon){

    try{
    const api_key = WEATHER_API_KEY;
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
          console.log("w-finally")
            console.log("#")
         console.log("#")
          console.log("#")
    }
  
   
}


// timezone api
async function getTime(lat,lon){

   try{
   const time_api_key = TIMEZONE_API_KEY;
    const timezone_query = `http://api.timezonedb.com/v2.1/get-time-zone?key=${time_api_key}&format=json&by=position&lat=${lat}&lng=${lon}`
         
        const response = await fetch(timezone_query)


        //  TO JSON
         const data = await response.json()
         console.log("TIMEZONE JSON DATA", data)
      
            displayLocation(data)
       
    }catch(error){
        console.log("TIMEZONE API ERROR",error)
    }finally{
          console.log("t-finally")
            console.log("#")
         console.log("#")
          console.log("#")
    }


   
}

async function getQuotes(){


    let break_loop = true

       try{
     
        while(break_loop){
              const quote_id = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    const get_quote = `https://thequoteshub.com/api/quotes/${quote_id}`
    const response = await fetch(get_quote)


        //  TO JSON
         const data = await response.json()
       
       
            if(data.text.length <= 45){
                 console.log("QUOTE JSON DATA", data)
                displayQuotes(data)
                break_loop = true
                break;
            }else{

            }
       
        }
  

        
    }catch(error){
        console.log("QUOTE ERROR",error)
    }finally{
        console.log("q-finally")
        console.log("#")
         console.log("#")
          console.log("#")
    }

}


getQuotes();