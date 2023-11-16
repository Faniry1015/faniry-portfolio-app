import { Box } from '@mui/system'
import { Typography, Grid, Paper, useTheme, Card, CardActions, CardContent, Button } from '@mui/material'
import React from 'react'

function Competences() {
    const theme = useTheme()
    return (
        <Box component='section'>
            <Paper elevation={4} sx={{ p: 4, bgcolor: theme.palette.background.secondary }}>
                <Typography variant='h3' id='competences'>
                    Mes Compétences
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                            Bonjour
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Typography>
            </Paper>
        </Box >
    )
}

export default Competences