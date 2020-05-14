import React from 'react'
import Post from './Post';

class PostArray extends React.Component {
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

        const timeline = this.state.Posts.map(element => {
            return <Post
                key = {element.nomeUsuario}
                nomeUsuario={element.nomeUsuario}
                fotoUsuario={element.fotoUsuario}
                fotoPost={element.fotoPost}
            />
        })      

		return <div>
                <div className={'posts-container'}>
                <div>{timeline}</div>
            </div>
        </div>
  
	}
}


export default PostArray
