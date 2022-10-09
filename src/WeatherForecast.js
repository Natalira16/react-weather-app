import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day mb-2">Sat</div>
                    <WeatherIcon code="01d" size={42} />
                    <div className="WeatherForecast-temps mt-2">
                        <span className="WeatherForecast-max-temp">19°</span>
                        <span className="WeatherForecast-min-temp">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}