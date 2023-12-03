import React from 'react'
import { Box } from '@mui/system'
import { useInView } from 'react-intersection-observer'
import { Typography, Grid, Paper, Container, useTheme } from '@mui/material'
import aproposImg from '../assets/images/webdevVector.png'

function APropos() {
    const theme = useTheme()

    const [ref, inView] = useInView({
        triggerOnce: true,
    })
    
    return (
        <Box component='section' className='mainSection' id='propos'>
            <Paper elevation={4} sx={{ p: 4, bgcolor: theme.palette.background.secondary }}>
                <Container component="main" maxWidth='md'>
                    <Typography variant='h3'>
                        A propos de moi
                    </Typography>
                    <Grid container spacing={1} sx={{ alignItems: 'center' }} ref={ref} className={`zoom-in ${inView ? 'active' : ''}  `}>
                        <Grid item xs={12} md={5} display={{ xs: 'none', md: 'block' }}>
                            <Box><img src={aproposImg} alt="web developer" style={{ maxWidth: '100%' }} /></Box>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Box>
                                <Typography>
                                    Bonjour, je suis Faniriantsoa RANDRIAHARIMINO, passionné par les nouvelles technologies et fervent explorateur du monde du développement. Ma fascination pour l'innovation technologique a été le moteur de ma transition vers ce domaine.
                                </Typography>
                                <Typography>
                                    Ingénieur Agronome de formation, mon parcours professionnel en tant que premier responsable du système d'information au sein d'une entité ministérielle a renforcé ma passion pour la tech. Cette expérience a contribué à façonner ma compréhension des technologies de l'information et a constitué une base solide pour ma transition vers le développement.
                                </Typography>
                                <Typography>
                                    Je suis ouvert à des collaborations passionnantes et enthousiaste à l'idée d'explorer de nouveaux horizons dans le monde du développement.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Box>
    )
}

export default APropos