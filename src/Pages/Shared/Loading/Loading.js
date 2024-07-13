import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

function Loading({ open, handleOpen, handleClose }) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress size={50} thickness={5} sx={{ color: "#19d3ae" }} />
        </Backdrop>
    )
}

export default Loading
