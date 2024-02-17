// WeatherIcon.jsx
import React from "react";

const WeatherIcon = ({ weatherConditionCode }) => {
  const getIconUrl = (code) => {
    // Use an actual weather icon API or map the condition codes to icon URLs
    // This is a simplified example; replace it with a real implementation
    return `https://openweathermap.org/img/wn/02d@2x.png`;
  };

  return (
    <img
      src={getIconUrl(weatherConditionCode)}
      alt="Weather Icon"
      className="w-6 h-6" // Adjust the size according to your design
    />
  );
};

export default WeatherIcon;
