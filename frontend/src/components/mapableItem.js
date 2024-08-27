import { Box, Typography } from '@mui/joy'
import React from 'react'

const MapableItem = ({ num }) => {
    return (
        <Box>
            <Typography color='rgb(0,0,0)'>
                Item number {num}
            </Typography>
        </Box>
    )
}

export default MapableItem