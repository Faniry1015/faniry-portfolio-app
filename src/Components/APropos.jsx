import { Box, Stack } from '@mui/system'
import { Typography, Grid } from '@mui/material'
import React from 'react'

function APropos() {
    return (
        <Box component='section'>
            <Typography variant='h3' color='secondary' id='propos'>
                A propos de moi
            </Typography>
            <Grid container spacing={0} sx={{alignItems: 'center'}}>
                <Grid xs={12} md={5} display={{ xs: 'none', md: 'block' }}>
                    <Box><img src="src\assets\images\webdevVector.png" alt="web developer" style={{ maxWidth: '100%' }} /></Box>
                </Grid>
                <Grid xs={12} md={7}>
                    <Box>
                        <Typography>
                            Bonjour, je suis Faniriantsoa RANDRIAHARIMINO, passionné par les nouvelles technologies et fervent explorateur du monde du développement. Ma fascination pour l'innovation technologique a été le moteur de ma transition vers ce domaine.
                        </Typography>
                        Récemment, j'ai participé à un programme de formation financé par l'Organisation Internationale de la Francophonie pour approfondir mes compétences en tant que développeur.
                        <Typography>
                            Ingénieur Agronome de formation, mon parcours professionnel en tant que chef de service du système d'information et du suivi-évaluation au Ministère de l'Agriculture et de l'Élevage à Madagascar a renforcé ma passion pour la tech. Cette expérience a contribué à façonner ma compréhension des technologies de l'information et a constitué une base solide pour ma transition vers le développement.
                        </Typography>
                        <Typography>
                            Je suis ouvert à des collaborations passionnantes et enthousiaste à l'idée d'explorer de nouveaux horizons dans le monde du développement.
                        </Typography>

                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default APropos