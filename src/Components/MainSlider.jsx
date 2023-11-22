import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material'
import Slider from './Slider';
import '../Styles/Slider.css'
import pccode from "../assets/images/pcCode.jpg"
import code from "../assets/images/code.png"
import react from "../assets/images/react.webp"

function MainSlider() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [])


  const slides = [
    {
        content: () => (
            <Box className="withImage w-100">
              <img src={pccode} className='w-100 bluredImg'/>
            </Box>
          ),
    },
    {
      content: () => (
        <Box className="withImage w-100" >
          <img src={code} className='w-100' />
        </Box>
      ),
    },
    {
        content: () => (
            <Box className="withImage w-100">   
              <img src={react} className='w-100'/>
            </Box>
          ),
    },
  ];

  return (
    <Box className='w-100'>
      <Slider
        slides={slides}
        speed={5000}
        slideWidth={windowWidth}
        slideHeight={windowWidth/2.5}
        autoScroll
      />
    </Box>
  );
}



export default MainSlider;