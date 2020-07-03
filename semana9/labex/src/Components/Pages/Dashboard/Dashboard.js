import React, {useState, useEffect} from 'react';

import SideBar from './SideBar'
import Managetrips from './Managetrips'
import AddTrip from './AddTrip'
import { useHistory } from "react-router";

function Dashboard (index){
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if(localStorage.getItem('token') === '' || localStorage.getItem('token') === null)
            history.push('/');
    }, [])

    const GetCurrentPage = () =>{
        return currentPage
    }

    const SetCurrentPageProperty = (index) =>{
        if(index === 3)
        {
            localStorage.setItem('token', '');
            history.push('/');
        }else{   
            console.log(index);
            setCurrentPage(index);
        }
    }

    return <div>
        <SideBar Get={() => GetCurrentPage()} Set={SetCurrentPageProperty}/>
        {currentPage === 0 && <Managetrips></Managetrips>}
        {currentPage === 1 && <AddTrip></AddTrip>}
    </div>
}

export default Dashboard;