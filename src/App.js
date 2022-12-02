import React, { useState } from "react";
import "./style.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a317f1ed3617e08a94e2d851ebdb1b83";

  const searchLocation = () => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Durban</p>
            <div className="temp">
              <h1>50°F</h1>
            </div>
            <div className="description">
              <p>Clouds</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className="bold">65°C</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">20%</p>
              <p>Humidity</p>
            </div>
            <div className="wind"></div>
            <p className="bold">12 MPH</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
