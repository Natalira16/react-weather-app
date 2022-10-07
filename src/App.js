import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App content">
      <div className="container">
        <Weather />
      </div>
      <footer className="footer">
        This project was coded by <a href="https://funny-mooncake-671b77.netlify.app/" target="_blank" rel="noreferrer" className="footer-link">Nataliia Medvedenko</a> and is <a href="https://github.com/Natalira16/react-weather-app" target="_blank" rel="noreferrer" className="footer-link">open-sourced on GitHub</a>.
      </footer>
    </div>
  );
}
