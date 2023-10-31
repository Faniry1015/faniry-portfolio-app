import React, {useState} from 'react';
import './App.css'
import {  Typography } from '@mui/material';
import CustomThemeProvider from './ThemeProvider/ThemeProvider';
import Header from './Components/Header';


function App() {
  const [themeStatus, setThemeStatus] = useState('light')
  const handleThemeToggle = (checked) => {
      const theme = checked === true ? 'light' : 'dark'
      setThemeStatus(theme)
  }

  return (
    <>
      <CustomThemeProvider onThemeChange={themeStatus} >
      <Header onThemeChange={handleThemeToggle}/>
        <Typography variant='h2'>Faniriantsoa</Typography>
      </CustomThemeProvider>
    </>
  )
}

export default App
