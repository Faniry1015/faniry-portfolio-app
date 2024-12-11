import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import CircularWithValueLabel from './CompetCircularProgress';

const CompetenceItem = ({ title, iconSrc, maxValue, iconStyle }) => {
    return (
        <Box position="relative">
            <Tooltip title={title} arrow>
                <IconButton sx={iconStyle}>
                    <img className="competIcon" src={iconSrc} alt={title} />
                </IconButton>
            </Tooltip>
            <CircularWithValueLabel maxValue={maxValue} />
        </Box>
    );
};

export default CompetenceItem;
