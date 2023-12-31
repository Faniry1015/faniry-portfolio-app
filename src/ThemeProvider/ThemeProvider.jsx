import React, { useEffect, useState } from 'react'
import '../Styles/App.css'
import { createTheme, ThemeProvider, CssBaseline, useMediaQuery, alpha } from '@mui/material';
import { teal, purple, blueGrey, grey, lightGreen } from '@mui/material/colors'

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
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#121212' : '#33658aef',
                light: darkMode ? '#6c698d33' : '#84cae733'
            },
            background: {
                secondary: darkMode ? '#6c698d33' : '#84cae799',
            },
            info: {
                main: darkMode ? alpha(blueGrey[800], 0.9) : alpha(grey[100], 0.9),
            },
            success: {
                main: darkMode ? alpha(lightGreen[500], 0.9) : alpha('#33658a', 0.8),
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...(ownerState.variant === 'contained' &&
                            ownerState.color === 'primary' && {
                            backgroundColor: darkMode ? purple[600] : teal[400],
                            '&:hover': {
                                background: darkMode ? purple[400] : teal['A700'],
                            }
                        }),
                    }),
                },
            },
        },
        typography: {
            fontSize: 16,
            fontWeight: 400,
            textAlign: 'left',
            fontFamily: 'Poppins, Roboto, Arial, sans-serif',
            h1: {
                fontFamily: 'ConcertOne, Pacifico, Roboto, Arial, sans-serif',
                fontSize: '4em',
                '@media (max-width:900px)': {
                    fontSize: '3em',
                },
                '@media (max-width:600px)': {
                    fontSize: '2em',
                }
            },
            h2: {
                fontFamily: 'Poppins, Roboto, Arial, sans-serif',
                fontSize: '3em',
                textTransform: 'uppercase',
                fontWeight: 'bold'
            },
            h3: {
                fontFamily: 'Quicksand, Roboto, Arial, sans-serif',
                color: darkMode ? '#85ff9ecc' : '#ee6c4dee',
                fontSize: '2em',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                marginTop: '20px',
                marginBottom: '20px'
            },
            h4: {
                fontFamily: 'Roboto, Roboto, Arial, sans-serif',
                color: darkMode ? lightGreen[500] : '#33658a',
                fontSize: '1em',
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: '15px',
                marginBottom: '10px'
            },
            subtitle2: {
                textAlign: 'left',
                fontWeight: 'bold'
            },
            body2: {
                fontSize: '0.7em',
                textAlign: 'left',
                marginBottom: '5px'
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