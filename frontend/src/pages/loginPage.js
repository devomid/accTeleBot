import { Box, Button, Input } from '@mui/joy';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ height: '100%', width: '60%', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
                <Input fullWidth placeholder="Host" required />
                <Input fullWidth placeholder="User" required />
                <Input fullWidth placeholder="Password" required />
                <Input fullWidth placeholder="DataBase Name" required />
                <Button onClick={() => { navigate('/select') }} fullWidth type="submit">Submit</Button>
            </Box>
        </Box>
    )
}

export default Login