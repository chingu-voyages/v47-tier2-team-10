import React, { useState, useEffect } from 'react';

const API_KEY = "4e6d7e9f6bf1a06f7de8a1a056f81b2d";                                  
function Weather() {
  const [weather, setWeather] = useState('');
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
    <div className='flex justify-centre items-center bg-gray-200 dark:bg-slate-800 p-2 rounded-md h-[2rem] gap-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-green-600'>    
      <div>
        <div className='flex justify-centre items-end'>
          {city && <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="14" height="14" viewBox="0 0 24 24" stroke-width="2.5" stroke="#5eead4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>}
          <p className='text-xs'>{city}</p>
        </div>
      </div>
      <div className='py-1'>
        {weather && <p className='font-bold text-lg -mb-2'>{weather.temp}&deg;</p>}
        <p className='text-xs -mt-2'>{weather.description}</p>
      </div>
    </div>
  );
}

export default Weather;
