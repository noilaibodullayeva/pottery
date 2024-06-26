import { Box, Button, FormControl, InputAdornment, TextField, Typography, } from '@mui/material'
import React from 'react'
import backfood from '../Contact/tea.jpeg'
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { Email } from '@mui/icons-material';
import "./contact.css"
import Footer from '../../home/footer/Footer';

function Contactus() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignitems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F8F8F8',
            width: '100%',
            pt: '100px'
        }}>
            <Box>
                <Box sx={{
                    textAlign: 'center',

                }}>
                    <Typography sx={{
                        color: '#d77474',
                        textAlign: 'center',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: 0,
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '24px',

                    }}>CONTACT US</Typography>
                    <Typography sx={{
                        color: '#000',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '40px',
                        fontWeight: 500,
                        lineHeight: '50px',
                    }}>Lets get in touch</Typography>
                </Box>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { md: 'auto auto auto', xs: 'auto' },
                    textAlign: 'center',
                    justifyContent: 'space-evenly',
                    gap: '20px',
                    mt: '80px'
                }}>
                    <Box>
                        <Typography sx={styles.footerTitle}>Phone</Typography>
                        <Typography sx={styles.pp}>+1 393 695 695</Typography>
                    </Box>
                    <Box>
                        <Typography sx={styles.footerTitle}>LOCATION</Typography>
                        <Typography sx={styles.pp}>2567 Fifth Ave, New York City, <br /> NY 20035, USA</Typography>
                    </Box>
                    <Box>
                        <Typography sx={styles.footerTitle}>EMAIL</Typography>
                        <Typography sx={styles.pp}>pompoe@pottery1990.com</Typography>
                    </Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F8F8F8',
                width: '100%'
            }}>
                <Box sx={{
                    width: '70%'
                }}>
                    <Box sx={{
                        width: { md: '100%', xs: ' 90%' },
                        ml: '200px',
                        height: '180px',
                        backgroundImage: `url(${backfood})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '0 51%',
                        backgroundSize: 'cover',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 0,
                        marginRight: 0,
                        display: 'block',
                    }}>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: 0,
                        alignItems: 'center',
                        // ml: '100px',
                        backgroundColor: '#fff',
                        width: '100%'
                    }}>
                        <Box sx={{
                            display: { md: 'flex', xs: 'none' },
                            backgroundColor: '#fff',
                            border: '1px solid #E5E3DF',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '40%',
                            flexDirection: { md: 'row', xs: 'column' }
                        }}>
                            <Box sx={{
                                backgroundColor: '#E5E3DF',
                                margin: '50px',
                                height: '450px',
                                width: '300px',
                                cursor: 'pointer',
                            }}>

                            </Box>
                        </Box>
                        <Box sx={{
                            width: { md: '60%', xs: '100%' }
                        }}>
                            <Typography sx={{
                                fontSize: '30px',
                                fontWeight: 600,
                                m: '10% 0 5% 0',
                                color: '#222',
                                fontFamily: 'Poppin s, sans-serif'
                            }}>
                                Drop Us a Line
                            </Typography>
                            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                <FormControl variant="standard">
                                    <TextField
                                        id="outlined-basic"
                                        label="Name:"
                                        variant="outlined"
                                        defaultValue="Your name"
                                        sx={{ border: '1px solid #ebebeb', backgroundColor: 'rgba(219, 219, 219, .1)', "&:active": { border: '1px solid #222' } }}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PersonOutlineSharpIcon />
                                            </InputAdornment>
                                        } />
                                </FormControl>
                                <FormControl>
                                    <TextField
                                        id="outlined-basic"
                                        label="Email:"
                                        variant="outlined"
                                        defaultValue="Your email"
                                        sx={{ border: '1px solid #ebebeb' }}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        } />
                                </FormControl>
                            </Box>
                            <Box sx={{
                                width: { md: '420px', xs: '90%' }
                            }}>
                                <FormControl sx={{
                                    width: { md: '100%', xs: '90%' },
                                    ml: { md: '90px' }
                                }} >
                                    <label htmlFor="" for="fname" style={{ textAlign: 'left', color: '#3f3f3f', paddingBottom: '10px' }}>Massage</label>
                                    <textarea
                                        id='fname'
                                        name='fname'
                                        className='textarea'
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PersonOutlineSharpIcon />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>

                            <Button sx={{
                                padding: '20px 25px',
                                backgroundColor: '#AC1313',
                                color: '#fff',
                                "&:hover": {
                                    backgroundColor: '#ff5f0f',
                                    color: '#fff'
                                },
                                borderRadius: 0,
                                textAlign: 'left'
                            }}>SEND MESSAGE</Button>

                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box sx={{backgroundColor: '#FBFBFB'}}>
               <Footer sx={{mt:'20px'}} /> 
            </Box>
            
        </Box>
    )
}

export default Contactus

const styles = {
    footerTitle: {
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '20px',
        fontFamily: 'Poppins, sans - serif',
        fontSize: '13px',
        fontWeight: 600,
        lineHeight: '23px',
    },
    pp: {
        color: '4d4d4d',
        textAlign: 'center',
        marginBottom: '10px',
        fontFamily: 'Libre Franklin, sans-serif',
        fontSize: '14px',
        lineHeight: '24px',
    }
}