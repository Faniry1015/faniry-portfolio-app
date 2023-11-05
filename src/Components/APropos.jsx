import React from 'react'
import '../Styles/APropos.css'
import { Typography, Box, Button } from '@mui/material'
import CarouselWrapper from './Slider'
import { blueGrey, amber, lime} from '@mui/material/colors'


function APropos() {
    return (
        <Box>
            <Box className='sliderAndText' sx={{ position: 'relative', height: 'fitContent%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box id="propos" sx={{height: '50%', width: '50%', p: 5, position: 'absolute', zIndex: 10, borderTop: '20px solid', borderColor: theme => theme.palette.primary.main, background: theme => theme.palette.background.secondary}}>
                    <Typography className='mainTitle' variant='h1' sx={{color: lime['A200'], textAlign: 'center'}} >
                        Développeur <br/> front-end junior
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