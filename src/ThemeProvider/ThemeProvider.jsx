import React from 'react'
import '../Styles/App.css'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { blue } from '@mui/material/colors'

function CustomThemeProvider({ children, onThemeChange }) {

    const theme = createTheme({
        palette: {
            mode: onThemeChange,
            primary: {
                main: blue[900],
            }
        },
        typography: {
            fontSize: 18,
            fontWeightRegular: 300,
            h1: {
                fontFamily: 'Poppins',
                textTransform:'uppercase',
              },
            h2: {
                fontFamily: 'Poppins',
                fontSize: '3em',
                textTransform:'uppercase',
                fontWeight: 'bold'
              },
            h3: {
                fontFamily: 'Poppins',
                fontSize: '2em',
                textTransform:'uppercase',
                fontWeight: 'bold'
              },
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider