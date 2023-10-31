import React, { useState } from 'react'
import {Switch} from '@mui/material'
import NavBar from './NavBar'

function Header({onThemeChange}) {
    const [isLight, setIsLight] = useState(true)

    const handleThemeToggle = (e) => {
        onThemeChange(e.target.checked)
        setIsLight(!isLight)
    }
    return (
        <div>
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