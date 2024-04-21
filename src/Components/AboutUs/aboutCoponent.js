import { Box, Typography } from '@mui/material'
import React from 'react'
import back from "./backk.jpg"
import Pottery from '../../home/pottery/pottery'
import TalantedArtists from './TalantedArtists'
import Footer from '../../home/footer/Footer'
import Mission from './mission/Mission'

function AboutCoponent() {
    return (
        <Box sx={styles.fullComponentAbout}>
            <Box sx={styles.Aboutt}>
                <Box sx={styles.wordsAbout}>
                    <Typography sx={styles.aboutUs}>
                        About us
                    </Typography>
                    <Typography sx={styles.aboutLorem}>
                        The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                mt: { md: '100px', xs: '30px' }
            }}>
                <Pottery />
            </Box>
            <TalantedArtists />
            <Mission />
            <Footer />
        </Box>
    )
}

export default AboutCoponent

const styles = {
    fullComponentAbout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    Aboutt: {
        backgroundImage: `linear-gradient(to right, #f8f6f4 30%, transparent),url(${back})`,
        width: '100%',
        backgroundPosition: '0 0, 50% 67%',
        backgroundRepeat: ' repeat, no-repeat',
        backgroundSize: 'auto, cover',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',
        paddingTop: '100px',
        paddingBottom: '80px',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
    },
    wordsAbout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'left',
        padding: { md: '90px 200px', xs: '10px' },
        width: { md: '500px', xs: '90%' },
    },
    aboutUs: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '25px',
        fontWeight: 700,
        color: '#000',
        textAlign: 'left',
        p: '40px 0 20px 0',
    },
    aboutLorem: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        color: '#6C6C6C',
        textAlign: 'left',
        width: {md: '50%0', xs:'90%'}
    }

}
