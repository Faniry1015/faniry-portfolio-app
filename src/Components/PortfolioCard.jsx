import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { Box, Link, Paper, Chip, Stack, Divider, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link';
import { purple } from '@mui/material/colors';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function PortfolioCard({ title, category, context, techs, link, githubRepo, img, description }) {
    const theme = useTheme()

    const [expanded, setExpanded] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: '-75px 0px'
    });

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box ref={ref} className={`zoom-in ${inView ? 'active' : ''}`}>
            <Card sx={{ maxWidth: 400, height: 'fit-content' }} >
                <Box position='relative' sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Paper sx={{ opacity: 0, '&:hover': { opacity: 0.9, transition: 'opacity 0.4s ease-in-out' }, position: 'absolute', zIndex: 10, width: 'calc(100% - 5px)', height: 'calc(100% - 5px)', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: theme.palette.info.main }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                            <Box sx={{ '&:hover': { transform: 'scale(1.2)' } }}>
                                <Link variant='body1' textAlign='center' underline='none' sx={{ color: theme.palette.text.secondary, }} href={link}>
                                    <LinkIcon fontSize='small' color='secondary' sx={{ mx: 1 }} />{title}
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                                {techs.map((tech) => {
                                    return <Chip key={techs.indexOf(tech)} label={tech} size='small' sx={{
                                        m: '5px', bgcolor: theme.palette.success.main, color: theme.palette.text.secondary, fontSize: '0.8em', '&:hover': {
                                            transform: 'scale(1.1)',
                                        },
                                    }} />
                                })}
                            </Box>
                        </CardContent>
                    </Paper>
                    <CardMedia
                        component='img'
                        width='100%'
                        image={img}
                        alt={title}
                    />
                </Box>
                <CardActions disableSpacing>
                    <Box>
                        <Typography variant='subtitle2' textAlign='center' underline='none' sx={{ color: theme.palette.text.secondary, }}>
                            {title}
                        </Typography>
                    </Box>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Stack orientation='vertical'>
                            <Divider variant="middle" sx={{ bgcolor: purple[200], my: 1 }} />
                            <Typography variant='body2'>
                                <strong>Technologies :</strong> {techs.map((tech) => {
                                    return `${tech}, `
                                })}
                            </Typography>
                            <Typography variant='body2'>
                                <strong>Context :</strong> {context}
                            </Typography>
                            <Typography variant='body2'>
                                <strong>Desciption :</strong> {description}
                            </Typography>
                            <Button href={link} variant='contained' size='small' sx={{ my: 1 }}>
                                {category === 'front' ? 'visiter' : 'voir'}
                            </Button>
                        </Stack>
                    </CardContent>
                </Collapse>
            </Card >
        </Box>
    );
}

export default PortfolioCard
