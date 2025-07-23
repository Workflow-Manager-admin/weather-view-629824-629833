import React, { useState, useCallback } from 'react';
import { Container, CircularProgress, Alert } from '@mui/material';
import './App.css';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import { fetchWeatherByCity, fetchForecast } from './utils/api';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tempUnit, setTempUnit] = useState('C');

  const handleSearch = useCallback(async (city) => {
    if (!city) return;
    
    setLoading(true);
    setError('');
    
    try {
      const [weather, forecast] = await Promise.all([
        fetchWeatherByCity(city),
        fetchForecast(city)
      ]);
      setWeatherData(weather);
      setForecastData(forecast);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Error fetching weather data:', err);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleTempUnitChange = useCallback((unit) => {
    setTempUnit(unit);
  }, []);

  return (
    <div className="App">
      <Navbar tempUnit={tempUnit} onTempUnitChange={handleTempUnitChange} />
      <Container className="container">
        <SearchBar onSearch={handleSearch} />
        
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        {loading ? (
          <div className="loading">
            <CircularProgress sx={{ color: 'var(--primary-color)' }} />
          </div>
        ) : (
          <>
            {weatherData && (
              <WeatherCard 
                data={weatherData} 
                tempUnit={tempUnit} 
              />
            )}
            {forecastData && (
              <ForecastCard 
                forecast={forecastData} 
                tempUnit={tempUnit} 
              />
            )}
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
