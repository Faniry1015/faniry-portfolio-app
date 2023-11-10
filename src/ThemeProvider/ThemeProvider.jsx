import React, { useEffect, useState } from 'react'
import '../Styles/App.css'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { lime, teal, purple } from '@mui/material/colors'

function CustomThemeProvider({ children, onThemeChange }) {

    const customTheme = {
        typography: {
            fontSize: 16,
            fontWeightRegular: 300,
            fontFamily: 'Poppins, Roboto, Arial',
            h1: {
                fontFamily: 'ConcertOne, Roboto, Arial',
                fontSize: '4em',
            },
            h2: {
                fontFamily: 'Poppins, Roboto, Arial',
                fontSize: '3em',
                textTransform: 'uppercase',
                fontWeight: 'bold'
            },
            h3: {
                fontFamily: 'Roboto, Roboto, Arial',
                fontSize: '2em',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                marginTop: '50px',
                marginBottom: '25px'
            },
        },
    }

    const ligthTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#33658a',
            },
            background: {
                secondary: '#84cae744',
            },
        },
        typography: {
            h1: {
                color: 'yellow',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...(ownerState.variant === 'contained' &&
                            ownerState.color === 'primary' && {
                            backgroundColor: teal[500],
                        }),
                    }),
                },
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
                secondary: '#6c698d44'
            },
        },
        typography: {
            h1: {
                color: lime[500],
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...(ownerState.variant === 'contained' &&
                            ownerState.color === 'primary' && {
                            backgroundColor: purple[600],
                        }),
                    }),
                },
            },
        },
        ...customTheme,
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