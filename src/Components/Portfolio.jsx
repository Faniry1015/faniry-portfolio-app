import React from 'react'
import { Box, Paper, Typography, useTheme } from '@mui/material'

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Superman React',
            category: 'front',
            link: 'https://sayna-react-superman-base.web.app/',
            githubRepo: 'https://github.com/Faniry1015/SAYNA-REACT-SUPERMAN-112022',
            img: '',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nesciunt doloribus facere dolor aspernatur a. Ad recusandae, odit adipisci voluptatibus obcaecati qui dolorem totam commodi quas, provident maxime maiores voluptatum?'
        },
        {
            id: 2,
            title: 'Batman React',
            category: 'front',
            link: 'https://batman-sayna-react-app.web.app/',
            githubRepo: 'https://github.com/Faniry1015/SAYNA-REACTJS-BATMANREACT',
            img: '',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nesciunt doloribus facere dolor aspernatur a. Ad recusandae, odit adipisci voluptatibus obcaecati qui dolorem totam commodi quas, provident maxime maiores voluptatum?'
        },
    ]
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