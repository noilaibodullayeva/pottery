import { AppBar, Button, Drawer, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Drawercomponent from "./Drawercomponent";
import { Link } from 'react-router-dom';
import Drawerr from "./Drawer";

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
        link: '/shop',
    },
    {
        name: "CONTACT",
        link: '/Contact',
    },
]

function Header() {

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch)

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }


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
                                    sx={{ marginLeft: 'auto', color: '#222 !important' }}
                                    textColor='#222'
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                    indicatorColor="secondary">
                                    {
                                        Pages.map((page, index) => (
                                            <Link to={`${page.link}`}>
                                                <Tab key={index} label={page?.name} sx={{ color: '#a1a1a1', '&:hover': { color: '#000' } }} />
                                            </Link>

                                        ))
                                    }
                                    <div>
                                        <Button   sx={{ marginLeft: 'auto', color: '#a1a1a1', pt:'11px', '&:hover': { color: '#000' } }}
                                        onClick={toggleDrawer(true)}>Card</Button>
                                        <Drawer open={open} onClose={toggleDrawer(false)}>
                                            {Drawerr()}
                                        </Drawer>
                                    </div>
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