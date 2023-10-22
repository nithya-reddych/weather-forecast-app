
/*
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString();

    const handleButtonClick = () => {
        fetchData();
        if (onClick) {
            onClick(true);
        }
    };

    return (
        <button className={`myButton ${className}`} onClick={handleButtonClick}>
    {label && !weatherData && <p>{label}</p>}
    {weatherData && <p>{weatherData}</p>}
    {/<p>Date: {formattedDate}</p>
    <p>Time: {formattedTime}</p> }
    </button>
    );
} */


"use client"
import { useState } from 'react';
import { WiCloudy, WiDayCloudy, WiDaySunny, WiNightRain } from "react-icons/wi";
import '../app/globals.css';

function getWeatherIcon(weatherStatus) {
    const status = weatherStatus;
    switch (status) {
        case 'Partly Sunny':
            return <WiDayCloudy size={100} color="orange" />;
        case 'Chance Rain Showers':
            return <WiNightRain size={100} color="gray" />;
        case 'Mostly Clear':
            return <WiCloudy size={100} color="blue" />;
        case 'Mostly Sunny':
            return <WiDaySunny size={100} color="white" />;
        case 'Partly Cloudy':
            return <WiCloudy size={100} color="purple" />;
        default:
            return <WiDayCloudy size={100} color="orange" />;
    }
}
function Button({ label, onClick}) {
const [weatherData, setWeatherData] = useState( null);
const [currentDateTime, setCurrentDateTime] = useState(new Date());

const fetchData = async () => {
    try {
    const response = await fetch('https://api.weather.gov/gridpoints/BOX/69,92/forecast');
    const data = await response.json();
    const currentTemp = data.properties.periods[0].temperature;
    const currentWeather = data.properties.periods[0].shortForecast;
    const windSpeed = data.properties.periods[0].windSpeed;
    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString();
    const isHot = currentTemp >= 70;
    setWeatherData({temperature: currentTemp, weatherStatus: currentWeather, windSpeed: windSpeed, isHot: isHot});
    setCurrentDateTime({formattedDate:formattedDate, formattedTime:formattedTime});
    console.log(data);
    } catch (error) {
    console.error('Error fetching weather data:', error);
    }
};

const handleButtonClick = () => {
    fetchData();
    if (onClick) {
    onClick();
    }
};

return (
    <div className=''>
    {label && !weatherData && (
        <button className={`myButton`} onClick={handleButtonClick}>
        <p>{label}</p>
        </button>
    )}

    {weatherData && (
        <div className={`temperature-box`}>

                <p>Current Weather:</p>
            {getWeatherIcon(weatherData.weatherStatus)}
            <p>Time: {currentDateTime.formattedTime}</p>
            <p>Temperature: {weatherData.temperature}°F</p>
            <p>Weather Status: {weatherData.weatherStatus}</p>
            <p>Wind Speed: {weatherData.windSpeed}</p>
        </div>

    )}

    </div>
);
}
export default Button;
/* {weatherData.isHot ? (
                        <WiDaySunny size={100} color="orange" />
                    ) : (
                        <WiCloudy size={100} color="gray" />
                    )} */