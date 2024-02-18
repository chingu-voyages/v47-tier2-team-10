import React, { useState, useEffect } from 'react';

const API_KEY = "4e6d7e9f6bf1a06f7de8a1a056f81b2d";

function Weather() {
  const [weather, setWeather] = useState({
    description: '',
    temp: '', 
    icon: ''
  });
  const [city, setCity] = useState('');

  function OnGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.name);
        // setWeather(`${data.weather[0].main}/${data.main.temp}`);
        setWeather({
          description: data.weather[0].main,
          temp: Math.trunc(data.main.temp - 273.15),
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` 
        })
      });
  }

  function onGeoError() {
    alert("Can't find you. Error!");
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(OnGeoOK, onGeoError);
  }, []); 


  return (
    <div className='flex items-center text-md'>
      <div className='flex flex-col  '>
        <span className='font-semibold text-base text-center'>{weather.temp}&deg;</span>
        <span className='text-xs'>{city}</span>
      </div>
    </div>
  );
}

export default Weather;
