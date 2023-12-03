import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';
import CustomThemeProvider from './ThemeProvider/ThemeProvider';
import Header from './Components/Header';
import MainCarousel from './Components/MainCarousel';
import APropos from './Components/APropos';
import Competences from './Components/Competences';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  const [loading, setLoading] = useState(true)

  const [themeStatus, setThemeStatus] = useState('')

  const handleThemeToggle = (themeLabel) => {
    setThemeStatus(themeLabel)
  }

  const theme = useTheme()

  const margins = {
    [theme.breakpoints.down('xs')]: {
      mx: 2,
    },
    [theme.breakpoints.up('sm')]: {
      mx: 4,
    },
    [theme.breakpoints.up('md')]: {
      mx: 6,
    },
    [theme.breakpoints.up('lg')]: {
      mx: 8,
    },
    [theme.breakpoints.up('xl')]: {
      mx: 10,
    },
  };

  useEffect(() => {
    const handleLoad = () => {
      console.log('Page loaded!');
      setLoading(false)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <>
      {JSON.stringify(loading)}
      {loading && 'loading...'}
      {
        !loading &&
        <CustomThemeProvider onThemeChange={themeStatus} >
          <Header onThemeChange={handleThemeToggle} />
          <MainCarousel />
          <Box sx={{ ...margins, textAlign: 'justify' }}>
            <APropos />
            <Competences />
            <Portfolio />
            <Contact />
          </Box>
          <Footer />
        </CustomThemeProvider>
      }
    </>
  )
}

export default App
