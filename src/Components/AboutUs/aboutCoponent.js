import { Box, Typography } from '@mui/material'
import React from 'react'
import back from "./backk.jpg"
import Pottery from '../../home/pottery/pottery'
import TalantedArtists from './TalantedArtists'
import Mission from '../mission/Mission'
import Footer from '../../home/footer/Footer'

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
            <Box>
                <Pottery />
            </Box>
            {/* <Box> */}
            <TalantedArtists />
            {/* </Box> */}
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
        backgroundImage: `url(${back})`,
        width: '100%',
        height: '300px',
        backgroundPosition: '0 0, 50% 67%',
        backgroundRepeat: ' repeat, no-repeat',
        backgroundSize: 'auto, cover',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',
        paddingTop: '200px',
        paddingBottom: '130px',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        mt:'100px'
    },
    wordsAbout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'left',
        padding: { md: '100px 200px', xs: '20px' },
        width: { md: '500px', xs: '100%' },
        marginTop:'100px'
    },
    aboutUs: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '25px',
        fontWeight: 700,
        color: '#000',
        textAlign: 'left',
        p: '40px 0 20px 0',
        mt:'100px'
    },
    aboutLorem: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        color: '#6C6C6C',
        textAlign: 'left',
    }

}
