import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography, Box } from '@mui/material';
import CustomThemeProvider from './ThemeProvider/ThemeProvider';
import Header from './Components/Header';
import MainCarousel from './Components/MainCarousel';
import APropos from './Components/APropos';
import Competences from './Components/Competences';
import Portfolio from './Components/Portfolio';

function App() {
  const [themeStatus, setThemeStatus] = useState('')
  const handleThemeToggle = (themeLabel) => {
    setThemeStatus(themeLabel)
  }

  return (
    <>
      <CustomThemeProvider onThemeChange={themeStatus} >
        <Header onThemeChange={handleThemeToggle} />
        <MainCarousel />
        <Box sx={{ mx: 7, textAlign: 'justify' }}>
          <APropos />
          <Competences />
          <Portfolio />
        </Box>

        <div>
          <section id="contact" style={{ height: '600px' }} className='mainSection'>
            Contenu de la section Contact
          </section>
        </div>
      </CustomThemeProvider>
    </>
  )
}

export default App
