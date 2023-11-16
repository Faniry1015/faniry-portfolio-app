import React from 'react'
import { Box, Stack } from '@mui/system'
import { Typography, Grid, Paper, IconButton, useTheme } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'

function APropos() {
    const theme = useTheme()
    return (
        <Box component='section'>
            <Paper elevation={4} sx={{p:4, bgcolor: theme.palette.background.secondary}}>
                <Typography variant='h3' id='propos'>
                    A propos de moi
                </Typography>
                <Grid container spacing={0} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={5} display={{ xs: 'none', md: 'block' }}>
                        <Box><img src="src\assets\images\webdevVector.png" alt="web developer" style={{ maxWidth: '100%' }} /></Box>
                        <Stack direction='row' spacing={0}>
                            <IconButton aria-label='gitHub' href='https://github.com/Faniry1015'>
                                <GitHub color='info' />
                            </IconButton>
                            <IconButton aria-label='gitHub' href='https://www.linkedin.com/in/faniriantsoa/'>
                                <LinkedIn />
                            </IconButton>
                        </Stack>
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