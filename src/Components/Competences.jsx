import React from 'react'
import { Box } from '@mui/system'
import { useInView } from 'react-intersection-observer'
import { Typography, Grid, Paper, Stack, useTheme, IconButton, Tooltip } from '@mui/material'
import '../Styles/Competences.css'
import CircularWithValueLabel from './CompetCircularProgress'
import html5 from '../assets/icons/html-5.svg'
import css3 from "../assets/icons/css-3.svg"
import javascript from "../assets/icons/javascript.svg"
import react from "../assets/icons/reactjs.svg"
import reactNative from "../assets/icons/react-native.svg"
import mui from "../assets/icons/mui.svg"
import reactLeaflet from "../assets/icons/react-leaflet.svg"
import git from "../assets/icons/git.svg"
import github from "../assets/icons/github.svg"
import gitlab from "../assets/icons/gitlab.svg"
import photoshop from "../assets/icons/photoshop.svg"
import indesign from "../assets/icons/indesign.svg"
import figma from "../assets/icons/figma.svg"
import wordpress from "../assets/icons/wordpress.svg"
import firebase from '../assets/icons/firebase.svg'

function Competences() {

    const inViewOptions = {
        triggerOnce: false,
        rootMargin: '-75px 0px'
    }

    const [ref1, inView1] = useInView(inViewOptions)
    const [ref2, inView2] = useInView(inViewOptions)
    const [ref3, inView3] = useInView(inViewOptions)
    const [ref4, inView4] = useInView(inViewOptions)

    const theme = useTheme()

    const competPaper = { bgcolor: theme.palette.info.main, px: 4, py: 6, height: '100%' }

    const competIconStyle = { width: '75px', height: '75px' }

    return (
        <Box component='section' className='mainSection' id='competences'>
            <Paper elevation={4} sx={{ py: 7, px: 4, bgcolor: theme.palette.background.secondary }} >
                <Typography variant='h3'>
                    Mes Compétences
                </Typography>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} ref={ref1} className={`zoom-in ${inView1 ? 'active' : ''}`}>
                            <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                    Langages de base
                                </Typography>
                                <Stack direction='row' spacing={6} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Box position='relative'>
                                        <Tooltip title='HTML' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={html5} alt="HTML" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={80} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='CSS' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={css3} alt="CSS" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={75} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='Javascript' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={javascript} alt="Javascript" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={65} />
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6} ref={ref2} className={`zoom-in ${inView2 ? 'active' : ''}`}>
                            <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                    Frameworks et bibliothèques front-end
                                </Typography>
                                <Stack direction='row' spacing={6} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Box position='relative'>
                                        <Tooltip title='React.js' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={react} alt="React.js" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={75} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='React Native' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={reactNative} alt="React Native" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={50} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='Material UI' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={mui} alt="Material UI" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={80} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='React Leaflet' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={reactLeaflet} alt="React Leaflet" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={70} />
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6} ref={ref3} className={`zoom-in ${inView3 ? 'active' : ''}`}>
                            <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                    Plate-forme Backend-as-Service (Bass) et contrôle de Version
                                </Typography>
                                <Stack direction='row' spacing={6} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Box position='relative'>
                                        <Tooltip title='Firebase' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={firebase} alt="Firebase" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={75} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='Git' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={git} alt="Git" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={65} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='GitHub' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={github} alt="GitHub" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={70} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='GitLab' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={gitlab} alt="GitLab" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={40} />
                                    </Box>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6} ref={ref4} className={`zoom-in ${inView4 ? 'active' : ''}`}>
                            <Paper sx={competPaper}>
                                <Typography variant='h4'>
                                    CMS et Outils de design
                                </Typography>
                                <Stack direction='row' spacing={6} justifyContent="center" useFlexGap flexWrap="wrap">
                                    <Box position='relative'>
                                        <Tooltip title='Photoshop' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={photoshop} alt="Photoshop" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={60} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='InDesign' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={indesign} alt="InDesign" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={50} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='Figma' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={figma} alt="Figma" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={65} />
                                    </Box>
                                    <Box position='relative'>
                                        <Tooltip title='Wordpress' arrow>
                                            <IconButton sx={competIconStyle}>
                                                <img className='competIcon' src={wordpress} alt="Wordpress" />
                                            </IconButton>
                                        </Tooltip>
                                        <CircularWithValueLabel maxValue={40} />
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