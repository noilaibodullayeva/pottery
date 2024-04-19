import { Box, Typography } from '@mui/material'
import React from 'react'

function Contactus() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignitems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F8F8F8',
            width: '100%',
            pt:'100px'
        }}>
            <Box sx={{
                textAlign: 'center',

            }}>
                <Typography sx={{
                    color: '#d77474',
                    textAlign: 'center',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: 0,
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '24px',

                }}>CONTACT US</Typography>
                <Typography sx={{
                    color: '#000',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '40px',
                    fontWeight: 500,
                    lineHeight: '50px',
                }}>Lets get in touch</Typography>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { md: 'auto auto auto', xs: 'auto' },
                textAlign: 'center',
                justifyContent: 'space-evenly',
                gap: '20px',
                mt:'80px'
            }}>
                <Box>
                    <Typography sx={styles.footerTitle}>Phone</Typography>
                    <Typography sx={styles.pp}>+1 393 695 695</Typography>
                </Box>
                <Box>
                    <Typography sx={styles.footerTitle}>LOCATION</Typography>
                    <Typography sx={styles.pp}>2567 Fifth Ave, New York City, <br /> NY 20035, USA</Typography>
                </Box>
                <Box>
                    <Typography sx={styles.footerTitle}>EMAIL</Typography>
                    <Typography sx={styles.pp}>pompoe@pottery1990.com</Typography>
                </Box>
                <Box></Box>
                <Box></Box>
            </Box>
        </Box>
    )
}

export default Contactus

const styles = {
    footerTitle: {
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '20px',
        fontFamily: 'Poppins, sans - serif',
        fontSize: '13px',
        fontWeight: 600,
        lineHeight: '23px',
    },
    pp: {
        color: '4d4d4d',
        textAlign: 'center',
        marginBottom: '10px',
        fontFamily: 'Libre Franklin, sans-serif',
        fontSize: '14px',
        lineHeight: '24px',
    }
}