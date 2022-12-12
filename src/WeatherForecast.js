import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import DayForecast from "./DayForecast";
import axios from "axios";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props]);

  function ShowForecast(response) {
    setReady(true);
    setForecast(response.data.daily);
  }
  if (ready) {
    return (
      <div className="WeatherForecast">
        <div>Daily Forecast</div>
        <div className="row DayForecast">
          {forecast.map(function (dayForecast, index) {
            if (index >= 1 && index <= 4) {
              return (
                <div className="col-sm-3 DayForecast" key={index}>
                  <DayForecast data={dayForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "5d9e2b27efed7d8f99a351a14fe276b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(ShowForecast);
    return "Loading...";
  }
}
