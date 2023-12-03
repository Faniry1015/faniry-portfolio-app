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
        <Box className="loader-wrapper" ref={loaderRef}>
            <Box className="loader">
                <Box className="roller"></Box>
                <Box className="roller"></Box>
            </Box>

            <Box id="loader2" className="loader">
                <Box className="roller"></Box>
                <Box className="roller"></Box>
            </Box>

            <Box id="loader3" className="loader">
                <Box className="roller"></Box>
                <Box className="roller"></Box>
            </Box>
        </Box>
    </Box>

}


export default Loader;