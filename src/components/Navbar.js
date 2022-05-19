import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { Link } from "react-router-dom";

const classes = {
    navbar: {
        display:'flex',
        flexDirection:'row'

    },logo:{
        width:'auto'
    },
    links: {
        width:'40%',
        display:'flex',
        flexDirection:'row'
    },
    link: {
        textAlign:'center',
        padding:5,
        textDecoration:'none',
        fontWeight:'bold',
        flexGrow:1
    }
}

function Navbar() {

    return (
        // <AppBar variant='sticky'>
            <Box style={classes.navbar}>
                <Typography variant="h3" style={classes.logo}>
                    MySite
                </Typography>
                <Box style={classes.links}>
                    <Link to="/" style={classes.link}>
                        <Typography variant="h5" style={classes.text}>Home</Typography>
                    </Link>
                    <Link to="/create" style={classes.link}>
                        <Typography variant="h5" style={classes.text}>Create</Typography>
                    </Link>
                    <Link to="/about" style={classes.link}>
                        <Typography variant="h5" style={classes.text}>About</Typography>
                    </Link>
                </Box>
            </Box>
        // </AppBar>
    );
}
export default Navbar;