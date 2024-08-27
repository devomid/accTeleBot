import { Box, Button, Typography } from '@mui/joy'
import React from 'react'
import MapableParties from '../components/mapableParties';
import { useNavigate } from 'react-router-dom';

const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const Parties = () => {
    const navigate = useNavigate();

    return (

        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ height: '100%', width: '60%', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
                {i.map((j, index) => {
                    return <MapableParties num={index} key={index} />
                })}
            </Box>
            <Box sx={{ height: '100%', width: '60%', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
                <Button onClick={() => navigate('/items')} fullWidth type="submit">مشاهده کالا ها</Button>
                <Button onClick={() => navigate('/')} fullWidth type="submit">تغییر دیتابیس</Button>
            </Box>
        </Box >
    )
}

export default Parties