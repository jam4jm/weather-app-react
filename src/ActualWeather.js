import React from "react";
import "./ActualWeather.css";
import Time from "./Time";

export default function ActualWeather(props) {
  let icon = `./img/${props.data.icon}.png`;
  return (
    <div className="ActualWeather">
      <div className="row Header">
        <div className="col-6 City" id="city">
          {props.data.city}
        </div>
        <div className="col-6 Time" id="time">
          <Time time={props.data.date} />
        </div>
      </div>
      <div className="row WeatherToday">
        <div className="col-sm-2 NowWeather">
          <div className="NowTemperature" id="nowTemperature">
            {Math.round(props.data.temperature)}°C
          </div>
          <div className="NowType text-capitalize" id="nowType">
            {props.data.description}
          </div>
        </div>
        <div className="col-sm-2 TemperatureRange">
          <div className="MaxTemperature" id="maxTemperature"></div>
          <div className="MinTemperature" id="minTemperature"></div>
        </div>
        <div className="col-sm-2 WeatherDetailsTitle">
          <div>Humidity</div>
          <div>Wind</div>
          <div>Pressure</div>
        </div>
        <div className="col-sm-3 WeatherDetailsData">
          <div id="humidity">{props.data.humidity} %</div>
          <div id="wind">{Math.round(props.data.wind)} m/s</div>
          <div id="pressure">{props.data.pressure} hPa</div>
        </div>
        <div className="col-sm-2">
          <img
            className="img-fluid TodayWeatherIcon"
            src={icon}
            alt="weathericon"
          />
        </div>
      </div>
    </div>
  );
}
