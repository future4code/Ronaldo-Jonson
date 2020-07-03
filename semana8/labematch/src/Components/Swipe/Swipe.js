import React ,{useState, useEffect} from 'react';
import SimpleRestAPI from '../SimpleAPI';

function Swipe() {
  const api = new SimpleRestAPI();

  const [profile, setProfile] = useState();
  const [load, setLoad] = useState();

  useEffect(() => {
    api.GetData('/person', response => {
        if(response.status < 300){
            console.log('load');
            setProfile(response.data.profile);
        }
    })
  }, [load])

  const SendSwipe = (swipe) => {
    const body = {
        "id": profile.id,
        "choice": swipe
    }

    api.PostData('/choose-person', body, (response) => {
        if(response.status < 300)
        {
            console.log(response);
            setLoad(response);
        }
    })
  }

  return (
    <div>
        {profile && 
        <div>
            <img src={profile.photo} width='250' height='300'></img>
            <h4>{profile.name}</h4>
            <p>{profile.bio}</p>
        </div>
        }
        <div>
            <button onClick={() => SendSwipe(true)}>Aceitar</button>
            <button onClick={() => SendSwipe(false)}>Rejeitar</button>
        </div>
    </div>
  );
}

export default Swipe;
