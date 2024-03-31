import { Box, Typography } from '@mui/material'
import React from 'react'
import Ceramicc from "./ceramic.png"
import Ceramic1 from "./ceramic2.png"
import "./ceramic.css"

function Ceramic() {
    return (
        <Box sx={styles.fullCeramics}>
            <Box sx={styles.BoxCeramic}>
                <Box sx={styles.BoxCeramic1}>
                    <Box sx={styles.BoxCeramicImage}>
                        <Box sx={styles.backCeramic}>
                            <img src={Ceramicc} className='imgCeramic' alt="" />
                        </Box>
                    </Box>
                    <Box sx={styles.ceramicWords}>
                        <Typography sx={styles.gold}>Gold&Black Pottery</Typography>
                        <Typography sx={styles.loremceramic}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
                        </Typography>
                        <Typography sx={styles.linkCeramic}>View Details</Typography>
                    </Box>
                </Box>
                <Box sx={styles.BoxCeramic1}>
                    <Box sx={styles.ceramicWords1}>
                        <Typography sx={styles.gold}>Gold&Black Pottery</Typography>
                        <Typography sx={styles.loremceramic}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
                        </Typography>
                        <Typography sx={styles.linkCeramic}>View Details</Typography>
                    </Box>
                    <Box sx={styles.BoxCeramicImage}>
                        <Box sx={styles.backCeramic}>
                            <img src={Ceramic1} className='imgCeramic' alt="" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box sx={styles.BoxpotteryWord}>
                    <Typography sx={styles.hand}>FEATURED PRODUCTS</Typography>
                </Box>
            </Box>
        </Box>

    )
}

export default Ceramic

const styles = {
    fullCeramics:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '20px',
        padding: '20px',
    },
    BoxCeramic: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '50px',
        marginTop: '30px',
        width: '90%',
    },
    BoxpotteryWord: {
        width: '10%',

    },
    hand: {
        color: '#DBDBE0',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '22px',
        fontWeight: 300,
        lineHeight: '34px',
        display: { md: 'inline-block', xs: 'none' },
        position: 'absolute',
        top: '280%',
        right: '0%',
        transform: 'rotate(-90deg) translate(0, -50%)',
    },
    BoxCeramic1: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '450px',
        width: '90%'
    },
    BoxCeramicImage: {
        width: { md: '50%', xs: '90%' },
        height: '550px',
        padding: { md: '30px 30px 30px 100px', xs: '0 20px' },
    },
    backCeramic: {
        backgroundColor: '#F5F5F5',
        width: { md: '450px', xs: '100%' },
        height: '180px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        position: 'relative',
    },
    ceramicWords: {
        display: 'flex',
        flexDirection: 'column',
        alignitems: 'left',
        gap: '10px',
        width: { md: '50%', xs: '100%' },
        justifyContent:'center',
        margin: {md: '0 0 15% 0', xs: '50px 0 15% 30px'}
    },
    ceramicWords1: {
        display: 'flex',
        flexDirection: 'column',
        alignitems: 'left',
        gap: '10px',
        width: { md: '50%', xs: '100%' },
        justifyContent:'center',
        margin: {md: '0 0 15% 0', xs: '60px 0 15% 30px'}
    },
    gold: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '25px',
        pb: '15px',
        color: '#000',
        textAlign: 'left'
    },
    loremceramic: {
        color: '#777',
        fontSize: '18px',
        fontFamily: 'Poppins, sans-serif',
        pb: '25px',
        textAlign: 'left',
        width: { md: '600px', xs: '100%' }
    },
    linkCeramic: {
        color: '#777',
        fontSize: '18px',
        fontFamily: 'Poppins, sans-serif',
        "&&:hover": {
            color: '#000',
            textDecoration: 'underline'
        },
        textAlign: 'left'
    }
}
