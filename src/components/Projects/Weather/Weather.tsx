import React, { useState, ChangeEvent, useCallback } from "react";
import { API_KEY } from "./config";
import { WeatherData } from "./interfaces";
import styles from "../../../scss/Weather.module.scss";
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [submittedCity, setSubmittedCity] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(`Error fetching weather data: ${error}`);
    } finally {
      setLoading(false);
    }
  }, [city]);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (city) {
      await fetchData();
      setSubmittedCity(city);
    }
  };

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className={styles.weather}>
      <h1>Pogoda</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Sprawdź pogodę dla: </label>
        <input type="text" value={city} onChange={handleInputChange} />
        <button type="submit" disabled={loading}>
          Sprawdź
        </button>
      </form>

      {loading && <p>Ładowanie...</p>}
      {weatherData && !loading && submittedCity && (
        <div className={`${styles.weather__div}`}>
          <p>
            Temperatura w {submittedCity}: <b>{weatherData?.main.temp} °C</b>
          </p>
          <p>
            Współrzędne geograficzne: <b>{weatherData?.coord.lon}</b>,{" "}
            <b>{weatherData?.coord.lat}</b>
          </p>
          <p>
            Odczuwalna temperatura: <b>{weatherData?.main.feels_like}°C</b> 
          </p>
          <p>
            Minimalna temperatura: <b>{weatherData?.main.temp_min} °C</b>
          </p>
          <p>
            Maksymalna temperatura: <b>{weatherData?.main.temp_max} °C</b>
          </p>
          <p>
            Wilgotność: <b>{weatherData.main.humidity}%</b>
          </p>
          <p>
            Ciśnienie: <b>{weatherData.main.pressure} hPa </b>
          </p>
          <p>
            Prędkość wiatru: <b>{weatherData.wind.speed} m/s </b>
          </p>
          <p>
            Kraj: <b>{weatherData.sys.country}</b>
          </p>
          <p>
            Wschód słońca: <b>{formatTime(weatherData.sys.sunrise)}</b>
          </p>
          <p>
            Zachód słońca: <b>{formatTime(weatherData.sys.sunset)}</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;