import React from 'react'
import { Container} from '@mui/material'
import { Mail, Phone } from '@mui/icons-material'
import NavBar from './NavBar'
import '../Styles/Header.css'

function Header({ onThemeChange}) {

    return (<>
        <Container maxWidth="xxl" sx={{display: {xs: 'none', sm: 'none', md:'block'}, margin: '5px 5px 5px 0px', textAlign: 'right', flexGrow: 1 }}>
            <Mail /> <a href="mailto:adresse.email@example.com">frandriaharimino@yahoo.com</a>  <Phone/> +261 34 08 717 66
        </Container>
        <NavBar onThemeChange={onThemeChange} />
    </>
    )
}

export default Header