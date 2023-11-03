import React, { useState, useEffect, useRef } from 'react';
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
      title: "Slide #1",
      content: () => <p>You can add any type of content here!</p>,
    },
    {
      title: "Slide #2 (wrapped in a div)",
      content: () => (
        <div className="customSlide">
          <h3>2</h3>
          <p>I'm just another slide</p>
          <p>Wrapped in a <code>div</code>!</p>
        </div>
      ),
    },
    {
      content: () => (
        <div className="withImage w-100">
          <img src="src/assets/images/responsiveWebsite.jpg" className='w-100'/>
        </div>
      ),
    },
    {
      title: "Slide #4",
      content: () => (
        <>
          <h2>Style me!</h2>{" "}
          <small>...in any way you please</small>
        </>
      ),
    },
    {
      title: "Slide #5",
      content: () => <h3>I'm the final slide...</h3>,
    },
  ];

  return (
    <div className='w-100'>
      <Carousel
        slides={slides}
        speed={3000}
        slideWidth={windowWidth}
        slideHeight={windowWidth/2}
        autoScroll
      />
    </div>
  );
}

const Carousel = ({
  slides = [],
  speed = 4000,
  transitionSpeed = 500,
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
    <div className="carousel">
      {!autoScroll && !manualMode && (
        <div className="controls">
          <a onClick={start}>Start</a>
          <a onClick={stop}>Stop</a>
        </div>
      )}

      <div className="slidesContainer" style={slideDimensionStyles()}>
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

        <div className="slideIndicator">
          {stateSlides.map((slide, index) => {
            if (index === 0 || index === stateSlides.length - 1) {
              return null;
            }
            return (
              <div
                key={index}
                onClick={() => setVisibleSlide(index)}
                className={`dot ${dotIsActive(index) ? "active" : ""}`}
              />
            );
          })}
        </div>

        <div
          id="slides"
          className={`slides ${hasTransitionClass ? "transition" : ""}`}
          style={{ left: calculateLeftMargin() }}
        >
          {stateSlides.map((slide, index) => (
            <div key={index} className="slide" style={slideDimensionStyles()}>
              {!!slide.title && <div className="title">{slide.title}</div>}
              <div className="slideInner">{slide.content()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;