import React, { useEffect, useState } from 'react';
import '../Styles/NavBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { blueGrey } from '@mui/material/colors';
import { Switch, FormControlLabel, FormGroup } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

function NavBar({ onThemeChange, isDarkMode }) {
    const [mode, setMode] = useState('light')

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
        onThemeChange(activedButton.id)
        const elementActived = document.querySelectorAll('.activeMode')
        elementActived.forEach(element => element.classList.remove('activeMode'))
        activedButton.classList.add('activeMode')

    }

    return (<>
        <AppBar position="sticky">
            <Container sx={{ height: 100 }} maxWidth="xxl">
                <Toolbar sx={{ height: '100%' }} disableGutters>
                    <Box sx={{ mr: 2, flexGrow: 0 }}>
                        <IconButton sx={{ p: 2 }}>
                            <Avatar sx={{ width: 125, height: 125, bgcolor: blueGrey[100] }} alt="Faniry R." src="src\assets\images\faniry.png" />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Faniriantsoa <br /> RANDRIAHARIMINO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {sections.map((section) => (
                                <MenuItem key={section.id} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><a href={`#${section.id}`} className="nav-link">{section.label}</a></Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', flexGrow: 1, height: '100%' }}>
                        {sections.map((section) => (
                            <Button
                                key={section.id}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2, px: 5, fontSize: '1em', color: 'white', display: 'block', height: '100%', m: 0, '&:hover': {
                                        backgroundColor: blueGrey[300],
                                    }
                                }}
                            >
                                <a href={`#${section.id}`} className="nav-link active">{section.label}</a>
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <ButtonGroup
                            disableElevation
                            variant="outlined"
                            aria-label="outlined primary button group"
                        >
                            <Button id='light' className='activeMode' style={{ color: 'yellow' }}onClick={handleThemeToggle} startIcon={<LightModeOutlined />}>Light</Button>
                            <Button id='dark' style={{ color: 'grey' }} onClick={handleThemeToggle} startIcon={<DarkModeOutlined />}>Dark</Button>
                        </ButtonGroup>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    </>
    );
}

export default NavBar;
