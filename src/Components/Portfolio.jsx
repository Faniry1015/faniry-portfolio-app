import React, { useEffect, useState } from 'react'
import PortfolioSlider from './PortFolioSlider'
import PortfolioCard from './PortfolioCard'
import { Box, Grid, Paper, Typography, useTheme, ToggleButtonGroup, ToggleButton } from '@mui/material'
const projects = [
    {
        id: 1,
        title: 'Superman React',
        category: 'front',
        context: 'évaluation dans le cadre de ma formation react.js',
        techs: ['react.js', 'bootstrap', 'firebase'],
        link: 'https://sayna-react-superman-base.web.app/',
        githubRepo: 'https://github.com/Faniry1015/SAYNA-REACT-SUPERMAN-112022',
        img: 'src/assets/images/superman-eshop.jpg',
        description: 'site vitrine et e-commerce sur le thème de l\'univers de Superman'
    },
    {
        id: 2,
        title: 'Sayna Mobile UX/UI',
        category: 'design',
        context: 'projet réalisé dans le cadre de mon initiation au design UX/UI',
        techs: ['figma'],
        link: 'https://www.figma.com/proto/l2eRUHlLil3XyJIE1xoTKR/SAYNA-UXUI-DESIGNMOBILE?type=design&node-id=8-3&t=beG9jSuPWiYgfgtL-1&scaling=scale-down&page-id=0%3A1&mode=design',
        githubRepo: 'https://github.com/Faniry1015/SAYNA-UXUI-DESIGNPANTHER.git',
        img: 'src/assets/images/sayna-mobile.jpg',
        description: 'reproduction d\'une maquette mobile sur figma'
    },
    {
        id: 3,
        title: 'Batman React',
        category: 'front',
        context: 'réalisé dans le cadre de mon apprentissage de react.js',
        techs: ['react.js', 'bootstrap', 'firebase'],
        link: 'https://batman-sayna-react-app.web.app/',
        githubRepo: 'https://github.com/Faniry1015/SAYNA-REACTJS-BATMANREACT',
        img: 'src/assets/images/batman-header.jpg',
        description: 'site vitrine, e-commerce et quizz sur le thème de l\'univers de Batman'
    },
    {
        id: 4,
        title: 'Black Panther JS',
        category: 'front',
        context: 'évaluation dans le cadre de ma formation vanilla javascript',
        techs: ['javascript', 'html', 'css'],
        link: '',
        githubRepo: 'https://github.com/Faniry1015/SAYNA-JSTSCANVAS-PANTHER-072022',
        img: 'src/assets/images/black-panther-header.jpg',
        description: 'création d\'un site vitrine et quizz à partir du prototype créé dans le projet Black Panther UX/UI'
    },
    {
        id: 5,
        title: 'Black Panther UX/UI',
        category: 'design',
        context: 'évaluation dans le cadre de ma formation au design UX/UI',
        techs: ['figma'],
        link: 'https://www.figma.com/proto/RMqxHCO54BVhwlcbwyTIIv/SAYNA-UXUI-DESIGNPANTHER?type=design&node-id=96-371&t=YnZTGLIyUmPyKQan-1&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=34%3A97&mode=design',
        githubRepo: 'https://github.com/Faniry1015/SAYNA-UXUI-DESIGNPANTHER.git',
        img: 'src/assets/images/black-panther-footer.jpg',
        description: 'reproduction d\'un prototype d\'une site vitrine sur l\'univers de black panther'
    },
]

function Portfolio() {
    const theme = useTheme()
    const [category, setCategory] = useState('tous')
    const [visibleProjects, setVisibleProjects] = useState(projects)

    useEffect(() => {
        const filteredProjects = projects.filter(project => {
            return category !== 'tous' ? project.category === category : project
        })
        setVisibleProjects(filteredProjects)
    }, [category])

    const handleCategoryChange = (e) => {
        const currentCategory = e.target.value
        setCategory(currentCategory)

    }



    return (
        <Box component='section' className='mainSection' id='portfolio'>
            {category}
            <Paper elevation={4} sx={{ p: 4, bgcolor: theme.palette.background.secondary }}>
                <Typography variant='h3'>
                    Portfolio
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', m: 2}}>
                    <ToggleButtonGroup
                        size='small'
                        aria-label="app dark/light mode"
                        value={category}
                        onChange={handleCategoryChange}
                        exclusive
                    >
                        <ToggleButton value='tous' aria-label='tous' >
                            tous
                        </ToggleButton>
                        <ToggleButton value='front' aria-label='front-end' >
                            front-end
                        </ToggleButton>
                        <ToggleButton value='design' aria-label='design' >
                            design
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <PortfolioSlider/>

                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {visibleProjects.map((project) => {
                        return <Grid item sx={{ display: 'flex', justifyContent: 'center' }} xs={12} sm={6} md={4} key={project.id}>
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