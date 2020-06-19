import React ,{useState, useEffect} from 'react';
import SimpleRestAPI from '../SimpleAPI';

function Matches() {
  const api = new SimpleRestAPI();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.GetData('/matches', response => {
        if(response.status < 300){
            console.log(response);
            setMatches(response.data.matches);
        }
    })
  }, [])

  const GetList = () =>{
      return matches.map(match => {
          return <div key={match.id}>
              <img src={match.photo} width='50' height='50'></img>
              <p>{match.name}</p>
          </div>
      })
  }

  return (
    <div>
      {GetList()}
    </div>
  );
}

export default Matches;
