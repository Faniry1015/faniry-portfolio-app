import React, { useState } from 'react'
import { Box, Button, Typography, Grid, Paper, useTheme, Container, TextField, FormControlLabel, Checkbox, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { Mail, PhoneAndroid } from '@mui/icons-material';
import SocialLinkIcons from './SocialLinkIcons';
import { purple } from '@mui/material/colors';
import InputMask from 'react-input-mask';

function Contact() {
    const [values, setValues] = useState({
        firstname: { value: '', empty: false, required: false },
        lastname: { value: '', empty: false, required: true },
        email: { value: '', empty: false, required: true },
        phone: { value: '', empty: false, required: false },
        subject: { value: '', empty: false, required: true },
        message: { value: '', empty: false, required: true },
        consent: { checked: false, helpIsVisible: false }
    })

    const requiredTextHelper = 'Champ obligatoire'

    const handleChange = (e) => {
        if (e.target.name === 'consent') {
            const consentStatus = e.target.checked
            const currentConsentData = { consent: { checked: consentStatus, helpIsVisible: !consentStatus } }
            setValues({ ...values, ...currentConsentData })
        } else {
            const empty = e.target.value !== '' ? false : true
            const change = { [e.target.name]: {value: e.target.value, empty: empty, required: values[e.target.name].required  } }
            setValues({ ...values, ...change })
        }
        console.log(values)
    }

    const theme = useTheme()

    const handleSubmit = (event) => {
        event.preventDefault();
        let currentValues = { ...values }
        updateEmptyStatus(currentValues);
        console.log(currentValues)
        setValues(currentValues)
    }

    function updateEmptyStatus(fields) {
        for (const fieldName in fields) {
            if (fields.hasOwnProperty(fieldName)) {
                const field = fields[fieldName];
    
                if (field.required && field.value === "") {
                    fields[fieldName].empty = true;
                } else {
                    fields[fieldName].empty = false;
                }
                
                if(!field.checked) {
                    fields[fieldName].helpIsVisible = true
                } else {
                    fields[fieldName].helpIsVisible = false;
                }
            }
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
                                        fullWidth
                                        id="firstname"
                                        label="Prénom"
                                        value={firstname.value}
                                        onChange={handleChange}
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
                                        error={lastname.empty}
                                        helperText={lastname.empty ? requiredTextHelper : null}
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
                                        error={email.empty}
                                        helperText={email.empty ? requiredTextHelper : null}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputMask mask="+999 99 99 999 99" maskChar="_" value={phone.value} onChange={handleChange}>
                                        {() => (
                                            <TextField
                                                fullWidth
                                                id="phone"
                                                label="Téléphone"
                                                name="phone"
                                                autoComplete="phone"
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
                                        error={subject.empty}
                                        helperText={subject.empty ? requiredTextHelper : null}
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
                                            error={message.empty}
                                            helperText={message.empty ? requiredTextHelper : null}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox name='consent' checked={consent.checked} required onChange={handleChange} color="primary" />}
                                            label="En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations."
                                            sx={{
                                                my: 1,
                                                '& .MuiFormControlLabel-label': {
                                                    fontSize: '0.7em'
                                                }
                                            }}
                                        />
                                        {consent.helpIsVisible && <Box><Typography variant='caption' color='red' sx={{ position: 'absolute' }} >Cochez la case pour donner votre consentement.</Typography></Box>}
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