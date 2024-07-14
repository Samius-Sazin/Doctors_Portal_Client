import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'

function Doctor(props) {
    const { name, image } = props.doctor;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ py: 6, px: 1 }} elevation={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <img style={{ width: "250px" }} src={`data:image/png;base64,${image}`} alt='img' />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant='h6'>{name}</Typography>
                </Box>
            </Card>
        </Grid>
    )
}

export default Doctor
