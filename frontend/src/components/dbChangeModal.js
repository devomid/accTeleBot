import { Button, DialogActions, DialogContent, DialogTitle, Divider, Modal, ModalDialog, Typography } from '@mui/joy'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const DbChangeModal = ({ dbModal, setDbModal }) => {
    const navigate = useNavigate();
    return (
        <Modal open={dbModal} onClose={() => setDbModal(false)} >
            <ModalDialog variant="outlined" role="alertdialog" sx={{ backgroundColor: 'rgb(253, 167, 9)', backdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgb(50, 50, 50)', width: '30%' }}>

                <DialogContent sx={{ color: 'black' }}>
                    <Typography color='rgb(0,0,0)' textAlign={'right'} lineHeight={2}>
                        هرگونه تغییر در تنظیمات دیتابیس توسط افراد غیر متخصص میتواند باعث بروز مشکل در عملکرد ربات شما شود
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ mt: 2 }}>
                    <Button variant="soft" color="danger" onClick={() => navigate('/')}>خودم بلدم</Button>
                    <Button variant="solid" color='success' onClick={() => setDbModal(false)}>پس بیخیالش</Button>
                </DialogActions>
            </ModalDialog>
        </Modal>

    )
}

export default DbChangeModal