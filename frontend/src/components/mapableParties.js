import { Box, Typography } from '@mui/joy'
import React from 'react'

const MapableParties = ({ num }) => {
    return (
        <Box>
            <Typography>
                Party number {num}
            </Typography>
        </Box>
    )
}

export default MapableParties