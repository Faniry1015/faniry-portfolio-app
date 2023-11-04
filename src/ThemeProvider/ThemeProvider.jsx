import React, { useEffect, useState } from 'react'
import '../Styles/App.css'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { blue, purple } from '@mui/material/colors'

function CustomThemeProvider({ children, onThemeChange }) {

    const customTypography = {
        typography: {
            fontSize: 18,
            fontWeightRegular: 300,
            h1: {
                fontFamily: 'Poppins',
                fontSize: '3rem',
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

    }

    const ligthTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#07418C',
            }
        },
        ...customTypography
    })

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: purple[800],
            }
        },
        ...customTypography
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