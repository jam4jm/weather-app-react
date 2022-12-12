import React from "react";

export default function Day(props) {
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = props.day.getDay();
  let dayDate = props.day.getDate();
  if (dayDate < 10) {
    dayDate = `0${dayDate}`;
  }

  return (
    <div>
      {weekday[day]} {dayDate}
    </div>
  );
}
