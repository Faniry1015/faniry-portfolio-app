import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography } from '@mui/material';
import CustomThemeProvider from './ThemeProvider/ThemeProvider';
import Header from './Components/Header';

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
        <div>
          <section id="propos"  style={{height: '200px'}} className='mainSection'>
          <Typography variant='h1'>Bonjour je suis un titre H1</Typography>
          <Typography variant='h2'>Bonjour je suis un titre H2</Typography>
          <Typography variant='h3'>Bonjour je suis un titre H3</Typography>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus ipsum corrupti hic placeat assumenda, veniam consequatur ab at aspernatur adipisci. Quam, consectetur. Saepe unde rem, repellendus error necessitatibus est!
          </Typography>
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
