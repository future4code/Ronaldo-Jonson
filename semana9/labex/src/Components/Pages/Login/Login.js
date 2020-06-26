import React, {useState} from 'react';
import SimpleRestAPI from '../../SimpleRestAPI'
import { useHistory } from "react-router";

import { TextField, Button } from '@material-ui/core';

function Login (){

    const api = new SimpleRestAPI();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');

    const SendRequest = (requestType) => {
        const body = {
            "email": email,
	        "password": password
        }

        api.PostData(requestType, body, (response) =>{
            const requestIsLogin = (requestType === '/login');
            setFeedback("Loading...");

            if(response.status < 300){
                console.log(response);
                setFeedback(requestIsLogin? "Login Successful" : "User Registered, try logging in")

                if(requestIsLogin){
                    localStorage.setItem('token', response.data.token);
                    history.push('/Dashboard');
                }
            }
            else{
                console.log("ERROR: " + response);
                setFeedback(requestIsLogin? 'User not found': 'Error during Registration, user might be registered already');
            }
        })  
    }

    const onChangeEmail = (event) =>{
        setEmail(event.target.value);
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    }
      
    return <div>
        <h1>Login</h1>
        <TextField id="Email" type="Email" value={email} onChange={onChangeEmail}></TextField>
        <TextField id="Password" type="Password" value={password} onChange={onChangePassword}></TextField>
        <Button variant='contained' color="primary" onClick={() => SendRequest('/login')}>Enter</Button>
        <Button variant='outlined' color="primary" onClick={() => SendRequest('/signup')}>Register</Button>
        <p>{feedback}</p>
    </div>
}

export default Login;