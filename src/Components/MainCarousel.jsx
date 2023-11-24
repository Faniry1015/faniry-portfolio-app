import React from 'react'
import { scrollTo } from './scrollTo'
import '../Styles/APropos.css'
import { Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material'
import MainSlider from './MainSlider'


function MainCarousel() {
    const theme = useTheme()
    
    const mdScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
            <Box className='sliderAndText' sx={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ height: '100%', width: '100%', p: 5, position: 'absolute', zIndex: 10, background: theme.palette.primary.light, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <Typography className='mainTitle' variant='h1' sx={{ textAlign: 'center', color: 'whitesmoke' }} >
                            Développeur <br /> front-end junior
                        </Typography>
                    </Box>
                    <Box sx={{ m: 2 }}>
                        <Button variant='contained' size={mdScreen ? 'medium': 'large'} onClick={() => scrollTo('propos')} >
                            Qui suis-je ?
                        </Button>
                    </Box>
                </Box>
                <MainSlider />
            </Box>
    )
}

export default MainCarousel