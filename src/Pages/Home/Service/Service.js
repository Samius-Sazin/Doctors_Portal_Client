import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

function Service(props) {
  const { name, description, image } = props.service;

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, boxShadow: 0 }} >
        <CardMedia
          component="img"
          style={{width:"auto", hight:"80px", margin:"0px auto"}}
          image={image}
          alt={name}
        />
        <CardContent sx={{textAlign:'center'}}>
          <Typography variant="h5" component="div"> {name} </Typography>
          <Typography variant="body2" color="text.secondary"> {description} </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Service
