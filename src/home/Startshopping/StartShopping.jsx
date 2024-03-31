import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BackShopping from "./back.jpeg"
import "./shopping.css"

function StartShopping() {
  return (
    <Box sx={styles.fullShopping}>
      <Box sx={styles.WordsShopping}>
        <Typography sx={styles.product}>POMPEO PETTERY</Typography>
        <Typography sx={styles.ppppp}>Ready to start shopping? </Typography>
        <Typography sx={styles.linkShopping}>
          Lorem ipsum dolor sit amet, <span className='spann'>consectetur adipiscing elit</span>. Suspendisse varius enim in eros elementum.
        </Typography>
        <Button sx={styles.buttonShoppinga}>NEW COLLECTION</Button>
      </Box>
    </Box>

  )
}

export default StartShopping

const styles = {
  fullShopping: {
    width: '100%',
    backgroundImage: `url(${BackShopping})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: {md:'450px', xs:'600px'},
    alignItems: 'left',
    justifyContent: 'left'
  },
  WordsShopping: {
    display: 'flex',
    flexDirection: 'column',
    float: 'left',
    width: {md:'50%', xs: '90%'},
    minHeight: ' 1px',
    paddingLeft: {md:'100px', xs:'30px'},
    position: 'relative',
    textAlign: 'left',
    top: {md:'25%', xs: '20%'}
  },
  product: {
    color: '#D87979',
    textAlign: { md: 'left', xs: 'left' },
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: 0,
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '24px',
    opacity: 1,
  },
  ppppp: {
    opacity: 1,
    color: '#000',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '58px',
    textAlign: { md: 'left', xs: 'left' },
  },
  linkShopping: {
    color: '#6c6c6c',
    fontSize: '16px',
    fontFamily: 'Poppins, sans-serif',
    width: {md:'70%', xs: '80%'}
  },
  buttonShoppinga: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#AC1313',
    color: '#fff',
    height: '60px',
    width: '220px',
    '&&:hover': {
        color: '#fff',
        backgroundColor: '#000',
        borderStyle: 'none',
        borderColor: '#53d7db',
        transform: 'translate(0, -6px)',
    },
},
}
