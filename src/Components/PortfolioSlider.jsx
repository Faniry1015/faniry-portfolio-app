import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material'
import Slider from './Slider';
import '../Styles/Slider.css'

function PortfolioSlider() {
  const containerRef = useRef(null)

  const [parentWidth, setParentWidth] = useState(null)

  const handleResize = () => {
    setParentWidth(containerRef.current.clientWidth);
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
          <img src="src/assets/images/pcCode.jpg" className='w-100 bluredImg' />
        </Box>
      ),
    },
    {
      content: () => (
        <Box className="withImage w-100" >
          <img src="src\assets\images\code.png" className='w-100' />
        </Box>
      ),
    },
    {
      content: () => (
        <Box className="withImage w-100">
          <img src="src\assets\images\react.webp" className='w-100' />
        </Box>
      ),
    },
  ];

  return (
    <Box className='w-100' ref={containerRef}>
      <Slider
        slides={slides}
        speed={5000}
        slideWidth={parentWidth}
        slideHeight={300}
        manualMode
      />
    </Box>
  );
}



export default PortfolioSlider;