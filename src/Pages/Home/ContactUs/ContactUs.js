import React from 'react';
import bg from '../../../images/appointment.png';
import { Box, Container, Typography } from '@mui/material';

function ContactUs() {
  const background_image = {
    background: `url(${bg})`,
    padding: "50px 0px",
  }

  return (
    <div style={background_image}>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ color: "#19d3ae", fontSize: "18px", fontWeight: "700", mb: 1 }}>Contact Us</Typography>
          <Typography variant='h4' sx={{ fontWeight: "500", mb: 3 }}>Stay Connected With Us</Typography>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Box sx={{ width: {xs: "50%", sm:"35%", md:"35%"} }}>
              <form style={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
                <input style={{width:"90%", margin: "0px 0px 15px 0px", border: "0px", borderRadius: "8px", padding: "10px 18px" }} type='email' placeholder='Subject' />
                <input style={{width:"90%", margin: "0px 0px 15px 0px", border: "0px", borderRadius: "8px", padding: "10px 18px" }} type='email' placeholder='Email address' />
                <textarea style={{width:"90%", margin: "0px 0px 15px 0px", border: "0px", borderRadius: "8px", padding: "10px 18px", resize: "none", rows: "5", height: "100px" }} placeholder='Description' />
                <input style={{ border: "0px", borderRadius: "8px", padding: "10px 14px", backgroundColor: "#19d3ae", width: "60%", color: "white", fontSize: "16px" }} type='button' value='Submit' />
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default ContactUs
