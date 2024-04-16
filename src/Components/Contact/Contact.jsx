import { Box, Typography } from '@mui/material'
import React from 'react'
import Back from "./backkk.jpg"

function Contact() {
    return (
        <Box sx={styles.ContactCompenet}>
            <Box sx={styles.boxContact}>
                <Typography sx={styles.contactus}>Contact Us</Typography>
                <Typography sx={styles.loremContact}>
                    The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.
                </Typography>
            </Box>
        </Box>
    )
}

export default Contact

const styles = {
    ContactCompenet: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxContact: {
        backgroundImage: `ulr(${Back})`,
        width: '100%',
        height: '300px',
        backgroundCover: 'auto, cover',

    },
    contactus: {
        color: ' #000',
        fontFamily: ' Poppins, sans-serif',
        fontSize: '44px',
        fontWeight: 500,
        lineHeight: '54px',
        m: { md: '35% 0 0 200px', xs: '10px' }
    },
    loremContact: {
        marginBottom: 0,
        fontWeight: 500,
        lineHeight: '24px',
        textAlign: 'left'
    }
}