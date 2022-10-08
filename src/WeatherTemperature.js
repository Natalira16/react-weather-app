import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius")
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div className="main-text">
                <h3 className="card-title show-temp" id="temperature">{Math.round(props.celsius)}</h3>
                <div className="tepm-links units">
                    <a href="/" className="unitC active" id="celsius-btn"><span><strong>°C</strong></span></a>
                    <span className="vertical-bar"> | </span>
                    <a href="/" className="unitF" id="fahrenheit-btn" onClick={showFahrenheit}><span><strong>°F</strong></span></a>
                </div>
            </div>
        )
    } else {
        let fahrenheit = ((props.celsius * 9 / 5) + 32)
        return (
            <div className="main-text">
                <h3 className="card-title show-temp" id="temperature">{Math.round(fahrenheit)}</h3>
                <div className="tepm-links units">
                    <a href="/" className="unitC" id="celsius-btn" onClick={showCelsius}><span><strong>°C</strong></span></a>
                    <span className="vertical-bar"> | </span>
                    <a href="/" className="unitF active" id="fahrenheit-btn"><span><strong>°F</strong></span></a>
                </div>
            </div>
        )
    }
}