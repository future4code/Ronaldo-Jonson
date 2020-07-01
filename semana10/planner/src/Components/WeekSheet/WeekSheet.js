import React, {useState, useEffect} from 'react';
import axios from 'axios';

function WeekSheet() {
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    GetTasks();
  }, [refresh])

  const GetTasks = () => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-ronaldo').then((response) => {
        if(response.status < 300){
            console.log(response.data);
            setTasks(response.data);
        }
      });
  }

  const DeleteTask = (id) => {
      axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-ronaldo/' + id).then(response => {
        console.log(response);

        if(response.status < 300)
            setRefresh(refresh + 1);
      })
  }

  const GetSetupTasks = (day) => {
    return (
        tasks.filter(task => {
            return task.day === day;
        })
        .map(task => {
            return <div>
                <p>{task.text}</p>
                <button onClick={() => DeleteTask(task.id)}>Delete</button>
            </div>
        })
    )
  }
  
  return (
    <div>
        <h4>Monday</h4>
        {tasks && GetSetupTasks('Monday')}
        <h4>Tuesday</h4>
        {tasks && GetSetupTasks('Tuesday')}
        <h4>Wednesday</h4>
        {tasks && GetSetupTasks('Wednesday')}
        <h4>Thursday</h4>
        {tasks && GetSetupTasks('Thursday')}
        <h4>Friday</h4>
        {tasks && GetSetupTasks('Friday')}
        <h4>Saturday</h4>
        {tasks && GetSetupTasks('Saturday')}
        <h4>Sunday</h4>
        {tasks && GetSetupTasks('Sunday')}
    </div>
  );
}

export default WeekSheet;
