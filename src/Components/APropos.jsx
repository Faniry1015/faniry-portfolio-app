import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import CarouselWrapper from './Slider'
import { blueGrey } from '@mui/material/colors'


function APropos() {
    return (
        <Box>
            <Box className='sliderAndText' sx={{ position: 'relative', height: 'fitContent%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box id="propos" sx={{ textAlign: 'center', color: blueGrey[100], position: 'absolute', zIndex: 10 }}>
                    <Typography variant='h1'>
                        Faniriantsoa RANDRIAHARIMINO
                    </Typography>
                </Box>
                <CarouselWrapper />
            </Box>

            <Box id='propos'>
                <Box>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, a dignissimos ratione, nemo temporibus doloremque similique deserunt cumque necessitatibus voluptates odit repellat nobis asperiores, eius perspiciatis impedit dolorum dolor? Laborum.
                    </Typography>
                    <Button>Test du bouton</Button>
                </Box>
            </Box>

        </Box>

    )
}

export default APropos