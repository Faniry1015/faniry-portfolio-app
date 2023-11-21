import React from 'react'
import { Box } from '@mui/system'
import { Typography, Grid, Paper, Stack, useTheme, IconButton, Tooltip } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'
import '../Styles/Competences.css'
import CircularWithValueLabel from './CompetCircularProgress'

function Competences() {
    const theme = useTheme()

    const competPaper = { bgcolor: theme.palette.info.main, p: 3, height: '100%' }

    const competIconStyle = { width: '75px', height: '75px' }

    return (
        <Box component='section' className='mainSection' id='competences'>
            <Paper elevation={4} sx={{ px: 3, py: 4, bgcolor: theme.palette.background.secondary }}>
                <Typography variant='h3'>
                    Mes Compétences
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                    Langages de base
                                </Typography>
                                <Stack direction='row' spacing={2} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Box position='relative'>
                                        <Tooltip title='HTML' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\html-5.svg" alt="HTML" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={80} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='CSS' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\css-3.svg" alt="CSS" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={75} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='Javascript' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\javascript.svg" alt="Javascript" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={65} />
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                    Frameworks et bibliothèques front-end
                                </Typography>
                                <Stack direction='row' spacing={2} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Box position='relative'>
                                        <Tooltip title='React.js' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\reactjs.svg" alt="React.js" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={65   } />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='Material UI' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\mui.svg" alt="Material UI" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={65} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='Bootstrap' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\bootstrap-5.svg" alt="Bootstrap" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={75} />
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                Contrôle de Version
                                </Typography>
                                <Stack direction='row' spacing={2} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Box position='relative'>
                                        <Tooltip title='Git' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\git.svg" alt="Git" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={55} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='GitHub' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\github.svg" alt="GitHub" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={70} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='GitLab' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\gitlab.svg" alt="GitLab" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={40} />
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                CMS et Outils de conception
                                </Typography>
                                <Stack direction='row' spacing={2} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Box position='relative'>
                                        <Tooltip title='Photoshop' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\photoshop.svg" alt="Photoshop" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={60} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='InDesign' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\indesign.svg" alt="InDesign" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={50} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='Figma' arrow> 
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\figma.svg" alt="Figma" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={65} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='Wordpress' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src="src\assets\icons\wordpress.svg" alt="Wordpress" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel  maxValue={40} />
                                    </Box>
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