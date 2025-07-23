import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { formatTemperature } from '../utils/temperature';

const ForecastCard = ({ forecast, tempUnit }) => {
  if (!forecast) return null;

  const groupByDay = (data) => {
    const grouped = {};
    data.list.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!grouped[date]) {
        grouped[date] = item;
      }
    });
    return Object.values(grouped).slice(1, 6); // Next 5 days
  };

  const dailyForecast = groupByDay(forecast);

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {dailyForecast.map((day, index) => (
        <Grid item xs={12} sm={6} md={2.4} key={index}>
          <Card sx={{ 
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderRadius: '8px'
          }}>
            <CardContent>
              <Typography variant="subtitle1">
                {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
              </Typography>
              <Typography variant="h6" sx={{ color: '#2b6cb0' }}>
                {formatTemperature(day.main.temp, tempUnit)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {day.weather[0].description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ForecastCard;
