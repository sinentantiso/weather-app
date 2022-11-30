import React, {useState} from "react";
import "./style.css";
import axios from "axios"

export default function App() {

  const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a317f1ed3617e08a94e2d851ebdb1b83"
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
