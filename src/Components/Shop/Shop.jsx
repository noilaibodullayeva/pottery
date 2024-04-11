import { Box, Typography } from '@mui/material'
import React from 'react'
import back from "./back.jpg"
import Shopping from './Shopping'
import News from '../../home/news/News'

function Shop() {
    return (
        <Box sx={styles.Shopcomponent}>
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
            <Shopping />
            <News />
            <Box sx={{
                backgroundColor: '#F7F7F7',
                color: '#777',
                textAlign: 'center',
                height: '50px',
                alignItems: 'center',
                padding: '40px 0',
                width: '100%'
            }}>
                <Typography>Template design by <a href="#" className='hreff'>Dorian Hoxha</a> - <a href="#" className='hreff'>Image License Info</a> Powered by <a href="#" className='hreff'>Webflow</a></Typography>
            </Box>
        </Box>
    )
}

export default Shop

const styles = {
    Shopcomponent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    Aboutt: {
        backgroundImage: `url(${back})`,
        width: '100%',
        height: '200px',
        backgroundPosition: '0 0, 50% 67%',
        backgroundRepeat: ' repeat, no-repeat',
        backgroundSize: 'auto, cover',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',
        paddingTop: '100px',
        paddingBottom: '130px',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        opacity: 1
    },
    wordsAbout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'left',
        padding: { md: '80px 200px', xs: '20px' },
        width: { md: '500px', xs: '100%' }
    },
    aboutUs: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '25px',
        fontWeight: 700,
        color: '#000',
        textAlign: 'left',
        p: '-20px 0 20px 0'
    },
    aboutLorem: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        color: '#6C6C6C',
        textAlign: 'left',
    }

}
