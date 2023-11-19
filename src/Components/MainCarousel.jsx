import React from 'react'
import { scrollTo } from './scrollTo'
import '../Styles/APropos.css'
import { Typography, Box, Button, useTheme } from '@mui/material'
import CarouselWrapper from './Slider'


function MainCarousel() {
    const theme = useTheme()
    return (
            <Box className='sliderAndText' sx={{ position: 'relative' }}>
                <Box sx={{ height: '100%', width: '100%', p: 5, position: 'absolute', zIndex: 10, background: theme.palette.primary.light, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <Typography className='mainTitle' variant='h1' sx={{ textAlign: 'center', color: 'whitesmoke' }} >
                            Développeur <br /> front-end junior
                        </Typography>
                    </Box>
                    <Box sx={{ m: 7 }}>
                        <Button variant='contained' size='large' onClick={() => scrollTo('propos')} >
                            Qui suis-je ?
                        </Button>
                    </Box>
                </Box>
                <CarouselWrapper />
            </Box>
    )
}

export default MainCarousel