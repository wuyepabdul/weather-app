import React, { useState } from "react";
import axios from "axios";
import { weatherConditions } from "./weatherConditions";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const apiKey = {
    key: process.env.REACT_APP_API_KEY,
    baseUrl: process.env.REACT_APP_API_BASEURL,
  };
  const search = (evt) => {
    if (evt.key === "Enter") {
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `${apiKey.baseUrl}weather?q=${query}&units=metric&APPID=${apiKey.key}`
      )
      .then((response) => {
        setWeatherData(response.data);
        console.log(response);
        setQuery("");
      })
      .catch((err) => console.log(err));
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weatherData.main != "undefined"
          ? weatherData.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <form onSubmit={handleSubmit}>
            <div className="form-row ">
              <div className="form-group col-md-2"></div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="city"
                  placeholder="Please enter City or Country.."
                  className="form-control text-center"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={search}
                />
              </div>

              <div className="form-group col-md-2 ">
                <button
                  type="submit"
                  className="btn btn-warning form-control mt-1 "
                >
                  Get Weather
                </button>
              </div>
            </div>
          </form>
        </div>
        {typeof weatherData.main !== "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weatherData.name}, {weatherData.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              {weatherConditions(weatherData.weather[0].id)}
              <div className="current-temp">
                <h3>
                  <span className="px-4">
                    {Math.round(weatherData.main.temp)}&deg;
                  </span>
                </h3>
              </div>
              <div>
                {/* <h3>
                  <span className="min-temp">
                    {Math.round(weatherData.main.temp_min)}&deg;
                  </span>
                  <span className="max-temp">
                    {Math.round(weatherData.main.temp_max)}&deg;
                  </span>
                </h3> */}
              </div>
              <div className="weather">{weatherData.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default Weather;
