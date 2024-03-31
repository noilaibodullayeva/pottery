import { Box, Typography } from '@mui/material'
import React from 'react'
import "./footer.css"
import email from "./email.png"
import location from "./location.png"
import phone from "./phone.png"

function Footer() {
  return (
    <Box sx={{
      textAlign: 'center',
      height: '400px',
      mt: '10%'
    }}>
      <Typography sx={styles.logoo}>
        <h3 class="heading">Pompeo</h3>
      </Typography>
      <Typography sx={styles.loremFooter}>
        I have always striven to fix beauty in wood, stone, <br />
        glass or pottery, that has been my creed.
      </Typography>
      <Box sx={styles.boxFooter}>
        <Box>
          <img src={email} alt="" />
          <Typography sx={styles.emaill}>EMAIL</Typography>
          <Typography sx={styles.emailWord}> pompeopotery@gmail.com</Typography>
        </Box>
        <Box>
          <img src={location} alt="" />
          <Typography sx={styles.emaill}>LOCATION</Typography>
          <Typography sx={styles.emailWord}> Central Part, Manhattan <br /> New York, 1101</Typography>
        </Box>
        <Box>
          <img src={phone} alt="" />
          <Typography sx={styles.emaill}>CALL</Typography>
          <Typography sx={styles.emailWord}> +1 292 345 678</Typography>
        </Box>
      </Box>
      <Box sx={{
        backgroundColor: '#F7F7F7',
        color: '#777',
        textAlign: 'center',
        height: '100px',
        alignItems: 'center',
        padding: '40px 0'
      }}>
        <Typography>Template design by <a href="#" className='hreff'>Dorian Hoxha</a> - <a href="#" className='hreff'>Image License Info</a> Powered by <a href="#" className='hreff'>Webflow</a></Typography>
      </Box>
    </Box>
  )
}

export default Footer

const styles = {
  logoo: {
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0,
    fontFamily: 'Pacifico, sans-serif',
    fontSize: '34px',
    fontWeight: 700,
    lineHeight: '40px',
    color: '#222'
  },
  loremFooter: {
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Poppins, sans-serif',
    mt: '1%'
  },
  boxFooter: {
    display: 'grid',
    gridTemplateColumns: { md: 'auto auto auto', xs: 'auto' },
    mt: '5%',
    padding: { md: '0 100px 50px 100px', xs: '20px' }
  },
  emaill: {
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    fontsize: '16px',
    p: '5px',
    color: '#000'
  },
  emailWord: {
    fontWeight: '200',
    fontFamily: 'Poppins, sans-serif',
    fontsize: '14px',
    p: '5px',
  }
}
