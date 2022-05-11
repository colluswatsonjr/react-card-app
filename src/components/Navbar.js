import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const classes = {
    
}


function Navbar() {

  return (
    <AppBar variant='sticky'>
      <Toolbar>
        <Typography variant="h3" className={"nav_logo"}>
          MySite
        </Typography>
          <div  className='nav_links'>
            <Link to="/home" variant='h2' className='nav_link'>
              Home
            </Link>
            <Link to="/create" className='nav_link'>
              Create
            </Link>
            <Link to="/edit" className='nav_link'>
              Edit
            </Link>
            <Link to="/extras" className='nav_link'>
              Extras
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;