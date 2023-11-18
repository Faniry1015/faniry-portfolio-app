import React, { useEffect, useState } from 'react'
import '../Styles/App.css'
import { createTheme, ThemeProvider, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { teal, purple } from '@mui/material/colors'

function CustomThemeProvider({ children, onThemeChange }) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState(prefersDarkMode)

    
    useEffect(() => {
        if (onThemeChange !== '') {
            const theme = onThemeChange === 'dark'
            setDarkMode(theme)
        }
    }, [onThemeChange])

    const customTheme = createTheme({
        palette: {
            mode: darkMode ? 'dark': 'light',
            primary: {
                main: darkMode ? '#121212' : '#33658a',
            },
            background: {
                secondary: darkMode ?  '#6c698d44' : '#84cae744',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...(ownerState.variant === 'contained' &&
                            ownerState.color === 'primary' && {
                            backgroundColor:darkMode ? purple[600] : teal[500],
                            '&:hover': {
                                background: darkMode ? purple[600] : teal[600],
                            } 
                        }),
                    }),
                },
            },
        },
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
                color: darkMode ? purple[300] : teal[500],
                fontSize: '2em',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                marginTop: '25px',
                marginBottom: '25px'
            },
            h4: {
                fontFamily: 'Roboto, Roboto, Arial',
                color: darkMode ? purple[300] : teal[500],
                fontSize: '1.2em',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                marginTop: '25px',
                marginBottom: '25px'
            },
        },
    })


    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider