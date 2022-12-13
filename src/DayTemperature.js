import React, { useState, useEffect } from "react";
import "./DayTemperature.css";
import axios from "axios";

export default function DayTemperature(props) {
  let [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props]);

  function ShowDayTemperature(response) {
    setReady(true);
    setTemperature(response.data.daily[0].temp);
  }
  if (ready) {
    return (
      <div>
        <div className="MaxTemperature" id="maxTemperature">
          {Math.round(temperature.max)}°C
        </div>
        <div className="MinTemperature" id="minTemperature">
          {Math.round(temperature.min)}°C
        </div>
      </div>
    );
  } else {
    let apiKey = "5d9e2b27efed7d8f99a351a14fe276b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(ShowDayTemperature);
    return "Loading...";
  }
}
