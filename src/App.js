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
              <h1>50F</h1>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
