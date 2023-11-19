import React, {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'absolute', display: 'inline-flex', bottom: '-10px', right: '-10px'}}>
      <CircularProgress variant="determinate" {...props} sx={{color: 'grey', borderRadius:'50%', bgcolor:'#9c9c9c33'}}  />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel({maxValue}) {
  const [progress, setProgress] = useState(20);

  const { ref, inView, entry} = useInView({
    threshold: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
        setProgress((prevProgress) => {
            const newProgress = prevProgress + 1;
    
            if (newProgress >= maxValue) {
              clearInterval(timer);
              return maxValue;
            }
    
            return newProgress;
          });
        }, 40);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
