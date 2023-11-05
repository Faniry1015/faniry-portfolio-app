import React, { useEffect, useState } from 'react'
import '../Styles/App.css'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { lime } from '@mui/material/colors'

function CustomThemeProvider({ children, onThemeChange }) {

    const customTheme = {
        typography: {
            fontSize: 18,
            fontWeightRegular: 300,
            h2: {
                fontFamily: 'Poppins, Roboto, Arial',
                fontSize: '3em',
                textTransform: 'uppercase',
                fontWeight: 'bold'
            },
            h3: {
                fontFamily: 'Poppins, Roboto, Arial',
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
                main: '#33658a',
            },
            background: {
                secondary: '#84cae733',
            },
        },
        ...customTheme,
        typography: {
            h1: {
                fontFamily: 'Poppins, Roboto, Arial',
                fontSize: '3em',
                color: 'yellow'
            },
        },
    })

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#121212',
            },
            background: {
                secondary: '#6c698d33'
            },
        },
        ...customTheme,
        typography: {
            h1: {
                fontFamily: 'Poppins, Roboto, Arial',
                fontSize: '3em',
                color: lime[500]
            },
        },
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