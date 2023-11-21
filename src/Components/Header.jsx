import React from 'react'
import { Container,Typography } from '@mui/material'
import { Mail, Phone } from '@mui/icons-material'
import NavBar from './NavBar'
import '../Styles/Header.css'

function Header({ onThemeChange }) {

    return (<>
        <Container sx={{margin: '5px 5px 5px 0px' }}>
            <Typography variant='body2' sx={{textAlign: 'right'}}>
                <Mail /> <a href="mailto:frandriaharimino@yahoo.com">frandriaharimino@yahoo.com</a>  <Phone /> +261 34 08 717 66
            </Typography>

        </Container>
        <NavBar onThemeChange={onThemeChange} />
    </>
    )
}

export default Header