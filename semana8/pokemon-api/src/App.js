import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import pokedex from './imgs/pokedex.jpg';

const Pokedex = styled.div`
  position: absolute;
`

const PokemonData = styled.div`
  position: absolute;
  top: 135px;
  left: 45px;
`

class App extends React.Component {
  
  state = {
    currentPokemon:"",
    pokemon_img:"",
    input:"1",
  }

  componentDidMount() {
    this.GetPokemon();
  }

  onChangeInput = (event) => {
    this.setState({input : event.target.value})
  }

  GetPokemon = async () => {
    try{
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + this.state.input)
      console.log(response.data);
      this.setState({currentPokemon: response.data})
      this.setState({pokemon_img: response.data.sprites.front_default})
    }catch (err){
      console.log('Erro:', err);
    }
  }

  render(){
    const RenderPokemon = (pokemon) => {
      return (
        <div>
          <img src={this.state.pokemon_img}/>
        </div>
      )
    }

    return (
      <div>
        <header>
        </header>
        <main>
          <input type="text" placeholder="Pokemon Name or Number" onChange={this.onChangeInput}/>
          <button onClick={this.GetPokemon}>pesquisar</button>
          <section>
            <Pokedex>
              <img src={pokedex}/>
            </Pokedex>
            <PokemonData>
              {RenderPokemon(this.state.currentPokemon)}
            </PokemonData>
          </section>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
