import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';
import Loader from './Components/Loader';
import CustomThemeProvider from './ThemeProvider/ThemeProvider';
import Header from './Components/Header';
import MainCarousel from './Components/MainCarousel';
import APropos from './Components/APropos';
import Competences from './Components/Competences';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useRef } from 'react';
import { AddBox, TroubleshootOutlined } from '@mui/icons-material';

function App() {

  const [loading, setLoading] = useState(true)

  const [loaderEffect, setLoaderEffect] = useState(false)


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

  const appRef = useRef(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaderEffect(true)
      const effectTimer = setTimeout(() => {
        setLoading(false);
      }, 300)
      return () => clearTimeout(effectTimer)
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [])

  useEffect(() => {
    if (appRef.current) {
      appRef.current.classList.add('active');
    }
  }, [loading]);

  return (
    <>
      <CustomThemeProvider onThemeChange={themeStatus}>
        {loading &&
            <Loader loaderEffect={loaderEffect} />
        }
        {
          !loading &&
          <div className={`transition-fade`} ref={appRef}>
            <Box>
              <Header onThemeChange={handleThemeToggle} />
              <MainCarousel />
              <Box sx={{ ...margins, textAlign: 'justify' }}>
                <APropos />
                <Competences />
                <Portfolio />
                <Contact />
              </Box>
              <Footer />
            </Box>
          </div >
        }
      </CustomThemeProvider>

    </>
  )
}

export default App
