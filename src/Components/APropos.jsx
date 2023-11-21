import React from 'react'
import { Box } from '@mui/system'
import { Typography, Grid, Paper, useTheme } from '@mui/material'
import SocialLinkIcons from './SocialLinkIcons'

function APropos() {
    const theme = useTheme()
    return (
        <Box component='section' className='mainSection' id='propos'>
            <Paper elevation={4} sx={{ p: 4, bgcolor: theme.palette.background.secondary }}>
                <Typography variant='h3'>
                    A propos de moi
                </Typography>
                <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={5} display={{ xs: 'none', md: 'block' }}>
                        <Box><img src="src\assets\images\webdevVector.png" alt="web developer" style={{ maxWidth: '100%' }} /></Box>
                        <Box sx={{ marginRight: '20px' }}>
                            <SocialLinkIcons />
                        </Box>
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
            </Paper>
        </Box>
    )
}

export default APropos