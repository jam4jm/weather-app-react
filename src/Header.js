import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="row Header">
      <div className="col-6 City" id="city">
        Kyiv
      </div>
      <div className="col-6 Time" id="time">
        Sunday, 13:34
      </div>
    </div>
  );
}
