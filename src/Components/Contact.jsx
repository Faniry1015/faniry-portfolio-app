import React, { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import { Box, Button, Typography, Grid, Paper, useTheme, Container, TextField, FormControlLabel, Checkbox, List, ListItem, ListItemIcon, ListItemText, Divider, } from '@mui/material'
import { Mail, PhoneAndroid } from '@mui/icons-material';
import SocialLinkIcons from './SocialLinkIcons';
import { blueGrey, purple, teal } from '@mui/material/colors';
import InputMask from 'react-input-mask';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase-config';

function Contact() {
    const theme = useTheme()

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-250px 0px',
      }); 

    const defaultFormData = {
        firstname: { value: '', empty: false, required: false },
        lastname: { value: '', empty: false, required: true },
        email: { value: '', empty: false, required: true },
        phone: { value: '', empty: false, required: false },
        subject: { value: '', empty: false, required: true },
        message: { value: '', empty: false, required: true },
        consent: { checked: false, helpIsVisible: false }
    }

    const [values, setValues] = useState(defaultFormData)
    const [popupIsVisible, setPopupIsVisible] = useState(false)

    const contactFormRef = useRef(null)

    const handleChange = (e) => {
        if (e.target.name === 'consent') {
            const consentStatus = e.target.checked
            const currentConsentData = { consent: { checked: consentStatus, helpIsVisible: !consentStatus } }
            setValues({ ...values, ...currentConsentData })
        } else {
            const empty = e.target.value !== '' ? false : true
            const change = { [e.target.name]: { value: e.target.value, empty: empty, required: values[e.target.name].required } }
            setValues({ ...values, ...change })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        for (const fieldName in values) {
            const field = values[fieldName];
            if (field.required && field.value === "") {
                let currentValues = { ...values }
                updateEmptyStatus(currentValues);
                setValues(currentValues)
                console.log('champs obligatoires non remplis')
                return
            }
        }
        if (!values.consent.checked) {
            setValues({ ...values, consent: { checked: false, helpIsVisible: true } })
            console.log('pas de consentement')
            return
        }
        sendMessage()

        // Send mail
    //     emailjs.sendForm('service_zxu10b5', 'template_r8cbyon', infraFormRef.current, 'FZirjPoVeRTkF65GT').then((result) => {
    //         console.log(
    //             "Data sent to firestore, mail sent to faniry"
    //         );
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    //     setValues(defaultFormData)
    //     togglePopupVisibility()
    //     console.log('message sent')
    // 
}

    function updateEmptyStatus(fields) {
        for (const fieldName in fields) {
            const field = fields[fieldName];

            if (field.required && field.value === "") {
                fields[fieldName].empty = true;
            } else {
                fields[fieldName].empty = false;
            }
        }
    }

    const { firstname, lastname, email, phone, subject, message, consent } = values

    const sendMessage = async () => {
        const date = new Date()
        const timestamp = date.getTime().toString()
        await setDoc(doc(db, 'messages', timestamp), {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            phone: phone.value,
            subject: subject.value,
            message: message.value,
            consent: consent.checked,
            date: date
        });
    }

    const togglePopupVisibility = () => {
        const changeVisibility = !popupIsVisible
        setPopupIsVisible(changeVisibility)
    }

    const requiredTextHelper = 'Champ obligatoire'

    return (
        <>
            <Box component='section' className='mainSection' id='contact' ref={ref}>
                <Paper elevation={4} sx={{ px: 4, py: 6, bgcolor: theme.palette.background.secondary }}>
                    <Typography variant='h3'>
                        Me contacter
                    </Typography>
                    <Container component="main" maxWidth='md' className={`zoom-in ${inView ? 'active' : ''}`}>
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
            {popupIsVisible && <Paper sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: window.innerHeight - 50,
                width: window.innerWidth - 50,
                bgcolor: theme.palette.primary.dark,
                zIndex: 10000,
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
                onClick={() => togglePopupVisibility()}
                elevation={24} >
                <Box sx={{maxWidth: 'sm'}}>
                    <Typography variant='h1' sx={{ margin: 3, textAlign: 'center', color: teal['A700'] }}>
                        Merci pour votre message !
                    </Typography>
                    <Typography sx={{ margin: 3, textAlign: 'center', color: blueGrey[100] }}>
                        Soyez assuré(e) que je m'emploierai à vous répondre dans les plus brefs délais. En attendant, je vous invite à explorer mon portfolio pour en savoir plus sur mon travail.
                    </Typography>
                </Box>
            </Paper >}

        </>
    )
}

export default Contact