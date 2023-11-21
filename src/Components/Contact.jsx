import React from 'react'
import { Box, Button, Stack, Typography, Grid, Paper, useTheme, Container, TextField, FormControlLabel, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { Mail, PhoneAndroid, Home } from '@mui/icons-material';
import SocialLinkIcons from './SocialLinkIcons';
import { purple } from '@mui/material/colors';

function Contact() {
    const theme = useTheme()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Box component='section' className='mainSection' id='contact'>
            <Paper elevation={4} sx={{ px: 3, py: 4, bgcolor: theme.palette.background.secondary }}>
                <Typography variant='h3'>
                    Me contacter
                </Typography>
                <Container component="main" maxWidth='md'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6} component="form" noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Prénom"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Nom"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Adresse mail"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="subject"
                                        label="Objet"
                                        id="subject"
                                        autoComplete="subject"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="details"
                                            label="Message"
                                            id="details"
                                            autoComplete="details"
                                            multiline
                                            rows={5}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations."
                                            sx={{
                                                my: 1,
                                                '& .MuiFormControlLabel-label': {
                                                    fontSize: '0.7em'
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Box style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Envoyer
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant='subtitle2' align='center'>Vous pouvez également me retrouver sur :</Typography>
                            <Box sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
                                <SocialLinkIcons />
                            </Box>
                            <Divider variant='middle' sx={{ bgcolor: purple[200], my: 1 }} />
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <List>
                                    <ListItem>
                                            <ListItemIcon>
                                                <Mail />
                                            </ListItemIcon>
                                            <ListItemText primary="frandriaharimino@yahoo.com" />
                                    </ListItem>
                                    <ListItem>
                                            <ListItemIcon>
                                                <PhoneAndroid />
                                            </ListItemIcon>
                                            <ListItemText primary="+261 34 08 717 66" />
                                    </ListItem>
                                </List>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Box >
    )
}

export default Contact