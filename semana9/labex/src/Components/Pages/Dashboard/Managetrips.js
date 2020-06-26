import React, {useState, useEffect} from 'react';
import SimpleRestAPI from '../../SimpleRestAPI'

import TripCard from './ManageTripCard'
import { useHistory } from "react-router";

function Managetrips (){
    const api = new SimpleRestAPI();
    const history = useHistory();

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        GetTrips();
    }, [])

    const ChangePage = (id) => {
        history.push(`/trip/${id}`);
    };

    const GetTrips = () =>{
        api.GetData('/trips', (response) =>{
            if(response.status < 300)
            {
                console.log('Loaded ' + response);
                setTrips(response.data.trips)
            }
        })
    }

    const DeleteTrip = (id) => {
        api.DeleteData(`/trips/${id}`, (response) =>{
            if(response.status < 300)
            {
                console.log('Deleted ' + response);
                GetTrips();
            }
        })
    }

    const MountTripsGrid = () =>{
        return trips.map(trip =>{
            return <div key={trip.id}>
                    <TripCard Trip={trip} Delete={DeleteTrip} ChangePage={ChangePage}/>
                </div>
        })
    }

    return <div>
        <h1>Trips</h1>
        {trips && MountTripsGrid()}
    </div>
}

export default Managetrips;