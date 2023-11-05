import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material'
import '../Styles/Slider.css'

function Slider() {

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
              <img src="src/assets/images/pcCode.jpg" className='w-100'/>
            </Box>
          ),
    },
    {
      content: () => (
        <Box className="withImage w-100" sx={{background: theme => theme.palette.background.img}}>
          <img src="src\assets\images\code.png" className='w-100' />
        </Box>
      ),
    },
    {
        content: () => (
            <Box className="withImage w-100">   
              <img src="src\assets\images\react.webp" className='w-100'/>
            </Box>
          ),
    },
  ];

  return (
    <Box className='w-100'>
      <Carousel
        slides={slides}
        speed={10000}
        slideWidth={windowWidth}
        slideHeight={windowWidth/2}
        autoScroll
      />
    </Box>
  );
}

const Carousel = ({
  slides = [],
  speed = 4000,
  transitionSpeed = 1000,
  slideWidth = 300,
  slideHeight = 300,
  autoScroll,
  manualMode,
}) => {
  if (slides.length < 2) {
    console.error("Please provide more slides");
    return null;
  }

  const [visibleSlide, setVisibleSlide] = useState(1);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [stateSlides, setStateSlides] = useState(slides);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    const slidesWithClones = [...slides];
    slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
    slidesWithClones.push(slidesWithClones[1]);
    setStateSlides(slidesWithClones);

    if (!!autoScroll) {
      start();
    }
  }, []);

  useEffect(() => {
    if (visibleSlide === stateSlides.length - 1) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setVisibleSlide(1);
      }, transitionSpeed);
    } else if (visibleSlide === 1) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    } else if (visibleSlide === 0) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setVisibleSlide(stateSlides.length - 2);
      }, transitionSpeed);
    } else if (visibleSlide === stateSlides.length - 2) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }
  }, [visibleSlide]);

  useEffect(() => {
    if (leftAndRightDisabled) {
      setTimeout(() => {
        setLeftAndRightDisabled(false);
      }, transitionSpeed * 2);
    }
  }, [leftAndRightDisabled]);

  const start = () => {
    if (intervalId.current != null) {
      return;
    }
    intervalId.current = setInterval(() => {
      setVisibleSlide((prevVisibleSlide) => {
        if (prevVisibleSlide + 1 === stateSlides.length) {
          return 0;
        }
        return prevVisibleSlide + 1;
      });
    }, speed);
  };

  const stop = () => {
    clearInterval(intervalId.current);
  };

  const calculateLeftMargin = () => {
    return "-" + visibleSlide * slideWidth + "px";
  };

  const slideDimensionStyles = () => {
    return { width: slideWidth + "px", height: slideHeight + "px" };
  };

  const scrollLeft = () => {
    setVisibleSlide(visibleSlide - 1);
  };

  const scrollRight = () => {
    setVisibleSlide(visibleSlide + 1);
  };

  const dotIsActive = (index) => {
    return (
      index === visibleSlide ||
      (index === 1 && visibleSlide === stateSlides.length - 1) ||
      (index === stateSlides.length - 2 && visibleSlide === 0)
    );
  };

  return (
    <Box className="carousel">
      {!autoScroll && !manualMode && (
        <Box className="controls">
          <a onClick={start}>Start</a>
          <a onClick={stop}>Stop</a>
        </Box>
      )}

      <Box className="slidesContainer" style={slideDimensionStyles()}>
        {!!manualMode && (
          <>
            <a
              onClick={!leftAndRightDisabled ? scrollLeft : null}
              className={`scrollLeft ${leftAndRightDisabled ? "disabled" : ""}`}
            >
              Left
            </a>
            <a
              onClick={!leftAndRightDisabled ? scrollRight : null}
              className={`scrollRight ${leftAndRightDisabled ? "disabled" : ""}`}
            >
              Right
            </a>
          </>
        )}

        <Box className="slideIndicator">
          {stateSlides.map((slide, index) => {
            if (index === 0 || index === stateSlides.length - 1) {
              return null;
            }
            return (
              <Box
                key={index}
                onClick={() => setVisibleSlide(index)}
                className={`dot ${dotIsActive(index) ? "active" : ""}`}
              />
            );
          })}
        </Box>

        <Box
          id="slides"
          className={`slides ${hasTransitionClass ? "transition" : ""}`}
          style={{ left: calculateLeftMargin() }}
        >
          {stateSlides.map((slide, index) => (
            <Box key={index} className="slide" style={slideDimensionStyles()}>
              {!!slide.title && <Box className="title">{slide.title}</Box>}
              <Box className="slideInner">{slide.content()}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;