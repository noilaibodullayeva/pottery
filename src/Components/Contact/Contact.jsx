import { Box, Typography } from '@mui/material'
import React from 'react'
import Back from "./backkk.jpg"
import Contactus from './Contactus'

function Contact() {
    return (
        <Box sx={styles.ContactCompenet}>
            <Box sx={styles.boxummumiy}>
                <Box sx={styles.boxContact}>
                    <Typography sx={styles.contactus}>Contact Us</Typography>
                    <Typography sx={styles.loremContact}>
                        The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.
                    </Typography>
                </Box>
            </Box>
<Contactus/>
        </Box>
    )
}

export default Contact

const styles = {
    ContactCompenet: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        mt: '120px'
    },
    boxummumiy: {
        width: '100%',
        backgroundPosition: '0 0, 50% 67%',
        backgroundRepeat: ' no-repeat',
        backgroundSize: ' cover',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${Back})`,
        height: '400px',
    },
    boxContact: {
        padding: { md: '100px 0 0 200px', xs: '100px 30px 0 10px' },
        width: { md: '40%', xs: '60%' },
        height: '400px',
    },
    contactus: {
        color: ' #000',
        fontFamily: ' Poppins, sans-serif',
        fontSize: '44px',
        fontWeight: 500,
        lineHeight: '54px',
        textAlign: 'left'
    },
    loremContact: {
        marginBottom: 0,
        fontWeight: 500,
        lineHeight: '24px',
        textAlign: 'left',
        width: '600px'
    }
}