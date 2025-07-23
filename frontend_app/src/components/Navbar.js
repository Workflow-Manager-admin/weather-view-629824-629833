import React from 'react';
import { AppBar, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material';
import { WiDaySunny } from 'react-icons/wi';

const Navbar = ({ tempUnit, onTempUnitChange }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2b6cb0' }}>
      <Toolbar>
        <WiDaySunny size={32} style={{ marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Weather View
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={tempUnit === 'F'}
              onChange={(e) => onTempUnitChange(e.target.checked ? 'F' : 'C')}
            />
          }
          label={`°${tempUnit}`}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
