import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{m: '50px 0 0 0'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography variant="body2" color="inherit">
          © 2023 - Faniriantsoa RANDRIAHARIMINO
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
