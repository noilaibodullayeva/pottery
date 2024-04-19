import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Homepagebackimage from "./homepageImg.png"
import "./homapage.css"
import BackHomapageimg from "./back.jpg"
import Umumiy from '../Umumiy'

function Homepage() {
    return (
        <Box>
            <Box sx={styles.BoxFullHomepage}>
                <Box sx={styles.wordsHomepage}>
                    <Typography sx={styles.pompeo}>POMPEO POTTERY</Typography>
                    <Typography sx={styles.unique}>Unique porcelain <span className='different-font'>&</span> </Typography>
                    <Typography sx={styles.unique}>Stona Collection</Typography>
                    <Typography sx={styles.loremHomepage}>
                        Unique & modern pottery made by our master in porcelain & stones
                    </Typography>
                    <Button sx={styles.HomepageButton}>SHOP COLLECTION</Button>
                </Box>
                <Box sx={styles.imgBoxHomepage}>
                    <Box sx={styles.Homepageimagebox}></Box>
                </Box>
            </Box>
            <Umumiy/>
        </Box>

    )
}

export default Homepage

const styles = {
    BoxFullHomepage: {
        height: { md: '90vh', xs: '80vh' },
        color: 'rgba(0, 0, 0, 0)',
        backgroundColor: 'rgba(219, 219, 219, .1)',
        backgroundImage: `url(${BackHomapageimg})`,
        backgroundPosition: '0 0, 0 0',
        backgroundRepeat: 'repeat, no-repeat',
        backgroundSize: 'auto, cover',
        alignItems: 'center',
        paddingTop: { md: '5%', xs: '30%' },
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
    },
    wordsHomepage: {
        width: { md: '40%', xs: '90%' },
        display: 'flex',
        flexDirection: 'column',
        margin: { md: '0 0px 0 200px', xs: '0 40px' },
    },
    pompeo: {
        color: '#D87979',
        textAlign: { md: 'left', xs: 'center' },
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: 0,
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '24px',
        opacity: 1,
    },
    unique: {
        opacity: 1,
        color: '#000',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '40px',
        fontWeight: 500,
        lineHeight: '58px',
        textAlign: { md: 'left', xs: 'center' },
    },
    loremHomepage: {
        textAlign: { md: 'left', xs: 'center' },
        marginBottom: '10px',
        fontFamily: 'Libre Franklin, sans-serif',
        fontSize: '14px',
        lineHeight: '24px',
        color: '#6C6C6C',
    },
    HomepageButton: {
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
        marginLeft: { md: 0, xs: '25%' }
    },
    imgBoxHomepage: {
        width: { md: '60%', xs: '90%' },
        height: '600px',
        padding: { md: '0 200px 0 0', xs: '0 20px' }
    },
    Homepageimagebox: {
        width: '100%',
        backgroundImage: `url(${Homepagebackimage})`,
        height: { md: '600px', xs: '400px' },
        backgroundRepeat: "no-repeat",
        backgroundSize: { md: '700px', xs: '400px' },
        backgroundPositionY: 1,
        marginTop: { md: '90px', xs: '60px' }
    }
}
