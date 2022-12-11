import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);

  useEffect(() => {
    let key = "453efefad2a2c05ta857fb9cb92548o9";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${key}&units=metric`;
    axios
      .get(url)
      .then(showWeather)
      .catch(() => {
        console.log("Error");
      });
  });

  function showWeather(response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setIcon(response.data.condition.icon_url);
  }

  return (
    <div className="Weather">
      <h1 id="cityName">{props.city}</h1>
      <h3>
        <span id="dayAndTime">Friday 13:57</span>
      </h3>
      <h4 id="description">{description}</h4>

      <div className="grid">
        <div className="row">
          <div className="col-6">
            <h1>
              <img src={icon} alt="weather icon" />
              <span id="temperature">{Math.round(temperature)}</span>{" "}
              <sup id="celsius" className="degrees">
                °C|
              </sup>
              <sup id="fahrenheit" className="degrees">
                °F
              </sup>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
