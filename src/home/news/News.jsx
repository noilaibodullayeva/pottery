import { Box, Button, Checkbox, FormControl, Input, InputAdornment, Typography } from '@mui/material'
import React from 'react'
import "./news.css"
import Newsimg from "./news.png"
import { Email } from '@mui/icons-material'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function News() {
    return (
        <Box sx={styles.fullNews}>
            <Box sx={{
                width: '100px', height: '100px', backgroundColor: '#EBB96A', borderRadius: '50%', alignItems: 'center', ml: { md: '47%', xs: '40%' }, mb: '30px', mt: '100px'
            }}>
                <img src={Newsimg} alt="" className='imgnews' />
            </Box>

            <Typography sx={styles.pompeo}>LATEST NEWS</Typography>
            <Typography sx={styles.unique}>Latest news <span className='different-font'>&</span> New updates </Typography>
            <FormControl variant="outlined" sx={{ display: 'flex', flexDirection: 'row', mt: '30px', textAlign: 'center', ml: { md: '33%', xs: '10px' }, mr: { md: 0, xs: '10px' } }}>
                <Input
                    variant="outlined"
                    placeholder='Enter your email'
                    sx={{ width: '420px', }}
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <Email />
                        </InputAdornment>
                    }
                />
                <Button sx={styles.newsButton}>SUBSCRIBE</Button>
            </FormControl>
            <Typography sx={{ mt: '2%', color: '#AFAFAF', }}>
                <Checkbox {...label} defaultChecked /> Sign up for our newsletter
            </Typography>
        </Box>
    )
}

export default News

const styles = {
    fullNews: {
        display: 'flex',
        flexDirection: 'column',
        alignitems: 'center',
        justifyContent: 'center',
        height: '600px'
    },
    newsButton: {
        width: '200px',
        height: '50px',
        backgroundColor: 'black',
        color: '#fff',
        "&&:hover": {
            backgroundColor: '#AC1313',
        }

    }
}
