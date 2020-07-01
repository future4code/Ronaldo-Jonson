import React, {useState, useEffect} from 'react';
import './App.css';

import WeekSheet from './Components/WeekSheet/WeekSheet';
import Axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [day, setDay] = useState('Monday');
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    
  }, [refresh])

  const onChangeText = (event) => {
    setText(event.target.value);
  }

  const onChangeDay = (event) => {
    setDay(event.target.value);
  }

  const AddTask = () => {
    const body = {
      "text": text,
	    "day": day
    }

    Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-ronaldo', body)
      .then(response => {
        if(response.status < 300){
          console.log(response);
          setRefresh(refresh + 1);
        }
      }
    )
  }
  
  return (
    <div className="App">
      <h1>planner</h1>
      <div>
        <h4>Create Task</h4>
        <input type='text' placeholder='text' value={text} onChange={(e) => onChangeText(e)}></input>
        <select name="days" id="day" value={day} onChange={(e) => onChangeDay(e)}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <button onClick={() => AddTask()}>Add Task</button>
      </div>
      {WeekSheet()}
    </div>
  );
}

export default App;
