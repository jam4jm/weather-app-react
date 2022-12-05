import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div>Daily Forecast</div>
      <div className="row DayForecast">
        <div className="col-sm-3 DayForecast">
          <div className="Date">Sun 03</div>
          <div className="MaxDayTemperature">35°C</div>
          <div className="MinDayTemperature">25°C</div>
          <img
            className="ForecastWeatherIcon"
            src="img/02d.png"
            alt="weathericon"
          />
        </div>
        <div className="col-sm-3 DayForecast">
          <div className="Date">Mon 04</div>
          <div className="MaxDayTemperature">30°C</div>
          <div className="MinDayTemperature">17°C</div>
          <img
            className="ForecastWeatherIcon"
            src="img/03d.png"
            alt="weathericon"
          />
        </div>
        <div className="col-sm-3 DayForecast">
          <div className="Date">Tue 05</div>
          <div className="MaxDayTemperature">32°C</div>
          <div className="MinDayTemperature">21°C</div>
          <img
            className="ForecastWeatherIcon"
            src="img/09d.png"
            alt="weathericon"
          />
        </div>
        <div className="col-sm-3 DayForecast">
          <div className="Date">Wed 06</div>
          <div className="MaxDayTemperature">28°C</div>
          <div className="MinDayTemperature">19°C</div>
          <img
            className="ForecastWeatherIcon"
            src="img/01d.png"
            alt="weathericon"
          />
        </div>
      </div>
    </div>
  );
}
