import React from 'react';
import CityCarousel from './CityCarousel';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h1>🌆 React City Carousel</h1>
      <div className="carousel-wrapper">
        <CityCarousel />
      </div>
    </div>
  );
}

export default App;
