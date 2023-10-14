import {AppBar, Toolbar, Modal, Box, Typography, Button} from '@material-ui/core'
import React from 'react'
import useStyles from './styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#3a3153',
    border: '2px solid #000',
    color: 'white',
    boxShadow: 24,
    p: 4,
  };
const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <AppBar position = "static" style={{ background: '#BEE5B0' }}>
            <Toolbar className = {classes.toolbar}>
                <Typography variant ="h5" className = {classes.title} >
                    <strong>LeafLines</strong>
                </Typography>
                <Button variant="contained" type="button" onClick={handleOpen} style={{background: '#CCCC99'}}>
                    Help
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                    </Box>
                </Modal>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar