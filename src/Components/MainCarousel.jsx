import React from 'react'
import '../Styles/APropos.css'
import { Typography, Box, Button } from '@mui/material'
import CarouselWrapper from './Slider'
import { blueGrey, amber, lime } from '@mui/material/colors'


function MainCarousel() {
    return (
            <Box className='sliderAndText' sx={{ position: 'relative', height: 'fitContent%', }}>
                <Box id="propos" sx={{ height: '100%', width: '100%', p: 5, position: 'absolute', zIndex: 10, background: theme => theme.palette.background.secondary, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <Typography className='mainTitle' variant='h1' sx={{ textAlign: 'center', color: 'whitesmoke' }} >
                            Développeur <br /> front-end junior
                        </Typography>
                    </Box>
                    <Box sx={{ m: 7 }}>
                        <Button variant='contained' href="#propos" sx={{ fontSize: '1.3em' }}>
                            Qui suis-je ?
                        </Button>
                    </Box>
                </Box>
                <CarouselWrapper />
            </Box>
    )
}

export default MainCarousel