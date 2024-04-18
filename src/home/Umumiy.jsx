import { Box } from '@mui/material'
import React from 'react'
import Pottery from './pottery/pottery';
import Ceramic from './ceramic/Ceramic';
import OnlineStore from "./online/OnlineStore"
import StartShopping from "./Startshopping/StartShopping"
import News from "./news/News"
import Footer from './footer/Footer'

function Umumiy() {
    return (
        <Box>
            <Pottery />
            <Ceramic />
            <OnlineStore />
            <StartShopping />
            <News />
            <Footer />
        </Box>
    )
}

export default Umumiy
