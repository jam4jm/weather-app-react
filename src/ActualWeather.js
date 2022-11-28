import React from "react";
import "./ActualWeather.css";
import Header from "./Header";
import WeatherToday from "./WeatherToday";
export default function ActualWeather() {
  return (
    <div className="ActualWeather">
      <Header />
      <WeatherToday />
    </div>
  );
}
