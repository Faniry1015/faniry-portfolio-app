import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import CarouselWrapper from './Slider'
import { blueGrey } from '@mui/material/colors'


function APropos() {
    return (
        <Box>
            <Box id="propos" className='mainSection' sx={{ width: '100%', position: 'absolute' }}>
                <CarouselWrapper />
            </Box>
            <Box  sx={{color: blueGrey[100], position: 'relative', zIndex: 10 }}>
                <Typography variant='h1'>
                    Faniriantsoa RANDRIAHARIMINO
                </Typography>
            </Box>
        </Box>
                    )
}

export default APropos