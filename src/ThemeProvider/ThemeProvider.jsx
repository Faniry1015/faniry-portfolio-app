import React, { useEffect, useState } from 'react'
import '../Styles/App.css'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { blue, purple } from '@mui/material/colors'

function CustomThemeProvider({ children, onThemeChange }) {

    const customTypography = {
        fontSize: 18,
        fontWeightRegular: 300,
        h1: {
            fontFamily: 'Poppins',
            textTransform: 'uppercase',
        },
        h2: {
            fontFamily: 'Poppins',
            fontSize: '3em',
            textTransform: 'uppercase',
            fontWeight: 'bold'
        },
        h3: {
            fontFamily: 'Poppins',
            fontSize: '2em',
            textTransform: 'uppercase',
            fontWeight: 'bold'
        },
    }

    const ligthTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#07418C',
            }
        },
        typography: customTypography
    })

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            secondary: {
                main: purple[800],
            }
        },
        typography: customTypography
    })

    
    const [theme, setTheme] = useState(ligthTheme)

    useEffect(() => {
        const currentTheme = onThemeChange === 'light' ? ligthTheme : darkTheme
        setTheme(currentTheme)
    }, [onThemeChange])


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider