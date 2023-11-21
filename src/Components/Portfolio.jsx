import React from 'react'
import PortfolioCard from './PortfolioCard'
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material'

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Superman React',
            category: 'front',
            context: 'évaluation dans le cadre de ma formation react.js',
            techs: ['react.js','bootstrap','firebase'],
            link: 'https://sayna-react-superman-base.web.app/',
            githubRepo: 'https://github.com/Faniry1015/SAYNA-REACT-SUPERMAN-112022',
            img: 'src/assets/images/superman-eshop.jpg',
            description: 'site vitrine et e-commerce'
        },
        {
            id: 2,
            title: 'Batman React',
            category: 'front',
            context: 'réalisé dans le cadre de mon apprentissage de react.js',
            techs: ['react.js','bootstrap','firebase'],
            link: 'https://batman-sayna-react-app.web.app/',
            githubRepo: 'https://github.com/Faniry1015/SAYNA-REACTJS-BATMANREACT',
            img: 'src/assets/images/batman-header.jpg',
            description: 'site vitrine, e-commerce et quizz'
        },
        {
            id: 3,
            title: 'Black Panther JS',
            category: 'front',
            context: 'évaluation dans le cadre de ma formation vanilla javascript',
            techs: ['javascript','html','css'],
            link: 'https://batman-sayna-react-app.web.app/',
            githubRepo: 'https://github.com/Faniry1015/SAYNA-REACTJS-BATMANREACT',
            img: 'src/assets/images/batman-header.jpg',
            description: 'site vitrine et quizz'
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
                        return <Grid item  sx={{display: 'flex', justifyContent:'center'}} xs={12} sm={6} md={4} key={project.id}>
                            <PortfolioCard
                                title={project.title}
                                category={project.category}
                                context={project.context}
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