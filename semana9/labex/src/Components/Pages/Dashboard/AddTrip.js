import React, {useState, useEffect} from 'react';
import SimpleRestAPI from '../../SimpleRestAPI'

import Saturn from '../../../Images/Saturn.jpg'
import {Button, Typography, TextField} from '@material-ui/core';


function AddTrip (){
    const api = new SimpleRestAPI();

    const [name, setName] = useState('');
    const [planet, setPlanet] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [durationInDays, setDurationInDays] = useState('');

    const onChangeName = (event) =>{
        setName(event.target.value);
    }

    const onChangePlanet = (event) =>{
        setPlanet(event.target.value);
    }

    const onChangeDate = (event) =>{
        setDate(event.target.value);
    }

    const onChangeDescription = (event) =>{
        setDescription(event.target.value);
    }

    const onChangeDurationInDays = (event) =>{
        setDurationInDays(event.target.value);
    }

    const SendTripData = () => {
        const body = {
            "name": name,
            "planet": planet,
            "date": date,
            "description": description,
            "durationInDays": durationInDays
        }

        api.PostData(`/trips`, body, (response) => {
            if(response.status < 300)
            {
                console.log(response);
                setName('');
                setPlanet('');
                setDate('');
                setDescription('');
                setDurationInDays('');
            }
        })
    }

    const AddTripForm = () => {
        return (
        <div>
            <TextField id="Name" type="Name" value={name} onChange={onChangeName} placeholder='Name'></TextField>
            <TextField id="Planet" type="Planet" value={planet} onChange={onChangePlanet} placeholder='Planet'></TextField>
            <TextField id="dateText" type="dateText" value={date} onChange={onChangeDate} placeholder='date'></TextField>
            <TextField id="Description" type="Description" value={description} onChange={onChangeDescription} placeholder='Description'></TextField>
            <TextField id="DurationInDays" type="DurationInDays" value={durationInDays} onChange={onChangeDurationInDays} placeholder='Duration'></TextField>
            <Button variant='contained' color='primary' onClick={() => SendTripData()}>Add Trip</Button>
        </div>
        )
    }

    return <div>
        {AddTripForm()}
    </div>
}

export default AddTrip;