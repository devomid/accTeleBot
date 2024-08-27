import { Box, Button, Typography } from '@mui/joy'
import React from 'react'
import MapableParties from '../components/mapableParties';
import { useNavigate } from 'react-router-dom';
import { GeneralState } from '../contextApi/GeneralContext';
import DbChangeModal from '../components/dbChangeModal';

const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const getPartiesFromSQL = () => {
    // fetch taraf hesab
}

const Parties = () => {
    const navigate = useNavigate();
    const { dbModal, setDbModal } = GeneralState();

    return (

        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <DbChangeModal dbModal={dbModal} setDbModal={setDbModal} />

            <Box sx={{ height: '100%', width: '60%', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
                {i.map((j, index) => {
                    return <MapableParties num={index} key={index} />
                })}
            </Box>
            <Box sx={{ height: '100%', width: '60%', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
                <Button onClick={() => { navigate('/items');  setDbModal(false)}} fullWidth type="submit">مشاهده کالا ها</Button>
                <Button onClick={() => setDbModal(true)} fullWidth type="submit">تغییر دیتابیس</Button>
            </Box>
        </Box >
    )
}

export default Parties