import { Box, Typography } from '@mui/material'
import React from 'react'
import Ceramicc from "./ceramic.png"
import Ceramic1 from "./ceramic2.png"

function Ceramic() {
    return (
        <Box sx={styles.BoxCeramic}>
            <Box sx={styles.BoxCeramic1}>
                <Box sx={styles.BoxCeramicImage}>
                    <Box sx={styles.Boxceramicimg}></Box>
                </Box>
                <Box sx={styles.ceramicWords}>
                    <Typography sx={styles.gold}>Gold&Black Pottery</Typography>
                    <Typography sx={styles.loremceramic}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
                    </Typography>
                    <Typography sx={styles.linkCeramic}>View Details</Typography>
                </Box>
            </Box>
            <Box sx={styles.BoxCeramic2}>
                <Box sx={styles.ceramicWords}>
                    <Typography sx={styles.gold}>Gold&Black Pottery</Typography>
                    <Typography sx={styles.loremceramic}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
                    </Typography>
                    <Typography sx={styles.linkCeramic}>View Details</Typography>
                </Box>
                <Box sx={styles.BoxCeramicImage}>
                    <Box sx={styles.Boxceramicimg1}></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Ceramic

const styles = {
    BoxCeramic: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '80px'
    },
    BoxCeramic1: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        padding: { md: '10px 100px', xs: '10px' },
        height: '500px'
    },
    BoxCeramic2: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        padding: { md: '10px 100px', xs: '10px' },
        height: '500px'

    },
    BoxCeramicImage: {
        width: { md: '300px', xs: '90%' },
        height: '700px',
        padding: { md: '0 150px', xs: '0 20px' }
    },
    Boxceramicimg: {
        width: '100%',
        backgroundImage: `url(${Ceramicc})`,
        height: { md: '300px', xs: '400px' },
        backgroundRepeat: "no-repeat",
        backgroundSize: { md: '500px', xs: '400px' },
        backgroundPositionY: 1,
        marginTop: { md: '90px', xs: '60px' }
    },
    Boxceramicimg1: {
        width: '100%',
        backgroundImage: `url(${Ceramic1})`,
        height: { md: '300px', xs: '400px' },
        backgroundRepeat: "no-repeat",
        backgroundSize: { md: '400px', xs: '400px' },
        backgroundPositionY: 1,
        marginTop: { md: '90px', xs: '60px' }
    },
    ceramicWords: {
        display: 'flex',
        flexDirection: 'column',
        alignitems: 'left',
        gap: '10px',
        width: '50%'
    },
    gold: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '25px',
        pb: '15px',
        color: '#000',
        textAlign: { md: 'left', xs: 'center' }
    },
    loremceramic: {
        color: '#777',
        fontSize: '18px',
        fontFamily: 'Poppins, sans-serif',
        pb: '25px',
        textAlign: { md: 'left', xs: 'center' }
    },
    linkCeramic: {
        color: '#777',
        fontSize: '18px',
        fontFamily: 'Poppins, sans-serif',
        "&&:hover": {
            color: '#000',
            textDecoration: 'underline'
        },
        textAlign: { md: 'left', xs: 'center' }
    }
}
