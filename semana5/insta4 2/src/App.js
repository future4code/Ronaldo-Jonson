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
  state = {
		Posts: [
            {
                nomeUsuario: 'Paulinha',
                fotoUsuario: 'https://picsum.photos/50/50',
                fotoPost: 'https://picsum.photos/200/200'
            },
            {
                nomeUsuario: 'Caio',
                fotoUsuario: 'https://picsum.photos/40/40',
                fotoPost: 'https://picsum.photos/100/100'
            },
            {
                nomeUsuario: 'Danvas',
                fotoUsuario: 'https://picsum.photos/60/60',
                fotoPost: 'https://picsum.photos/100/150'
            }
      ]
  }

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
