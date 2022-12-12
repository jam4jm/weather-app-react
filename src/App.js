import "./App.css";
import CitySearch from "./CitySearch";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="ContainerWeather">
          <CitySearch />
        </div>
      </div>
      <Footer />
    </div>
  );
}
