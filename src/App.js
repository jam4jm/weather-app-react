import CitySearch from "./CitySearch";
import "./App.css";
import ActualWeather from "./ActualWeather";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="ContainerWeather">
          <CitySearch />
          <ActualWeather />
          <WeatherForecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
