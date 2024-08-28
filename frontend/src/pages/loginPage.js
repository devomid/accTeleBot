import { Box, Button, IconButton, Input } from '@mui/joy';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


// const loginToDB = () => {
// post DB data to login to it
// }

const Login = () => {
    const [visibility, setVisibility] = useState(true);
    const navigate = useNavigate();
    // const [host, setHost] = useState('');
    // const [user, setUser] = useState('');
    // const [password, setPassword] = useState('');
    // const [dbName, setBdName] = useState('');

    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ height: '100%', width: '60%', maxWidth: '350px', minWidth: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
                <Input fullWidth placeholder="Host" required />
                <Input fullWidth placeholder="User" required />
                <Input fullWidth endDecorator={<IconButton onClick={() => setVisibility(!visibility)}>{visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}</IconButton>} type={visibility ? 'password' : 'text'} placeholder='Password' required />
                <Input fullWidth placeholder="DataBase Name" required />
                <Button onClick={() => { navigate('/select') }} fullWidth type="submit">Connect to DB</Button>
            </Box>
        </Box>
    )
}

export default Login