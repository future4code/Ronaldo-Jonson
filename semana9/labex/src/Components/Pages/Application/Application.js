import React, {useState, useEffect} from 'react';
import SimpleRestAPI from '../../SimpleRestAPI'
import { useParams, useHistory } from "react-router";

import Saturn from '../../../Images/Saturn.jpg'
import {Button, Typography, TextField} from '@material-ui/core';

function Trip (){
    const api = new SimpleRestAPI();
    const pathParams = useParams();
    const history = useHistory();

    const [feedback, setFeedback] = useState('');
  
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [application, setApplication] = useState('');
    const [profession, setProfession] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
    }, [])

    const ChangePage = (page) => {
        history.push(page);
    };

    const onChangeName = (event) =>{
        setName(event.target.value);
    }

    const onChangeAge = (event) =>{
        setAge(event.target.value);
    }

    const onChangeApplication = (event) =>{
        setApplication(event.target.value);
    }

    const onChangeProfession = (event) =>{
        setProfession(event.target.value);
    }

    const onChangeCountry = (event) =>{
        setCountry(event.target.value);
    }

    const SendApplication = () => {
        const body = {
            "name": name,
            "age": age,
            "applicationText": application,
            "profession": profession,
            "country": country
        }

        api.PostData(`/trips/${pathParams.tripID}/apply`, body, (response) => {
            if(response.status < 300)
            {
                console.log(response);
                setFeedback("Formulario enviado!!");
            }
        })
    }

    const ApplicationForm = () => {
        return (
        <div>
            <TextField id="Name" type="Name" value={name} onChange={onChangeName} placeholder='Name'></TextField>
            <TextField id="Age" type="Age" value={age} onChange={onChangeAge} placeholder='Age'></TextField>
            <TextField id="applicationText" type="applicationText" value={application} onChange={onChangeApplication} placeholder='Bio'></TextField>
            <TextField id="profession" type="profession" value={profession} onChange={onChangeProfession} placeholder='Profession'></TextField>
            <TextField id="country" type="country" value={country} onChange={onChangeCountry} placeholder='Country'></TextField>
            <Button variant='contained' color='primary' onClick={() => SendApplication()}>Send Application</Button>
            <Button variant='outlined' color='primary' onClick={() => ChangePage('/trips')}>Go Back</Button>
        </div>
        )
    }

    return <div>
        <Typography>Application Form</Typography>
        {ApplicationForm()}
        <Typography>{feedback}</Typography>
    </div>
}

export default Trip;