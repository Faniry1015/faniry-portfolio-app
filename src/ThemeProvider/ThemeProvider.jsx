import React from 'react'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { blue, orange } from '@mui/material/colors'

function CustomThemeProvider({ children, onThemeChange }) {

    const theme = createTheme({
        palette: {
            mode: onThemeChange,
            primary: {
                main: blue[900]
            }
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