import React from 'react'
import './Weather.css'   

function Weather() {

    let weather = {
        apiKey: "8b478ad7f6928c16526afbf709afae1e",
        fetchWeather: function (city) {
          fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => {
              if (!response.ok) {
                throw new Error("No weather found.");
              }
              return response.json();
            })
            .then((data) => this.displayWeather(data));
        },
        displayWeather: function (data) {
          const { name } = data;
          const { description } = data.weather[0];
          const { temp, humidity } = data.main;
          const { speed } = data.wind;
          document.querySelector(".city").innerText = "Weather in " + name;
          document.querySelector(".desc").innerText = "Feels like " + description;
          document.querySelector(".temp").innerText = temp + "°C";
          document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
          document.querySelector(".windSpeed").innerText =
            "Wind speed: " + speed + " km/h";
          document.querySelector(".weather").classList.remove("loading")
        },
        search: function () {
          this.fetchWeather(document.querySelector(".weathersearchBar").value);

        },
      };
      
      
    const searchBar = document.querySelector(".weathersearchBar");
    if (searchBar) { 
      searchBar.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            weather.search();
        }
      });
    }



  return (
    <div className='weatherBody'>
        <div className="weatherCard">
            <input className='weathersearchBar' placeholder='Enter the Location. . .'/>
            <div className='weatherData'>
                <div className='city'></div>
                <div className='temp'></div>
                <div className='desc'></div>
                <div className='humidity'></div>
                <div className='windSpeed'></div>
            </div>
        </div>
    </div>
  )
}

export default Weather;