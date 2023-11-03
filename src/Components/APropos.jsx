import React from 'react'
import { Typography, Box } from '@mui/material'
import CarouselWrapper from './Slider'

function APropos() {
    return (
        <Box id="propos" className='mainSection' sx={{width: '100%'}}>
        <CarouselWrapper />
        <img className='aProposBg w-100' src="src\assets\images\responsiveWebsite.jpg" alt="responsive web design" />

        </Box>
    )
}

export default APropos