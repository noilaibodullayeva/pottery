import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Drawercomponent from "./Drawercomponent";
import { Link } from 'react-router-dom';

const Pages = [
    {
        name: "HOME",
        link: '/',
    },
    {
        name: "ABOUT",
        link: '/about'
    },
    {
        name: "SHOP",
        link: '/',
    },
    {
        name: "CONTACT",
        link: '/',
    },
    {
        name: "Cart",
        link: '/',
    },
]

function Header() {

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch)
    return (
        <React.Fragment>
            <AppBar sx={{ backgroundColor: '#fff' }}>
                <Toolbar>
                    <Typography sx={styles.logo}>
                        <h3 class="heading">Pompeo</h3>
                    </Typography>
                    {
                        isMatch ? (
                            <>
                                <Drawercomponent />
                            </>
                        ) : (
                            <>
                                <Tabs
                                    sx={{ marginLeft: 'auto', color: '#222' }}
                                    textColor='black'
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                    indicatorColor="secondary">
                                    {
                                        Pages.map((page, index) => (
                                            <Link to={`${page.link}`}>
                                                <Tab key={index} label={page?.name} />
                                            </Link>

                                        ))
                                    }
                                </Tabs>
                            </>
                        )
                    }

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}

export default Header

const styles = {
    logo: {
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 0,
        fontFamily: 'Pacifico, sans-serif',
        fontSize: '34px',
        fontWeight: 700,
        lineHeight: '40px',
        color: '#222'
    }
}