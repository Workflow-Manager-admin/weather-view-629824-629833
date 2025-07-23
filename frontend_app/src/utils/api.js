import axios from 'axios';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
