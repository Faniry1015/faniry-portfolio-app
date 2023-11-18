import { Box } from '@mui/system'
import { Typography, Grid, Paper, useTheme, Card, CardActions, CardContent, Button } from '@mui/material'
import React from 'react'
import { blueGrey } from '@mui/material/colors'

function Competences() {

    const theme = useTheme()

    const competPaper = { bgcolor: theme.palette.mode === 'dark' ? blueGrey[800] : blueGrey[100], p: 3 }

    return (
        <Box component='section'>
            <Paper elevation={4} sx={{ p: 4, bgcolor: theme.palette.background.secondary }}>
                <Typography variant='h3' id='competences'>
                    Mes Compétences
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                    Langages de base :
                                </Typography>

                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper>Langages :</Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box >
    )
}

export default Competences