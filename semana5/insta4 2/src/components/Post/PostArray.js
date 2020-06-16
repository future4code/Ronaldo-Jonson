import React from 'react'
import Post from './Post';

class PostArray extends React.Component {
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
