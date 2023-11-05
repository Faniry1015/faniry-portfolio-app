import React, { useEffect, useState } from 'react'
import '../Styles/App.css'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { blueGrey } from '@mui/material/colors'

function CustomThemeProvider({ children, onThemeChange }) {

    const customTheme = {
        typography: {
            fontSize: 18,
            fontWeightRegular: 300,
            h1: {
                fontFamily: 'Poppins, Roboto, Arial',
                fontSize: '3em',
            },
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
                main: '#07418C',
            },
            background: {
                secondary: '#30bced22',
                img: blueGrey[900]
            },
        },
        ...customTheme,
    })

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#121212',
            },
            background: {
                secondary: '#6c698d99'
            },
        },
        ...customTheme
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