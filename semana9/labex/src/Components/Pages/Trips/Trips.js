import React, {useState, useEffect} from 'react';
import SimpleRestAPI from '../../SimpleRestAPI'

import tripCard from './TripCard'

function Trips (){
    const api = new SimpleRestAPI();

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        localStorage.setItem('token', '');
        GetTrips();
    }, [])

    const GetTrips = () =>{
        api.GetData('/trips', (response) =>{
            if(response.status < 300)
            {
                console.log(response);
                setTrips(response.data.trips)
            }
        })
    }

    const MountTripsGrid = () =>{
        return trips.map(trip =>{
            return <div key={trip.id}>
                    {tripCard(trip)}
                </div>
        })
    }

    return <div>
        <h1>Trips</h1>
        {trips && MountTripsGrid()}
    </div>
}

export default Trips;