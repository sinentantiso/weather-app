import React, {useState} from "react";
import "./style.css";
import axios from "axios"

export default function App() {

  const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a317f1ed3617e08a94e2d851ebdb1b83"
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
              <p>Cloudy</p>
            </div>
            <div className="humidity">
              <p>20%</p>
            </div>
            <div className="wind"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
