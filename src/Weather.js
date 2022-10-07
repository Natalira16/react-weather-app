import React from "react";
import "./Weather.css";

export default function Weather() {
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
                    <h1 className="title">Kyiv, UA</h1>
                    <ul>
                        <li>Wednesday 10:00</li>
                        <li>Cloudy</li>
                    </ul>
                </div>
                <div className="card-left">
                    <div className="items">
                        <div className="icon-item">
                            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" className="icon" width="90px" alt="Cloudy"></img>
                        </div>
                        <div className="text-items">
                            <div className="main-text">
                                <h3 className="card-title show-temp" id="temperature">13</h3>
                                <div className="tepm-links units">
                                    <a href="https://www.google.com" className="unitC active" id="celsius-btn"><span><strong>°C</strong></span></a>
                                    <span className="vertical-bar"> | </span>
                                    <a href="https://www.google.com" className="unitF" id="fahrenheit-btn"><span><strong>°F</strong></span></a>
                                </div>
                            </div>
                            <div className="desc-items">
                                <ul>
                                    <li className="item">Precipitation: <span id="precipitation">66</span>%</li>
                                    <li className="item">Humidity: <span id="precipitation">92</span>%</li>
                                    <li className="item">Wind: <span id="precipitation">10</span> km/h</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}