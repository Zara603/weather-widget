import React from "react";
import Widget from "../Components/Widget";
import Editor from "../Components/Editor";
import fetch from "unfetch";

import "./style.css";
class WeatherWidget extends React.Component {
  state = {
    title: "",
    unit: "fahrenheit",
    wind: "windOn",
    lat: "",
    lon: "",
    temp: "",
    windSpeed: ""
  };

  onChange = (field, value) => {
    this.setState({ [field]: value });
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      });
    });
    this.fetchWeather();
  };

  fetchWeather = () => {
    const lat = Math.floor(parseInt(this.state.lat));
    const lon = Math.floor(parseInt(this.state.lon));
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=56821cc8d07d1b16cb6ea39efbc00fc6`
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          temp: response.main.temp,
          windSpeed: response.main.wind.speed
        });
      });
  };

  render() {
    const { title, unit, wind, temp } = this.state;
    console.log(this.state);
    return (
      <div>
        <button className="permissionBtn" onClick={this.getLocation}>
          Allow us to get your current location
        </button>
        <div className="weatherWidget">
          <Editor onChange={this.onChange} />
          <Widget
            title={title}
            unit={unit}
            wind={wind}
            temp={temp}
            unit={unit}
          />
        </div>
      </div>
    );
  }
}

export default WeatherWidget;
