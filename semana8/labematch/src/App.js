import React ,{useState, useEffect} from 'react';
import Swipe from './Components/Swipe/Swipe';
import Matches from './Components/Matches/Matches';

import GlobalStyle from './global';
import {AppDiv, AppHeader, AppFooter, AppContent} from './style';
import SimpleRestAPI from './Components/SimpleAPI';

function App() {
  const api = new SimpleRestAPI();

  const [page, setPage] = useState('swipe');
  const [load, setLoad] = useState();

  useEffect(() => {
    console.log('est');
  }, [load])

  const ChangePage = (newPage) => {
    setPage(newPage);
  }

  const resetMatches = () =>{
    api.PutData('/clear', {
      "id": "PatusZf4mHH6UoZfYC8I"
    }, (response) =>{
      console.log(response);
      setLoad(response);
    })
  }

  return (
    <AppDiv>
      <GlobalStyle/>
      <AppHeader>
        <div>
          <button onClick={() => ChangePage('matches')} hidden={page === 'matches'}>M</button>
        </div>
        <h4>LABEMATCH</h4>
        <div>
          <button onClick={() => ChangePage('swipe')} hidden={page === 'swipe'} >B</button>
        </div>
      </AppHeader>
      <AppContent>
        {page === 'swipe'? <Swipe/>: <Matches/>}
      </AppContent>
      <AppFooter>
        <button onClick={() => resetMatches()}>Reset Matches</button>
      </AppFooter>
    </AppDiv>

  );
}

export default App;
