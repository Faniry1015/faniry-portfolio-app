import React from 'react'
import PortfolioCard from './PortfolioCard'
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material'

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Superman React',
            category: 'front',
            techs: ['react.js','bootstrap','firebase'],
            link: 'https://sayna-react-superman-base.web.app/',
            githubRepo: 'https://github.com/Faniry1015/SAYNA-REACT-SUPERMAN-112022',
            img: 'src/assets/images/superman-eshop.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nesciunt doloribus facere dolor aspernatur a. Ad recusandae, odit adipisci voluptatibus obcaecati qui dolorem totam commodi quas, provident maxime maiores voluptatum?'
        },
        {
            id: 2,
            title: 'Batman React',
            category: 'front',
            techs: ['react.js','bootstrap','firebase'],
            link: 'https://batman-sayna-react-app.web.app/',
            githubRepo: 'https://github.com/Faniry1015/SAYNA-REACTJS-BATMANREACT',
            img: 'src/assets/images/batman-header.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nesciunt doloribus facere dolor aspernatur a. Ad recusandae, odit adipisci voluptatibus obcaecati qui dolorem totam commodi quas, provident maxime maiores voluptatum?'
        },
    ]
    const theme = useTheme()
    return (
        <Box component='section' className='mainSection' id='portfolio'>
            <Paper elevation={4} sx={{ p: 4, bgcolor: theme.palette.background.secondary }}>
                <Typography variant='h3'>
                    Portfolio
                </Typography>
                <Grid container spacing={2}>

                    {projects.map((project) => {
                        return <Grid item xs={6} md={4} key={project.id}>
                            <PortfolioCard
                                title={project.title}
                                category={project.category}
                                techs={project.techs}
                                link={project.link}
                                githubRepo={project.githubRepo}
                                img={project.img}
                                description={project.description}
                            />
                        </Grid>
                    })}

                </Grid>
            </Paper>
        </Box>
    )
}

export default Portfolio