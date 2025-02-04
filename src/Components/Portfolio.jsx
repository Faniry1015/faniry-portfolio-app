import React, { useEffect, useState } from 'react'
import PortfolioCard from './PortfolioCard'
import { Box, Grid, Paper, Typography, useTheme, ToggleButtonGroup, ToggleButton } from '@mui/material'
import supermanreact from '../assets/images/superman-eshop.jpg'
import saynamobile from '../assets/images/sayna-mobile.jpg'
import batmanreact from '../assets/images/batman-header.jpg'
import blackpantheruxui from '../assets/images/black-panther-header.jpg'
import draeStatAdmin from '../assets/images/draeStatAdmin.jpg'
import draeMap from '../assets/images/draeVakMap.jpg'
import pdipapp from '../assets/images/pdip-app.png'


const projects = [
    {
        id: 1,
        title: 'DRAE Vak Interactive Map',
        category: 'front',
        context: 'Projet Professionnel',
        techs: ['React', 'material ui', 'leaflet', 'firebase'],
        link: 'https://drae-vakinankaratra.web.app/',
        img: draeMap,
        description: 'Carte interactive représentant les intervenants et interventions dans le secteur Agriculture/Elevage dans la Région Vakinankaratra - Madagascar'
    },
    {
        id: 2,
        title: 'DRAE Vak Stats & Administration',
        category: 'front',
        context: 'Projet professionnel',
        techs: ['material ui', 'react.js', 'vite'],
        link: 'https://drae-vakinankaratra-admin.web.app/',
        githubRepo: 'https://github.com/Faniry1015/drae-vakinankaratra-admin',
        img: draeStatAdmin,
        description: 'Gestion et visualisation de données statistiques et gestion de la Direction en générale'
    },
    {
        id: 3,
        title: 'P-dipping App',
        category: 'front',
        context: 'Application mobile pour l\'enregistrement et l\'envoi de données de ventes d\'engrais chimique',
        techs: ['flutter', 'firebase'],
        // link: 'https://www.figma.com/proto/RMqxHCO54BVhwlcbwyTIIv/SAYNA-UXUI-DESIGNPANTHER?type=design&node-id=96-371&t=YnZTGLIyUmPyKQan-1&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=34%3A97&mode=design',
        img: pdipapp,
        description: 'Enregistrement, modification, suppression et envoi des données ; Gestion des données envoyées par l\' administrateur ; Fiche technique pour la formation des clients à la technique P-Dipping'
    },
    {
        id: 4,
        title: 'Superman React',
        category: 'front',
        context: 'évaluation dans le cadre de ma formation react.js',
        techs: ['react.js', 'bootstrap', 'firebase'],
        link: 'https://sayna-react-superman-base.web.app/',
        githubRepo: 'https://github.com/Faniry1015/SAYNA-REACT-SUPERMAN-112022',
        img: supermanreact,
        description: 'site vitrine et e-commerce sur le thème de l\'univers de Superman'
    },
    {
        id: 5,
        title: 'Sayna Mobile UX/UI',
        category: 'design',
        context: 'projet réalisé dans le cadre de mon initiation au design UX/UI',
        techs: ['figma'],
        link: 'https://www.figma.com/proto/l2eRUHlLil3XyJIE1xoTKR/SAYNA-UXUI-DESIGNMOBILE?type=design&node-id=8-3&t=beG9jSuPWiYgfgtL-1&scaling=scale-down&page-id=0%3A1&mode=design',
        githubRepo: 'https://github.com/Faniry1015/SAYNA-UXUI-DESIGNPANTHER.git',
        img: saynamobile,
        description: 'reproduction d\'une maquette mobile sur figma'
    },
    {
        id: 6,
        title: 'Batman React',
        category: 'front',
        context: 'réalisé dans le cadre de mon apprentissage de react.js',
        techs: ['react.js', 'bootstrap', 'firebase'],
        link: 'https://batman-sayna-react-app.web.app/',
        githubRepo: 'https://github.com/Faniry1015/SAYNA-REACTJS-BATMANREACT',
        img: batmanreact,
        description: 'site vitrine, e-commerce et quizz sur le thème de l\'univers de Batman'
    },
    {
        id: 7,
        title: 'Black Panther UX/UI',
        category: 'design',
        context: 'évaluation dans le cadre de ma formation au design UX/UI',
        techs: ['figma'],
        link: 'https://www.figma.com/proto/RMqxHCO54BVhwlcbwyTIIv/SAYNA-UXUI-DESIGNPANTHER?type=design&node-id=96-371&t=YnZTGLIyUmPyKQan-1&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=34%3A97&mode=design',
        githubRepo: 'https://github.com/Faniry1015/SAYNA-UXUI-DESIGNPANTHER.git',
        img: blackpantheruxui,
        description: 'reproduction d\'un prototype d\'une site vitrine sur l\'univers de black panther'
    }
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
            <Paper elevation={4} sx={{ py: 7, px: 4, bgcolor: theme.palette.background.secondary }}>
                <Typography variant='h3'>
                    Portfolio
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', m: 2}} >
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
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center'}} >
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