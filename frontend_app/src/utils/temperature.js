export const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
};

export const formatTemperature = (celsius, unit = 'C') => {
  const temp = unit === 'C' ? celsius : celsiusToFahrenheit(celsius);
  return `${Math.round(temp)}°${unit}`;
};
