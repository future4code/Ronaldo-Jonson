import React, {useState, useEffect} from 'react';
import SimpleRestAPI from '../../SimpleRestAPI'
import { useParams, useHistory } from "react-router";

import Saturn from '../../../Images/Saturn.jpg'
import {Button, Typography, TextField, Divider} from '@material-ui/core';

function Trip (){
    const api = new SimpleRestAPI();
    const pathParams = useParams();
    const history = useHistory();

    const [trip, setTrip] = useState({});
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        GetTrip();
        if(localStorage.getItem('token') === '' || localStorage.getItem('token') === null)
            history.push('/');
    }, [])

    const GetTrip = () =>{
        api.GetData(`/trip/${pathParams.tripID}`, (response) =>{
            if(response.status < 300)
            {
                console.log(response);
                setTrip(response.data.trip)
                setCandidates(response.data.trip.candidates);
            }
        })
    }

    const ChangePage = (page) => {
        history.push(page);
    };

    const SendPassangerAuth = (id, result) =>{
        const body = {
            "approve": result
        }

        api.PutData(`/trips/${pathParams.tripID}/candidates/${id}/decide`, body, (response) => {
            if(response.status < 300){
                console.log(response);
                GetTrip();
            }
        });
    }

    const MountPage = () =>{
        return (
        <div>
            <div>
                <img src={Saturn} width='400'></img>
                <Typography>{trip.name}</Typography>
                <Typography>{trip.description}</Typography>
                <Typography>{trip.date}</Typography>
                <Typography>{trip.planet}</Typography>
                <Button variant='outlined' color='primary' onClick={() => ChangePage('/Dashboard')}>Go Back</Button>
                <Divider/>
            </div>
        </div>)
    }

    const Passangers = () => {
        let index = 0;
        return (candidates.map((passanger) =>{
            index++;
            return <div key={index}>
                <Typography>{passanger.name}</Typography>
                <Typography>{passanger.age}</Typography>
                <Typography>{passanger.applicationText}</Typography>
                <Typography>{passanger.country}</Typography>
                <Typography>{passanger.profession}</Typography>
                <Button variant="contained" color="primary" size='medium' onClick={() => SendPassangerAuth(passanger.id, true)}>Accept</Button>
                <Button variant="outlined" color="secondary" size='medium' onClick={() => SendPassangerAuth(passanger.id, false)}>Decline</Button>
                <Divider/>
            </div>
        }))  
    }

    return <div>
        {trip && MountPage()}
        {candidates && Passangers()}
    </div>
}

export default Trip;