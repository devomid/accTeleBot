import { Box, Button } from '@mui/joy'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DbChangeModal from '../components/dbChangeModal'
import { GeneralState } from '../contextApi/GeneralContext';

const SelectionPage = () => {
    const { dbModal, setDbModal } = GeneralState();
    const navigate = useNavigate();

    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DbChangeModal dbModal={dbModal} setDbModal={setDbModal} />
            <Box sx={{ height: '100%', width: '60%', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
                <Button onClick={() => { navigate('/parties'); setDbModal(false) }} fullWidth type="submit">مشاهده طرف حساب ها</Button>
                <Button onClick={() => { navigate('/items'); setDbModal(false) }} fullWidth type="submit">مشاهده کالا ها</Button>
                <Button onClick={() => setDbModal(true)} fullWidth type="submit">تغییر دیتابیس</Button>
            </Box>
        </Box>
    )
}

export default SelectionPage