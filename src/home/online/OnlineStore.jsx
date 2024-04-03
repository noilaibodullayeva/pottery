import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import "./onlinestore.css"
import Store1 from "./store1.png"
import Store2 from "./store2.png"
import Store3 from "./store3.png"
import Store4 from "./store4.png"
import Store5 from "./store5.png"
import Store6 from "./store6.png"

function OnlineStore() {
    return (
        <Box sx={styles.onlineStoreFull}>
            <Box sx={styles.BoxpotteryWord}>
                <Typography sx={styles.hand}>PRODUCT COLLECTIONS</Typography>
            </Box>
            <Box sx={styles.store}>
                <Box sx={styles.wordsOnline}>
                    <Typography sx={styles.product}>PRODUCT CATEGORIES</Typography>
                    <Typography sx={styles.ppppp}>Porcelain Pottery </Typography>
                </Box>
                <Box sx={styles.cardsStore}>
                    <Card sx={styles.cardsStoreOnline}>
                        <CardMedia
                            sx={styles.cardMediaImg}
                            image={Store1}
                            title="store 1"
                        />
                        <CardContent>
                            <Typography gutterBottom component="div" sx={styles.decor}>
                                Decor Plate
                            </Typography>
                            <Typography variant="body2" sx={styles.cost}>
                                $ 65.00 USD
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={styles.cardsStoreOnline}>
                        <CardMedia
                            sx={styles.cardMediaImg}
                            image={Store2}
                            title="store 1"
                        />
                        <CardContent>
                            <Typography gutterBottom component="div" sx={styles.decor}>
                                Mint Pottery
                            </Typography>
                            <Typography variant="body2" sx={styles.cost}>
                                $ 75.00 USD
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={styles.cardsStoreOnline}>
                        <CardMedia
                            sx={styles.cardMediaImg}
                            image={Store3}
                            title="store 1"
                        />
                        <CardContent>
                            <Typography gutterBottom component="div" sx={styles.decor}>
                                Set Of Potterys
                            </Typography>
                            <Typography variant="body2" sx={styles.cost}>
                                $ 125.00 USD
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={styles.cardsStoreOnline}>
                        <CardMedia
                            sx={styles.cardMediaImg}
                            image={Store4}
                            title="store 1"
                        />
                        <CardContent>
                            <Typography gutterBottom component="div" sx={styles.decor}>
                                Orange Ceramic
                            </Typography>
                            <Typography variant="body2" sx={styles.cost}>
                                $ 55.00 USD
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={styles.cardsStoreOnline}>
                        <CardMedia
                            sx={styles.cardMediaImg}
                            image={Store5}
                            title="store 1"
                        />
                        <CardContent>
                            <Typography gutterBottom component="div" sx={styles.decor}>
                                Dark Bowl
                            </Typography>
                            <Typography variant="body2" sx={styles.cost}>
                                $ 115.00 USD
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={styles.cardsStoreOnline}>
                        <CardMedia
                            sx={styles.cardMediaImg}
                            image={Store6}
                            title="store 1"
                        />
                        <CardContent>
                            <Typography gutterBottom component="div" sx={styles.decor}>
                                Square pottery
                            </Typography>
                            <Typography variant="body2" sx={styles.cost}>
                                $ 75.00 USD
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Button sx={styles.StoreButton} >VIEW ALL PRODUCTS</Button>
            </Box>
        </Box>
    )
}

export default OnlineStore

const styles = {
    onlineStoreFull: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: {md:'center', xs: 'left'},
        mt: {md: 0, xs: '250px'},
        ml: {md:0, xs: '-30px'}
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
        top: '450%',
        left: '100px',
        transform: 'rotate(-90deg) translate(0, -50%)',
    },
    store: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    wordsOnline: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
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
    cardsStore: {
        display: 'grid',
        gridTemplateColumns: {md:'auto auto auto', xs: 'auto'},
        gap: '25px',
        pr:{md:'60px'}
    },
    decor: {
        fontSize: '18px',
        color: '#777',
        fontFamily: 'Poppins. sans-serif',
        pt: '10px',
        textAlign:'left'
    },
    cost: {
        fontSize: '18px',
        color: '#000',
        fontFamily: 'Poppins. sans-serif',
        pt: '10px',
        fontWeight: 'bolder',
        textAlign:'left'
    },
    cardsStoreOnline: {
        width: '340px',
        '&:hover': {
            borderBottom: '1px solid red'
        },
        height: '600px'
    },
    cardMediaImg: {
        width: '340px',
        height: '490px',
        transition: 'all 0.3s',
        overflow: 'hidden',
        display:'flex',
        '&:hover': {
            transform: 'scale(1.1)',
            height: '490px',
        },
    },
    StoreButton: {
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
        mb: '100px'
    },
}
