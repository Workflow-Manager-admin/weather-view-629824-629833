import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';
import { formatTemperature } from '../utils/temperature';

const WeatherCard = ({ data, tempUnit }) => {
  if (!data) return null;

  return (
    <Card sx={{ 
      minWidth: 275, 
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: '10px'
    }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="h2" component="div" sx={{ color: '#2b6cb0' }}>
          {formatTemperature(data.main.temp, tempUnit)}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {data.weather[0].description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <WiHumidity size={24} />
            <Typography sx={{ ml: 1 }}>
              {data.main.humidity}%
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <WiStrongWind size={24} />
            <Typography sx={{ ml: 1 }}>
              {data.wind.speed} m/s
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
