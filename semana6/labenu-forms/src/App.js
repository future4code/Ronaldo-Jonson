import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Pagina_1} from './Components/Pagina1'
import {Pagina_2} from './Components/Pagina2';
import {Pagina_3} from './Components/Pagina3';
import {DonePage} from './Components/DonePage';

class App extends React.Component {
  state = {
    currentPage: 1,
  }

  RenderPage = () => 
  {
    switch (this.state.currentPage) {
      case 1: 
        return <Pagina_1 />;
      case 2: 
        return <Pagina_2 />;
      case 3: 
        return <Pagina_3 />;
      default:
        return <DonePage />;
    }
  }

  NextPage = () => {
    this.setState({currentPage: this.state.currentPage + 1})
  }

  render(){
    return (
      <div>
        {this.RenderPage()}
        <div>
          <button onClick={this.NextPage}>Próxima etapa</button>
        </div>
      </div> 
    );
  }
} 

export default App;
