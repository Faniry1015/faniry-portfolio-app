import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography } from '@mui/material';
import CustomThemeProvider from './ThemeProvider/ThemeProvider';
import Header from './Components/Header';
import APropos from './Components/APropos';

function App() {
  const [themeStatus, setThemeStatus] = useState('light')
  const handleThemeToggle = (themeLabel) => {
    const theme = themeLabel
    setThemeStatus(theme)
  }

  return (
    <>
      <CustomThemeProvider onThemeChange={themeStatus} >
        <Header onThemeChange={handleThemeToggle} />
        <APropos />
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
