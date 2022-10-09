import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import { ThreeDots } from "react-loader-spinner";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        )
    } else {
        let apiKey = "cd4b2f49c94d858889bcba1e27be6e2d";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
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