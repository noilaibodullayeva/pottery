import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import Mug from "./mug.jpg"
import Plate from "./plate.jpg"
import vase from "./vase.jpg"
import './pottery.css'


function Pottery() {
    return (
        <Box sx={styles.boxPottery}>
            <Box sx={styles.BoxpotteryWord}>
                <Typography sx={styles.hand}>HAND CRAFT POTTERY</Typography>
            </Box>
            <Box sx={styles.dishespottery}>
                <Box sx={styles.BoxPottery1}>
                    <Typography sx={styles.product}>PRODUCT CATEGORIES</Typography>
                    <Typography sx={styles.ppppp}>Porcelain <span className='different-font'>&</span> Pottery </Typography>
                </Box>
                <Box sx={styles.BoxPottery2}>
                    <img src={Mug} alt="mug" />
                    <img src={Plate} alt="Plate" />
                    <img src={vase} alt="vase" />
                </Box>
                <Box sx={styles.BoxPottery3}>
                    <Box sx={styles.Box3Words}>
                        <Typography sx={styles.handgrafted}>Hand Grafted <br />Pottery since 1990</Typography>
                        <Typography sx={styles.lorempottery}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
                        </Typography>
                    </Box>
                    <Box sx={styles.Box3Words}>
                        <Typography sx={styles.handgrafted}>We Provide Premium <br />Pottery Produts</Typography>
                        <Typography sx={styles.lorempottery}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
                        </Typography>
                    </Box>
                </Box>
                <Divider  sx={{color: '#DBDBE0'}} />
            </Box>

        </Box>
    )
}

export default Pottery

const styles = {
    boxPottery: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // padding:' 0 100px'
    },
    BoxpotteryWord: {
        width: '5%',
        // marginLeft:'200px'
    },
    dishespottery: {
        mt:'40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'90%',
        padding:{md:'20px 30px', xs:'10px'},
        gap:'60px'
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
        display: {md:'inline-block', xs: 'none'},
        position: 'absolute',
        top: '170%',
        left: '100px',
        transform: 'rotate(-90deg) translate(0, -50%)',
    },
    BoxPottery1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    product: {
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
    ppppp: {
        opacity: 1,
        color: '#000',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '40px',
        fontWeight: 500,
        lineHeight: '58px',
        textAlign: { md: 'left', xs: 'center' },
    },
    BoxPottery2:{
        display:'flex',
        flexDirection:{md:'row',xs:'column' },
        alignItems:'center',
        justifyContent: 'space-between',
        gap:'55px'
    },
    BoxPottery3 : {
        display:'flex',
        flexDirection:{md:'row', xs:'column'},
        alignItems:'center',
        justifyContent:'space-between',
        padding: {md: '20px 150px'}
    },
    Box3Words:{
        display:'flex',
        flexDirection:'column',
        gap:'30px'
    },
    handgrafted:{
        color: '#000',
        textAlign: 'left',
        marginTop: 0,
        fontFamily: 'Poppins, sans-serif',
        fontSize: '30px',
        fontWeight: 400,
        lineHeight: '36px',
        padding:{md:0, xs:'20px 10px'}
    },
    lorempottery :{
        color: '#777',
        textAlign: 'left',
        marginTop: '20px',
        lineHeight: '24px',
        // width:'',
        padding:'5px 30px 10px 0'
    }
}
