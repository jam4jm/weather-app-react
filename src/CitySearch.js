import React from "react";
import "./CitySearch.css";
export default function CitySearch() {
  return (
    <div className="CitySearch" id="CityForm">
      <form>
        <input
          type="text"
          name="city"
          id="CitySearch"
          placeholder="Search your City"
        />
      </form>
    </div>
  );
}
