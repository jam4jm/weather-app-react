import React from "react";

export default function Time(props) {
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = props.time.getDay();
  let hour = props.time.getHours();
  let minute = props.time.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div>
      {weekday[day]}, {hour}:{minute}
    </div>
  );
}
