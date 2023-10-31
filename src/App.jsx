import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Typography } from '@mui/material';
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
        <Header onThemeChange={handleThemeToggle} />
        <Typography variant='h2'>Faniriantsoa</Typography>
        <div>
          <section id="propos"  style={{height: '200px'}} className='mainSection'>
            Contenu de la section Accueil
          </section>
          <section id="competences" style={{height: '600px'}} className='mainSection'>
            Contenu de la section À propos
          </section>
          <section id="portfolio" style={{height: '600px'}} className='mainSection'>
            Contenu de la section Projets
          </section>
          <section id="contact" style={{height: '600px'}} className='mainSection'>
            Contenu de la section Contact
          </section>
        </div>
      </CustomThemeProvider>
    </>
  )
}

export default App
