import React from 'react';

//Material UI
import { AppBar, Toolbar } from '@material-ui/core';
import LabeX from '../Images/LabeX.png'

function Header() {
    return (
      <AppBar position="static">
          <Toolbar>
            <img src={LabeX} width='200' alt='Logo'></img>
          </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;