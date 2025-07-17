# 🌤️ Weather App

A simple weather application that fetches real-time weather data based on the user's current location.

## 🚀 Features

- Current temperature, Time, humidity, and weather conditions
- Automatically detects user location using Geolocation API
- Simple and clean UI

## ⚙️ Setup Instructions

1. **Clone the repository:**


   ```
   git clone https://github.com/MuushyRoom/weather-app.git
   cd weather-app
   ```

2. **🔌 APIs Used**
   
This app uses the following public APIs:

- **[OpenWeatherMap API](https://openweathermap.org/)**  
   Provides current weather data such as temperature, humidity, and conditions.

- **[TimeZoneDB API](https://timezonedb.com/)**  
   Returns timezone and local time information based on your location.

    ```INSIDE "api_keys.js"```
   - const WEATHER_API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
     
   - const TIMEZONE_API_KEY = 'YOUR_TIMEZONEDB_API_KEY';

   3.**Allow location access**

   - When prompted by your browser, allow geolocation access so the app can detect your location and show the weather and time accordingly.

##Live Preview
- https://muushyroom.github.io/weather-app/
