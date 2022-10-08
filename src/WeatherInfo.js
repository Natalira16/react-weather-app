import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="main-content">
                <div className="card-right">
                    <h1 className="title">{props.data.city}, {props.data.country}</h1>
                    <ul>
                        <li><FormattedDate date={props.data.date} /></li>
                        <li className="text-capitalize">{props.data.description}</li>
                    </ul>
                </div>
                <div className="card-left">
                    <div className="items">

                        <div className="icon-item">
                            <WeatherIcon code={props.data.icon} />
                        </div>
                        <div className="text-items">
                            <div>
                                <WeatherTemperature celsius={props.data.temperature} />
                            </div>
                            <div className="desc-items">
                                <ul>
                                    <li className="item">Feels like: <span id="feels_like">{Math.round(props.data.feels_like)}</span>°C</li>
                                    <li className="item">Humidity: <span id="humidity">{props.data.humidity}</span>%</li>
                                    <li className="item">Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}