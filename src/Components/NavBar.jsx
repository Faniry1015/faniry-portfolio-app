import React, { useEffect, useState } from 'react';
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
    MenuItem
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { blueGrey, teal, lime } from '@mui/material/colors';

function NavBar({ onThemeChange }) {

    const [mode, setMode] = useState(null)

    const sections = [
        { label: 'A propos', id: 'propos' },
        { label: 'Compétences', id: 'competences' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Contact', id: 'contact' }];

    useEffect(() => {
        const ratio = 0.6;
        const windowHeight = window.innerHeight;
        const y = Math.round(windowHeight * ratio);

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const navLinks = document.querySelectorAll('.nav-link');
                    navLinks.forEach((link) => {
                        link.classList.remove('active');
                        link.parentNode.classList.remove('active');
                        if (link.getAttribute('href').slice(1) === sectionId) {
                            link.classList.add('active');
                            link.parentNode.classList.add('active');
                        }
                    });
                }
            });
        }
        const options = { rootMargin: `-${windowHeight - y - 1}px 0px -${y}px 0px` }
        const observer = new IntersectionObserver(callback, options);
        const sections = document.querySelectorAll('.mainSection');

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleThemeToggle = (e) => {
        const activedButton = e.target
        if (e.target.value !== '') {
            onThemeChange(activedButton.value)
            setMode(e.target.value)
        }
    }

    return (<>
        <AppBar position="sticky">
            <Container sx={{ height: 90 }} maxWidth="xl">
                <Toolbar sx={{ height: '100%', }} disableGutters>
                    <Box sx={{ mr: 2, flexGrow: 0, position: 'sticky', top: 0 }}>
                        <IconButton sx={{ p: 2 }}>
                            <Avatar sx={{ width: 125, height: 125, bgcolor: blueGrey[100] }} src="src\assets\images\faniry.png" alt="Faniry R." aria-label='Faniry R.'  />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#propos"
                        sx={{
                            mr: 1,
                            fontSize: '1em',
                            fontWeight: 800,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Faniriantsoa <br /> RANDRIAHARIMINO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' }, justifyContent: 'flex-end' }}>
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
                                <MenuItem key={section.id} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><a href={`#${section.id}`} className="nav-link">{section.label}</a></Typography>
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
                                            <LightModeOutlined fontSize='small'/> Light
                                        </ToggleButton>
                                        <ToggleButton value='dark' aria-label='dark mode' sx={{ color: 'grey' }}>
                                            <DarkModeOutlined fontSize='small'/> Dark
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Box>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', flexGrow: 1, height: '100%' }}>
                        {sections.map((section) => (
                            <Button
                                key={section.id}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 1, px: 2, fontSize: '1em', color: 'white', display: 'block', height: '100%', m: 0, '&:hover': {
                                        backgroundColor: blueGrey[300],
                                    }
                                }}
                            >
                                <a href={`#${section.id}`} className="nav-link active">{section.label}</a>
                            </Button>
                        ))}
                        <Box>
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
        </AppBar>
    </>
    );
}

export default NavBar;
