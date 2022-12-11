import React, { useState } from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [city, setCity] = useState("Helsingborg");
  const [canShowTemp, setCanShowTem] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    setCanShowTem(city.length > 0);
  });

  function handleSubmit(event) {
    event.preventDefault();
    setCanShowTem(city.length > 0);
  }
  function handleSearch(event) {
    event.preventDefault();
    if (event.target.value !== "") {
      setCity(event.target.value);
    }
  }

  function showWeather() {
    if (canShowTemp) {
      return <Weather city={city} />;
    }
  }
  return (
    <div className="container">
      <div className="label">
        <em>
          <a
            href="https://www.smhi.se/en/weather/q/Stockholm/2673730"
            target="_blank"
            rel="noreferrer"
            className="headspace"
          >
            Stockholm
          </a>

          <a
            href="https://www.smhi.se/en/weather/q/G%C3%B6teborg/2711537"
            target="_blank"
            rel="noreferrer"
            className="headspace"
          >
            Göteborg
          </a>
          <a
            href="https://www.smhi.se/en/weather/q/Malm%C3%B6/2692969"
            target="_blank"
            rel="noreferrer"
            className="headspace"
          >
            Malmö
          </a>
          <a
            href="https://www.smhi.se/en/weather/q/Lund/2693678"
            target="_blank"
            rel="noreferrer"
            className="headspace"
          >
            Lund
          </a>
        </em>
      </div>
      <form id="inputForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          className="citysearch"
          autocomplete="off"
          autofocus="on"
          id="searchcity"
          onBlur={handleSearch}
        />
        <button type="submit" className="btn btn-info" value="search">
          Search
        </button>
        <button type="button" id="currentbtn" className="btn btn-success">
          Current
        </button>
      </form>
      {showWeather()}
      <small>
        <a
          href="https://github.com/vaishnadpk/my-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Vaishna Upendran
      </small>
    </div>
  );
}

export default App;
