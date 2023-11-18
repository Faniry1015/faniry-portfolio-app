import { Box } from '@mui/system'
import { Typography, Grid, Paper, Stack, useTheme, Card, CardActions, CardContent, Button, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { blueGrey, grey } from '@mui/material/colors'
import '../Styles/Competences.css'

function Competences() {

    const theme = useTheme()

    const competPaper = { bgcolor: theme.palette.mode === 'dark' ? blueGrey[800] : grey[100], p: 3 }

    const competIconStyle = {width: '75px', height: '75px'}

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
                                <Stack direction='row' spacing={1} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Tooltip title='HTML'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\html-5.svg" alt="HTML"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='CSS'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\css-3.svg" alt="CSS"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Javascript'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\javascript.svg" alt="Javascript"/>
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                Frameworks et bibliothèques front-end :
                                </Typography>
                                <Stack direction='row' spacing={1} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Tooltip title='React.js'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\reactjs.svg" alt="React.js"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Material UI'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\mui.svg" alt="Material UI"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Bootstrap'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\bootstrap-5.svg" alt="Bootstrap"/>
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            </Paper>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                    Langages de base :
                                </Typography>
                                <Stack direction='row' spacing={1} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Tooltip title='HTML'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\html-5.svg" alt="HTML"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='CSS'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\css-3.svg" alt="CSS"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Javascript'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\javascript.svg" alt="Javascript"/>
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                Frameworks et bibliothèques front-end :
                                </Typography>
                                <Stack direction='row' spacing={1} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Tooltip title='React.js'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\reactjs.svg" alt="React.js"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Material UI'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\mui.svg" alt="Material UI"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Bootstrap'>
                                    <IconButton sx={competIconStyle}>
                                        <img className='competIcon' src="src\assets\icons\bootstrap-5.svg" alt="Bootstrap"/>
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box >
    )
}

export default Competences