import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App content">
      <div className="container">
        <div className="header">
          <p>
            <a href="https://www.google.com/search?q=weather+berlin" className="city" id="quick-search_berlin">Berlin</a>
            <a href="https://www.google.com/search?q=weather+paris" className="city" id="quick-search_paris">Paris</a>
            <a href="https://www.google.com/search?q=weather+new+york" className="city" id="quick-search_newyork">New York</a>
            <a href="https://www.google.com/search?q=weather+sydney" className="city" id="quick-search_sydney">Sydney</a>
          </p>
        </div>
        <Weather defaultCity="Kyiv" />
      </div>
      <footer className="footer">
        This project was coded by <a href="https://funny-mooncake-671b77.netlify.app/" target="_blank" rel="noreferrer" className="footer-link">Nataliia Medvedenko</a> and is <a href="https://github.com/Natalira16/react-weather-app" target="_blank" rel="noreferrer" className="footer-link">open-sourced on GitHub</a>.
      </footer>
    </div>
  );
}
