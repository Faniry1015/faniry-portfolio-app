import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Box, useTheme } from '@mui/material';
import '../Styles/Loader.css'

function Loader({ loaderEffect }) {
    const theme = useTheme()

    const loaderRef = useRef(null)

    useEffect(() => {
        if (loaderEffect) {
            loaderRef.current.classList.add('disapear')
        }
    }, [loaderEffect])

    return <Box width={'100%'} height={'100%'} sx={{ bgcolor: theme.palette.primary.light }}>
        <Box class="loader-wrapper" ref={loaderRef}>
            <Box class="loader">
                <Box class="roller"></Box>
                <Box class="roller"></Box>
            </Box>

            <Box id="loader2" class="loader">
                <Box class="roller"></Box>
                <Box class="roller"></Box>
            </Box>

            <Box id="loader3" class="loader">
                <Box class="roller"></Box>
                <Box class="roller"></Box>
            </Box>
        </Box>
    </Box>

}


export default Loader;