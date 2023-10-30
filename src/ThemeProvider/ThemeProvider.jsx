import React, { useEffect, useState } from 'react'
import { Button, createTheme, Paper, ThemeProvider, CssBaseline } from '@mui/material';
import { orange } from '@mui/material/colors'

function CustomThemeProvider({ children, onThemeChange }) {

    const theme = createTheme({
        palette: {
            mode: onThemeChange,
            primary: {
                main: orange[500]
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