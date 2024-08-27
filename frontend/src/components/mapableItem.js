import { Box, Typography } from '@mui/joy'
import React from 'react'

const MapableItem = ({ num }) => {
    return (
        <Box>
            <Typography>
                Item number {num}
            </Typography>
        </Box>
    )
}

export default MapableItem