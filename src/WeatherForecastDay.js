import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }


    function maxCTemp() {
        let tempMax = Math.round(props.data.temp.max);
        return `${tempMax}°`;
    }

    function minCTemp() {
        let tempMin = Math.round(props.data.temp.min);
        return `${tempMin}°`;
    }


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
            <div>
                <div className="WeatherForecast-day mb-2">{day()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={42} />
                <div className="WeatherForecast-temps mt-2">
                    <span className="WeatherForecast-max-temp">{maxCTemp()}</span>
                    <span className="WeatherForecast-min-temp">{minCTemp()}</span>
                </div>
            </div>
        )
    } else {
        let maxFTemp = ((maxCTemp * 9 / 5) + 32)
        let minFTemp = ((minCTemp * 9 / 5) + 32)

        return (
            <div>
                <div className="WeatherForecast-day mb-2">{day()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={42} />
                <div className="WeatherForecast-temps mt-2">
                    <span className="WeatherForecast-max-temp">{maxFTemp()}</span>
                    <span className="WeatherForecast-min-temp">{minFTemp()}</span>
                </div>
            </div>
        )
    }
}