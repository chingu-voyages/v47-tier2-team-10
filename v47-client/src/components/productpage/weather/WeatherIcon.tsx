// WeatherIcon.jsx
import React from "react";

const WeatherIcon = () => {
  const WEATHER_CLOUD_ICON: string =
    "https://openweathermap.org/img/wn/02d@2x.png";

  return (
    <>
      <img src={WEATHER_CLOUD_ICON} alt="Weather Icon" className="w-12 h-12" />
    </>
  );
};

export default WeatherIcon;
