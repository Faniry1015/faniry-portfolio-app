import React, { useState } from 'react'
import { Box, Button, Typography, Grid, Paper, useTheme, Container, TextField, FormControlLabel, Checkbox, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { Mail, PhoneAndroid } from '@mui/icons-material';
import SocialLinkIcons from './SocialLinkIcons';
import { purple } from '@mui/material/colors';
import InputMask from 'react-input-mask';

function Contact() {
    const [values, setValues] = useState({
        firstname: { value: '', error: false },
        lastname: { value: '', error: false },
        email: { value: '', error: false },
        phone: { value: '', error: false },
        subject: { value: '', error: false },
        message: { value: '', error: false },
        consent: false
    })

    const requiredTextHelper = 'Champ obligatoire'

    const handleChange = (e) => {
        if (e.target.name === 'consent') {
            setValues({ ...values, consent: !consent })
        } else {
            const error = e.target.value !== '' ? false : true
            const change = { [e.target.name]: { value: e.target.value, error: error } }
            setValues({ ...values, ...change })
        }
        console.log(values)
    }

    const theme = useTheme()

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.consent) {
            let valuesArray = Object.values(values).map(entry => entry.value)
            valuesArray.pop()
            console.log(valuesArray)
        }

    }

    const { firstname, lastname, email, phone, subject, message, consent } = values

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
                                        name="firstname"
                                        required
                                        fullWidth
                                        id="firstname"
                                        label="Prénom"
                                        autoFocus
                                        value={firstname.value}
                                        onChange={handleChange}
                                        error={firstname.error}
                                        helperText={firstname.error ? requiredTextHelper : null}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastname"
                                        label="Nom"
                                        name="lastname"
                                        autoComplete="family-name"
                                        value={lastname.value}
                                        onChange={handleChange}
                                        error={lastname.error}
                                        helperText={lastname.error ? requiredTextHelper : null}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="mail"
                                        label="Adresse mail"
                                        name="email"
                                        autoComplete="email"
                                        value={email.value}
                                        onChange={handleChange}
                                        error={email.error}
                                        helperText={email.error ? requiredTextHelper : null}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputMask mask="+999 99 99 999 99" maskChar="_" value={phone.value} onChange={handleChange}>
                                        {() => (
                                            <TextField
                                                required
                                                fullWidth
                                                id="phone"
                                                label="Téléphone"
                                                name="phone"
                                                autoComplete="phone"
                                                error={phone.error}
                                                helperText={phone.error ? requiredTextHelper : null}
                                                placeholder="+1 (123) 456-7890"
                                            />
                                        )}
                                    </InputMask>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="subject"
                                        label="Objet"
                                        id="subject"
                                        autoComplete="subject"
                                        value={subject.value}
                                        onChange={handleChange}
                                        error={subject.error}
                                        helperText={subject.error ? requiredTextHelper : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="message"
                                            label="Message"
                                            id="message"
                                            autoComplete="details"
                                            multiline
                                            rows={5}
                                            value={message.value}
                                            onChange={handleChange}
                                            error={message.error}
                                            helperText={message.error ? requiredTextHelper : null}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox name='consent' checked={consent} onChange={handleChange} color="primary" />}
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