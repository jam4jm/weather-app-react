import React, { useState } from "react";
import "./CitySearch.css";
import ActualWeather from "./ActualWeather";
import axios from "axios";

export default function CitySearch() {
  let [city, setCity] = useState("Kyiv");
  let [weather, setWeather] = useState({ ready: false });

  function ShowWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiKey = "5d9e2b27efed7d8f99a351a14fe276b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(ShowWeather);
  }

  function Submit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div>
        <div className="CitySearch" id="CityForm">
          <form onSubmit={Submit}>
            <input
              type="text"
              name="city"
              id="CitySearch"
              placeholder="Search your City"
              onChange={updateCity}
            />
          </form>
        </div>
        <ActualWeather data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
