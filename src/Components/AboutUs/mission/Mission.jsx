import React from 'react'
import mission1 from '../../../home/ceramic/ceramic.png'
import mission2 from "../../../home/ceramic/ceramic2.png"
import { Box, Typography } from '@mui/material'
import "../../AboutUs/artist.css"

function Mission() {
    return (
        <Box sx={styles.missoinn}>
            <Box sx={styles.boxMission}>
                <Box sx={styles.imagesBack}>
                    <Box sx={styles.boxImage} >
                        <Box sx={styles.missionimgBACK}>
                            <img src={mission1} alt="" className='missionImg' />
                        </Box>
                    </Box>
                </Box>

                <Box sx={styles.ceramicWords}>
                    <Typography sx={styles.gold}>Gold <span className='different-font'>&</span> Black Pottery</Typography>
                    <Typography sx={styles.loremceramic}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
                    </Typography>
                    <Typography sx={styles.linkCeramic}>View Details</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Mission

const styles = {
    missoinn: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    boxMission: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        width: '90%',
        gap: '70px'
    },
    ceramicWords: {
        display: 'flex',
        flexDirection: 'column',
        alignitems: 'left',
        gap: '10px',
        width: { md: '50%', xs: '95%' },
        justifyContent: 'center',
        margin: { md: '10% 0 15% 0', xs: '100px 0 15% 30px' }
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
        fontSize: '16px',
        fontFamily: 'Poppins, sans-serif',
        pb: '25px',
        textAlign: 'left',
        width: { md: '500px', xs: '90%' }
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
    },
    imagesBack: {
        width: { md: '40%', xs: '100%' },
        mt: { md: '150px', xs: '70px' },
        ml: { md: '200px', xs: '20px' },
        mb:{md:'0', xs:'70px'}
    },
    boxImage: {
        width: { md: '500px', xs: '100%' },
        height: '130px',
        backgroundColor: '#F5F5F5',

    },
    missionimgBACK: {
        backgroundImage: `url(${mission2})`,
        backgroundSize: 'cover',
        width: '400px',
        height: '300px',

    }
}
