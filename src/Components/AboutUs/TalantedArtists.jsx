import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import artist1 from "./img artist.jpeg"
import artist2 from "./artist2.jpg"
import artist3 from "./artist3.jpg"
import { Facebook, Google, Twitter } from '@mui/icons-material'
import "./artist.css"

function TalantedArtists() {
    return (
        <Box sx={styles.talantedbox}>
            <Box sx={styles.wordstalented}>
                <Typography sx={styles.pompeo}>OUR CREW</Typography>
                <Typography sx={styles.unique}>Talanted Artist</Typography>
            </Box>
            <Box sx={styles.talentedcards}>
                <Card sx={styles.cardArtist}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={artist1}
                        sx={{
                            width: '100px', height: '100px', borderRadius: '50%'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom sx={styles.namee}>
                            Maria Monroy
                        </Typography>
                        <Typography sx={styles.job}>SENIOR DESIGNER</Typography>
                        <Typography variant="body2" sx={styles.loremartist}>
                            Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit.  enim in eros elementum
                        </Typography>
                    </CardContent>
                    <CardActions sx={styles.iconsArtist}>
                        <Facebook sx={styles.iconsArtistF} />
                        <Twitter sx={styles.iconsArtistF} />
                        <Google sx={styles.iconsArtistF} />
                    </CardActions>
                </Card>
                <Card sx={styles.cardArtist}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={artist2}
                        sx={{
                            width: '100px', height: '100px', borderRadius: '50%'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom sx={styles.namee}>
                            Maria Monroy
                        </Typography>
                        <Typography sx={styles.job}>SENIOR DESIGNER</Typography>
                        <Typography variant="body2" sx={styles.loremartist}>
                            Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit.  enim in eros elementum
                        </Typography>
                    </CardContent>
                    <CardActions sx={styles.iconsArtist}>
                        <Facebook sx={styles.iconsArtistF} />
                        <Twitter sx={styles.iconsArtistF} />
                        <Google sx={styles.iconsArtistF} />
                    </CardActions>
                </Card>
                <Card sx={styles.cardArtist}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={artist3}
                        sx={{
                            width: '100px', height: '100px', borderRadius: '50%'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom sx={styles.namee}>
                            Maria Monroy
                        </Typography>
                        <Typography sx={styles.job}>SENIOR DESIGNER</Typography>
                        <Typography variant="body2" sx={styles.loremartist}>
                            Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit.  enim in eros elementum
                        </Typography>
                    </CardContent>
                    <CardActions sx={styles.iconsArtist}>
                        <Facebook sx={styles.iconsArtistF} />
                        <Twitter sx={styles.iconsArtistF} />
                        <Google sx={styles.iconsArtistF} />
                    </CardActions>
                </Card>

            </Box>
        </Box>
    )
}

export default TalantedArtists

const styles = {
    talantedbox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        backgroundColor: '#F8F8F8',
    },
    wordstalented: {
        alignItems: 'center',
        textAlign: 'center',
        padding: '15px 0 15px 0'
    },
    pompeo: {
        color: '#D87979',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: 0,
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '24px',
        opacity: 1,
        textAlign: 'center'
    },
    unique: {
        opacity: 1,
        color: '#000',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '40px',
        fontWeight: 500,
        lineHeight: '58px',
        textAlign: 'center',
    },
    talentedcards: {
        display: 'grid',
        gridTemplateColumns: { md: 'auto auto auto', xs: 'auto' },
        gap: '25px',
        padding: { md: '30px 100px 60px 100px', xs: '20px' }
    },
    cardArtist: {
        width: '350px',
        backgroundColor: '#fff',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    namee: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '18px',
        fontWeight: 500,
        color: '#000',
        textAlign: 'center',
    },
    job: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        fontWeight: 300,
        color: '#6c6c6c',
        textAlign: 'center',
        letterSpacing: 1,
        pb: '10px '
    },
    loremartist: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '12px',
        fontWeight: 400,
        color: '#6C6C6C',
        textAlign: 'left',
        pl: '20px'
    },
    iconsArtistF: {
        color: '#666666',
        border: '1px solid #666666',
        padding: '5px',
        borderRadius: '2px'
    }
}
