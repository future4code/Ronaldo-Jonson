import React from 'react';
import styled from 'styled-components'
import './App.css';
import Post from './components/Post/Post';
import PostArray from './components/Post/PostArray';

const CreatePost = styled.form`
  background-color: ghostwhite;

  height: 30vh;
  width: 300px;

  display: flex;
  flex-direction: column;

  border-style: solid;
  border-color: black;

  align-items: space-around;
  justify-content: space-around;
`

const PostLabel = styled.label`
  display: flex;
  padding-right : 15px;
  padding-left : 5px;
  justify-content: space-between;
`

const Subimitbutton = styled.button`
  width: 5vw;
  height: 5vh;
  margin: 0px auto;
`

const ContentPage = styled.div`
  background-color: lightgrey;
`

class App extends React.Component {

  AddPost = () => {
    const newPost = {
      usuario: `TeSTE`,
      fotoPost: `TeSTE`,
      fotoUsuario: `TeSTE`
    }  
  }; 

  render() {
    return (
      <ContentPage className={'app-container'}>
          <PostArray/>
          <CreatePost>
            <PostLabel>
              Usuario:
              <input type="text" name="name" />
            </PostLabel>
            <PostLabel>
              Imagem Post:
              <input type="text" name="name" />
            </PostLabel>
            <PostLabel>
              Imagem Usuario:
              <input type="text" name="name" />
            </PostLabel>
            <Subimitbutton type="submit" value="Submit" onClick={this.AddPost}>Enviar</Subimitbutton>
          </CreatePost>
      </ContentPage>
    );
  }
}

export default App;
