import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready: true,
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            feels_like: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        })
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="header">
                    <p>
                        <a href="https://www.google.com/search?q=weather+berlin" className="city" id="quick-search_berlin">Berlin</a>
                        <a href="https://www.google.com/search?q=weather+paris" className="city" id="quick-search_paris">Paris</a>
                        <a href="https://www.google.com/search?q=weather+new+york" className="city" id="quick-search_newyork">New York</a>
                        <a href="https://www.google.com/search?q=weather+sydney" className="city" id="quick-search_sydney">Sydney</a>
                    </p>
                </div>
                <form className="search-group">
                    <input type="search" autoComplete="off" autoFocus="on" className="form-control" id="form-control" placeholder="Enter a city..." aria-label="Search"></input>
                    <button type="button" className="btn-search" id="btn-search">Search</button>
                    <button type="button" className="btn-current" id="btn-current">Current</button>
                </form>
                <div className="main-content">
                    <div className="card-right">
                        <h1 className="title">{weatherData.city}, {weatherData.country}</h1>
                        <ul>
                            <li><FormattedDate date={weatherData.date} /></li>
                            <li className="text-capitalize">{weatherData.description}</li>
                        </ul>
                    </div>
                    <div className="card-left">
                        <div className="items">
                            <div className="icon-item">
                                <img src={weatherData.iconUrl} className="icon" width="90px" alt={weatherData.description}></img>
                            </div>
                            <div className="text-items">
                                <div className="main-text">
                                    <h3 className="card-title show-temp" id="temperature">{Math.round(weatherData.temperature)}</h3>
                                    <div className="tepm-links units">
                                        <a href="https://www.google.com" className="unitC active" id="celsius-btn"><span><strong>°C</strong></span></a>
                                        <span className="vertical-bar"> | </span>
                                        <a href="https://www.google.com" className="unitF" id="fahrenheit-btn"><span><strong>°F</strong></span></a>
                                    </div>
                                </div>
                                <div className="desc-items">
                                    <ul>
                                        <li className="item">Feels like: <span id="feels_like">{Math.round(weatherData.feels_like)}</span>°C</li>
                                        <li className="item">Humidity: <span id="humidity">{weatherData.humidity}</span>%</li>
                                        <li className="item">Wind: <span id="wind">{Math.round(weatherData.wind)}</span> km/h</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        const apiKey = "c9470fa529ce6770f386cc31e17d6a25";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity},${props.defaultCountry
            }&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return ("Loading...");
    }
}