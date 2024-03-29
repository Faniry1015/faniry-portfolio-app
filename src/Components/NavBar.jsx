import React, { useEffect, useState } from 'react';
import { scrollTo } from './scrollTo';
import '../Styles/NavBar.css'
import {
    AppBar,
    Menu,
    Container,
    Button,
    ToggleButtonGroup,
    ToggleButton,
    Typography,
    IconButton,
    Toolbar,
    Box,
    Avatar,
    MenuItem,
    useTheme,
    useMediaQuery,
    ButtonGroup
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { blueGrey, teal, lime } from '@mui/material/colors';
import faniry from "../assets/images/faniry.png"

function NavBar({ onThemeChange }) {
    const [mode, setMode] = useState(null)

    const theme = useTheme();
    const mdScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleThemeToggle = (e) => {
        const activedButton = e.target
        if (e.target.value !== '') {
            onThemeChange(activedButton.value)
            setMode(e.target.value)
        }
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    //Scroll spy pour les sections
    const sections = [
        { label: 'A propos', id: 'propos' },
        { label: 'Compétences', id: 'competences' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Contact', id: 'contact' }];

    useEffect(() => {
        const ratio = 0.5;
        const mainSections = document.querySelectorAll('.mainSection');
        let windowHeight = window.innerHeight;
        const y = Math.round(windowHeight * ratio);

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const navLinks = document.querySelectorAll('.nav-link');
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                        link.parentNode.classList.remove('active');
                        if (link.id.slice(2) === sectionId) {
                            link.classList.add('active');
                            link.parentNode.classList.add('active');
                        }
                    });
                }
            });
        }

        let observe = function (elements) {
            const options = { rootMargin: `-${windowHeight - y - 100}px 0px -${y}px 0px` } // en lecture seule donc ne se met pas à jour quand on redimmentionne la fenêtre
            const observer = new IntersectionObserver(callback, options);

            mainSections.forEach((section) => {
                observer.observe(section);
            });
        }


        // Permet de ne pas appelé la fonction trop de fois (ex: listener "resize")
        const debounce = function (callback, delay) {
            let timer;
            return function () {
                let args = arguments;
                let context = this;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    callback.apply(context, args);
                }, delay)
            }
        }

        if (mainSections.length > 0) {
            observe(mainSections)
            window.addEventListener("resize", debounce(function () {
                if (window.innerHeight !== windowHeight) {
                    observe(mainSections)
                    windowHeight = window.innerHeight
                }
            }), 500)
        }

        return () => {
            observe = null
        };
    }, []);

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    return (<>
        <AppBar position="sticky">
            <Container sx={{ height: 90 }} maxWidth="xl">
                <Toolbar sx={{ height: '100%', }} disableGutters>
                    <Box sx={{ mr: 1, flexGrow: 0, }}>
                        <IconButton sx={{ p: 2 }}>
                            <Avatar sx={{ width: 80, height: 80, bgcolor: blueGrey[100] }} src={faniry} alt="Faniry R." aria-label='Faniry R.' />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#propos"
                        sx={{
                            mr: 1,
                            fontSize: mdScreen ? '0.7em' : '1em',
                            fontWeight: 800,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Faniriantsoa <br /> RANDRIAHARIMINO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { md: 'block', lg: 'none' },
                            }}
                        >
                            {sections.map((section) => (
                                <MenuItem key={section.id} onClick={
                                    () => {
                                        scrollTo(section.id)
                                        handleCloseNavMenu
                                    }
                                }>
                                    <Typography component='a' textAlign="center" className="nav-link">{section.label}</Typography>
                                </MenuItem>

                            ))}
                            <MenuItem>
                                <Box>
                                    <Typography variant='h6' sx={{ color: 'grey' }}>Mode</Typography>
                                    <ToggleButtonGroup
                                        variant='contained'
                                        size='small'
                                        aria-label="app dark/light mode"
                                        value={mode}
                                        onChange={handleThemeToggle}
                                        exclusive
                                    >
                                        <ToggleButton value='light' aria-label='light mode' sx={{ color: teal[300], '&.Mui-selected': { color: teal[500] } }}>
                                            <LightModeOutlined fontSize='small' /> Light
                                        </ToggleButton>
                                        <ToggleButton value='dark' aria-label='dark mode' sx={{ color: 'grey' }}>
                                            <DarkModeOutlined fontSize='small' /> Dark
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
                        <ButtonGroup   variant='text'  size='large' sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                            {sections.map((section) => (
                                <Button
                                    key={section.id}
                                    onClick={() => {
                                        scrollTo(section.id)
                                    }}
                                    sx={{
                                        my: 1, px: 2, fontSize: '1em', color: 'white', height: '70%', '&:hover': {
                                            backgroundColor: blueGrey[300],
                                        }
                                    }}
                                >
                                    <Typography component='a' className="nav-link active" id={`my${section.id}`}  >{section.label}</Typography>
                                </Button>
                            ))}
                        </ButtonGroup>
                        <Box sx={{ mx: 1 }}>
                            <Typography variant='h6' sx={{ textAlign: 'center', color: blueGrey[200], fontSize: '1em' }}>MODE</Typography>
                            <ToggleButtonGroup
                                variant='contained'
                                size='small'
                                aria-label="app dark/light mode"
                                value={mode}
                                onChange={handleThemeToggle}
                                exclusive
                            >
                                <ToggleButton value='light' aria-label='light mode' sx={{ color: lime[300], '&.Mui-selected': { color: lime[500] } }}>
                                    <LightModeOutlined fontSize='small' /> Light
                                </ToggleButton>
                                <ToggleButton value='dark' aria-label='dark mode' style={{ color: 'grey' }}>
                                    <DarkModeOutlined fontSize='small' /> Dark
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    </>
    );
}

export default NavBar;
