import { Box, Modal, Typography } from "@mui/material";

export default function ViewModal({ jobDescription, handleClose, open }: { jobDescription: string, open: boolean, handleClose: () => void }) {
    const style = {
        color: 'black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px'
      };

    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" style={{ fontSize: '2rem' }} variant="h6" component="h2">
                    About Company
                </Typography>
                <Typography id="modal-modal-description" style={{ fontSize: '1.2rem' }} sx={{ mt: 2 }}>
                    { jobDescription }
                </Typography>
            </Box>
        </Modal>
    )
}