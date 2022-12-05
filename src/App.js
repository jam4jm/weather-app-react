import "./App.css";
import CitySearch from "./CitySearch";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="ContainerWeather">
          <CitySearch />
          <WeatherForecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
