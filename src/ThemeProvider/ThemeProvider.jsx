import React, { useEffect, useState } from 'react'
import '../Styles/App.css'
import { createTheme, ThemeProvider, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import { lime, teal, purple } from '@mui/material/colors'

function CustomThemeProvider({ children, onThemeChange }) {
    const mytheme = useTheme();

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
                color: mytheme.palette.secondary.main,
                fontSize: '2em',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                marginTop: '75px',
                marginBottom: '25px'
            },
        },
    }

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#33658a',
            },
            background: {
                secondary: '#84cae744',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...(ownerState.variant === 'contained' &&
                            ownerState.color === 'primary' && {
                            backgroundColor: teal[500],
                            '&:hover': {
                                background: teal[600]
                            } 
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
        components: {
            MuiButton: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...(ownerState.variant === 'contained' &&
                            ownerState.color === 'primary' && {
                            backgroundColor: purple[600],
                            '&:hover': {
                                backgroundColor: purple[800],
                            }
                        }),
                    }),
                },
            },
        },
        ...customTheme,
    })


    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [theme, setTheme] = useState(prefersDarkMode ? darkTheme : lightTheme);

    useEffect(() => {
        if (onThemeChange !== '') {
            const currentTheme = onThemeChange === 'light' ? lightTheme : darkTheme
            setTheme(currentTheme)
        }
    }, [onThemeChange])


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider