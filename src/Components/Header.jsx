import React, { useState } from 'react'
import { Container } from '@mui/material'
import { Mail } from '@mui/icons-material'
import NavBar from './NavBar'
import '../Styles/Header.css'

function Header({ onThemeChange, accueilRef, aproposRef, projetsRef, contactRef }) {

    return (<>
        <Container maxWidth="xxl" sx={{ margin: '5px 5px 5px 0px', textAlign: 'right', flexGrow: 1 }}>
            <Mail /> <a href="mailto:adresse.email@example.com">frandriaharimino@yahoo.com</a> | Tel: +261 34 08 717 66
        </Container>
        <div className='header'>
            <NavBar onThemeChange={onThemeChange}/>
        </div>
    </>

    )
}

export default Header