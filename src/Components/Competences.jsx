import React from 'react';
import { Box } from '@mui/system';
import { useInView } from 'react-intersection-observer';
import { Typography, Grid, Paper, Stack, useTheme } from '@mui/material';
import '../Styles/Competences.css';
import CompetenceItem from './CompetenceItem';
import html5 from '../assets/icons/html-5.svg';
import css3 from "../assets/icons/css-3.svg";
import javascript from "../assets/icons/javascript.svg";
import typescript from "../assets/icons/typescript.svg";
import dart from "../assets/icons/dart.svg";
import python from "../assets/icons/python.svg";
import react from "../assets/icons/reactjs.svg";
import nextjs from "../assets/icons/nextjs.svg";
import reactNative from "../assets/icons/react-native.svg";
import mui from "../assets/icons/mui.svg";
import reactLeaflet from "../assets/icons/react-leaflet.svg";
import flutter from "../assets/icons/flutter.svg";
import nodejs from "../assets/icons/node-js.svg";
import sqlite from "../assets/icons/sqlite.svg";
import fastify from "../assets/icons/fastify.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import gitlab from "../assets/icons/gitlab.svg";
import photoshop from "../assets/icons/photoshop.svg";
import indesign from "../assets/icons/indesign.svg";
import figma from "../assets/icons/figma.svg";
import wordpress from "../assets/icons/wordpress.svg";
import firebase from '../assets/icons/firebase.svg';

function Competences() {
    const inViewOptions = {
        triggerOnce: false,
        rootMargin: '-75px 0px',
    };

    const [ref1, inView1] = useInView(inViewOptions);
    const [ref2, inView2] = useInView(inViewOptions);
    const [ref3, inView3] = useInView(inViewOptions);
    const [ref4, inView4] = useInView(inViewOptions);
    const [ref5, inView5] = useInView(inViewOptions);

    const theme = useTheme();
    const competPaper = { bgcolor: theme.palette.info.main, px: 4, py: 6, height: '100%' };
    const competIconStyle = { width: '75px', height: '75px' };

    const skills = [
        {
            category: 'Langages de base',
            items: [
                { title: 'HTML', iconSrc: html5, maxValue: 85 },
                { title: 'CSS', iconSrc: css3, maxValue: 75 },
                { title: 'Javascript', iconSrc: javascript, maxValue: 80 },
                { title: 'Typescript', iconSrc: typescript, maxValue: 65 },
                { title: 'Dart', iconSrc: dart, maxValue: 70 },
                { title: 'Python', iconSrc: python, maxValue: 50 },
            ],
        },
        {
            category: 'Frameworks et bibliothèques front-end',
            items: [
                { title: 'React.js', iconSrc: react, maxValue: 85 },
                { title: 'React Native', iconSrc: reactNative, maxValue: 50 },
                { title: 'Next.js', iconSrc: nextjs, maxValue: 75 },
                { title: 'Material UI', iconSrc: mui, maxValue: 85 },
                { title: 'React Leaflet', iconSrc: reactLeaflet, maxValue: 80 },
                { title: 'Flutter', iconSrc: flutter, maxValue: 75 },
            ],
        },
        {
            category: 'Back-end et Base de données',
            items: [
                { title: 'Node.js', iconSrc: nodejs, maxValue: 60 },
                { tittle: 'Sqlite', iconSrc: sqlite, maxValue: 50 },
                { title: 'Fastify', iconSrc: fastify, maxValue: 40 },
                { title: 'Firebase', iconSrc: firebase, maxValue: 80 },
            ]
        },
        {
            category: 'Contrôle de versions',
            items: [
                { title: 'Git', iconSrc: git, maxValue: 65 },
                { title: 'GitHub', iconSrc: github, maxValue: 70 },
                { title: 'GitLab', iconSrc: gitlab, maxValue: 40 },
            ],
        },
        {
            category: 'CMS et Outils de design',
            items: [
                { title: 'Photoshop', iconSrc: photoshop, maxValue: 60 },
                { title: 'InDesign', iconSrc: indesign, maxValue: 50 },
                { title: 'Figma', iconSrc: figma, maxValue: 65 },
                { title: 'Wordpress', iconSrc: wordpress, maxValue: 50 },
            ],
        },
    ];

    return (
        <Box component="section" className="mainSection" id="competences">
            <Paper elevation={4} sx={{ py: 7, px: 4, bgcolor: theme.palette.background.secondary }}>
                <Typography variant="h3">Mes Compétences</Typography>
                <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                        {skills.map((skill, index) => (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                ref={[ref1, ref2, ref3, ref4, ref5][index]}
                                className={`zoom-in ${[inView1, inView2, inView3, inView4, inView5][index] ? 'active' : ''}`}
                                key={index}
                            >
                                <Paper sx={competPaper}>
                                    <Typography variant="h4">{skill.category}</Typography>
                                    <Stack direction="row" spacing={6} justifyContent="center" useFlexGap flexWrap="wrap">
                                        {skill.items.map((item, idx) => (
                                            <CompetenceItem
                                                key={idx}
                                                title={item.title}
                                                iconSrc={item.iconSrc}
                                                maxValue={item.maxValue}
                                                iconStyle={competIconStyle}
                                            />
                                        ))}
                                    </Stack>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
}

export default Competences;
