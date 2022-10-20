import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {

        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            feels_like: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        })
    }

    function search() {
        let apiKey = "cd4b2f49c94d858889bcba1e27be6e2d";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // search for a city
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function searchLocation(position) {
        let apiKey = "cd4b2f49c94d858889bcba1e27be6e2d";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }

    function getCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchLocation);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form className="search-group" onSubmit={handleSubmit}>
                    <input type="search" autoComplete="off" autoFocus="on" className="form-control" id="form-control" placeholder="Enter a city..." aria-label="Search" onChange={handleCityChange}></input>
                    <button type="button" className="btn-search" id="btn-search" onClick={handleSubmit}>Search</button>
                    <button type="button" className="btn-current" id="btn-current" onClick={getCurrentLocation}>Current</button>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        )
    } else {
        search();

        return (
            <div className="ThreeDots">
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#3ab3c1"
                />
            </div>
        );
    }
}

