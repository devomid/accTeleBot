import { Box, Button } from '@mui/joy'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SelectionPage = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ height: '100%', width: '60%', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
                <Button onClick={() => navigate('/parties')} fullWidth type="submit">مشاهده طرف حساب ها</Button>
                <Button onClick={() => navigate('/items')} fullWidth type="submit">مشاهده کالا ها</Button>
                <Button onClick={() => navigate('/')} fullWidth type="submit">تغییر دیتابیس</Button>
            </Box>
        </Box>
    )
}

export default SelectionPage