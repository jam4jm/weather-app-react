import React from "react";
import "./DayForecast.css";
import Day from "./Day";

export default function DayForecast(props) {
  let icon = `./img/${props.data.weather[0].icon}.png`;
  let day = new Date(props.data.dt * 1000);
  return (
    <div>
      <div className="Date">
        <Day day={day} />
      </div>
      <div className="MaxDayTemperature">
        {Math.round(props.data.temp.max)}°C
      </div>
      <div className="MinDayTemperature">
        {Math.round(props.data.temp.min)}°C
      </div>
      <img className="ForecastWeatherIcon" src={icon} alt="weathericon" />
    </div>
  );
}
