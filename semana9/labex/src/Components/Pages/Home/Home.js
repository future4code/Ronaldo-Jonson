import React from 'react';

import { Button } from '@material-ui/core';
import { useHistory } from "react-router";

function Home (){
    const history = useHistory();
    
    const ChangePage = (page) => {
        history.push(page);
    };

    return <div>
        <h1>Home</h1>
        <Button variant="contained" color="primary" size='medium' onClick={() => ChangePage('/Trips')}>
        Travel!!
        </Button>
        <Button variant="contained" color="primary" size='medium' onClick={() => ChangePage('/login')}>
        Login
        </Button>
    </div>
}

export default Home;