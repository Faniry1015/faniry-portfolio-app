import React, {useState} from 'react';
import './App.css'
import {  Switch, Typography } from '@mui/material';

import CustomThemeProvider from './ThemeProvider/ThemeProvider';


function App() {

  const [themeStatus, setThemeStatus] = useState('light')
  const handleThemeToggle = () => {
    const theme = themeStatus === 'light' ? 'dark' : 'light'
    setThemeStatus(theme)
  }

  return (
    <>
      <CustomThemeProvider onThemeChange={themeStatus} >
        <Switch
          checked={themeStatus === 'light' ? true : false}
          onChange={handleThemeToggle}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Typography variant='h2'>Faniriantsoa</Typography>
      </CustomThemeProvider>
    </>
  )
}

export default App
