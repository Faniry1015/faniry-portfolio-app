import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography, Box } from '@mui/material';
import CustomThemeProvider from './ThemeProvider/ThemeProvider';
import Header from './Components/Header';
import MainCarousel from './Components/MainCarousel';
import APropos from './Components/APropos';

function App() {
  const [themeStatus, setThemeStatus] = useState('light')
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
        </Box>

        <div>
          <section id="competences" style={{ height: '600px' }} className='mainSection'>
            <Typography>
              Contenu de la section À propos

            </Typography>

          </section>
          <section id="portfolio" style={{ height: '600px' }} className='mainSection'>
            Contenu de la section Projets
          </section>
          <section id="contact" style={{ height: '600px' }} className='mainSection'>
            Contenu de la section Contact
          </section>
        </div>
      </CustomThemeProvider>
    </>
  )
}

export default App
