import React from 'react'
import MapableItem from '../components/mapableItem'
import { Box, Button } from '@mui/joy'
import { useNavigate } from 'react-router-dom';

const getItemsFromSQL = async () => {

}

const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const Items = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ height: '100%', width: '60%', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
                {i.map((j, index) => {
                    return <MapableItem num={index} key={index} />
                })}
            </Box>
            <Box sx={{ height: '100%', width: '60%', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
                <Button onClick={() => navigate('/parties')} fullWidth type="submit">مشاهده طرف حساب ها</Button>
                <Button onClick={() => navigate('/')} fullWidth type="submit">تغییر دیتابیس</Button>
            </Box>
        </Box>
    )
}

export default Items