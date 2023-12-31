import React from 'react'
import { Stack, Link, SvgIcon } from '@mui/material'
import { GitHub, LinkedIn, FacebookSharp } from '@mui/icons-material'
import { blue } from '@mui/material/colors'

function SocialLinkIcons() {
    return (
        <Stack direction='row' spacing={2} sx={{ display: 'flex', justifyContent: 'right' }}>
            <Link aria-label='gitHub' href='https://github.com/Faniry1015'>
                <GitHub sx={{
                    color: '#000',
                    '&:hover': {
                        transform: 'scale(1.2)',
                    },
                }} />
            </Link>
            <Link aria-label='gitHub' href='https://www.linkedin.com/in/faniriantsoa/'>
                <LinkedIn sx={{
                    color: blue[800],
                    '&:hover': {
                        transform: 'scale(1.2)',
                    },
                }} />
            </Link>
            <Link aria-label='upwork' href='https://www.upwork.com/freelancers/~01102a92181a915985'>
                <SvgIcon sx={{
                    '&:hover': {
                        transform: 'scale(1.2)',
                    },
                }}>
                    {/* Upwork Icon */}
                    <svg height="2500" viewBox=".26 -.21 500 500" width="2498" xmlns="http://www.w3.org/2000/svg"><path d="m92.38-.21c-50.88 0-92.12 41.44-92.12 92.56v314.88c0 51.12 41.25 92.56 92.13 92.56h315.74c50.88 0 92.13-41.44 92.13-92.56v-314.88c0-51.12-41.25-92.56-92.13-92.56h-315.75z" fill="#14a800" /><path d="m359.92 303.51c-31.11 0-51.69-24.01-57.45-33.35 7.36-59.01 28.93-77.61 57.45-77.61 28.18 0 50.13 22.53 50.13 55.48s-21.95 55.48-50.13 55.48m0-147.18c-50.71 0-79.13 33.07-87.25 67.12-9.24-17.34-16.04-40.54-21.4-62.1h-70.09v87.24c0 31.7-14.38 55.07-42.59 55.07s-44.37-23.37-44.37-55.06l.3-87.25h-40.4v87.24c0 25.47 8.26 48.56 23.26 65.04 15.48 16.98 36.64 25.95 61.19 25.95 48.78 0 82.81-37.41 82.81-90.96v-58.62c5.14 19.29 17.2 56.39 40.41 88.92l-21.68 123.44h41.08l14.31-87.52c4.7 3.89 9.68 7.41 14.9 10.55a90.604 90.604 0 0 0 45.69 14.09h.08c1.21 0 2.44.07 3.69.07 50.29 0 90.34-38.94 90.34-91.43.01-52.52-40-91.79-90.28-91.79" fill="#fff" /></svg>
                </SvgIcon>
            </Link>
            <Link aria-label='facebook' href='https://web.facebook.com/rfaniriantsoa/'>
                <FacebookSharp sx={{
                    color: blue[600],
                    '&:hover': {
                        transform: 'scale(1.2)',
                    },
                }} />
            </Link>
        </Stack>
    )
}

export default SocialLinkIcons