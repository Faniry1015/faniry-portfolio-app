import React, { useState } from 'react'
import { Switch } from '@mui/material'
import NavBar from './NavBar'
import '../Styles/Header.css'

function Header({ onThemeChange, accueilRef, aproposRef, projetsRef, contactRef }) {
    const [isLight, setIsLight] = useState(true)

    const handleThemeToggle = (e) => {
        onThemeChange(e.target.checked)
        setIsLight(!isLight)
    }

    return (
        <div className='header'>
            <NavBar />
            <Switch
                checked={isLight}
                onChange={handleThemeToggle}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
    )
}

export default Header