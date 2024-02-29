import { WEATHER_CLOUD_ICON } from "../../../utils/constants";

const WeatherIcon = () => {
  return (
    <>
      <img src={WEATHER_CLOUD_ICON} alt="Weather Icon" className="w-8 h-8" />
    </>
  );
};

export default WeatherIcon;
