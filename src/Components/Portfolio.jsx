import React from 'react'
import { Box, Paper, Typography, useTheme } from '@mui/material'

function Portfolio() {
    const theme = useTheme()
  return (
    <Box component='section'  className='mainSection' id='portfolio'>
    <Paper elevation={4} sx={{p:4, bgcolor: theme.palette.background.secondary}}>
        <Typography variant='h3'>
            Portfolio
        </Typography>
    </Paper>
</Box>
  )
}

export default Portfolio