import React from "react";
import "./WeatherToday.css";
export default function WeatherToday() {
  return (
    <div className="row WeatherToday">
      <div className="col-sm-2 NowWeather">
        <div className="NowTemperature" id="nowTemperature">
          12°C
        </div>
        <div className="NowType" id="nowType">
          Sunny
        </div>
      </div>
      <div className="col-sm-2 TemperatureRange">
        <div className="MaxTemperature" id="maxTemperature">
          12°C
        </div>
        <div className="MinTemperature" id="minTemperature">
          5°C
        </div>
      </div>
      <div className="col-sm-2 WeatherDetailsTitle">
        <div>Humidity</div>
        <div>Wind</div>
        <div>Pressure</div>
      </div>
      <div className="col-sm-3 WeatherDetailsData">
        <div id="humidity">85%</div>
        <div id="wind">1 m/s</div>
        <div id="pressure">1022 hPa</div>
      </div>
      <div className="col-sm-2">
        <img
          className="img-fluid TodayWeatherIcon"
          src="./img/sunny.png"
          alt="weathericon"
        />
      </div>
    </div>
  );
}
