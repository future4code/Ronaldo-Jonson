import React from 'react';
import axios from "axios";

class App extends React.Component {
  
  state = {
    userList: [],
    valorInputUsuario: "",
    valorInputEmail: "",
  };

  onChangeInputUsuario = event => {
    this.setState({ valorInputUsuario: event.target.value });
  };
 
  onChangeInputEmail = event => {
     this.setState({ valorInputEmail: event.target.value });
  };

  componentDidMount = () => {
    this.GetUsers();
  };

  // API CALLS

  CreateUser = () => {
    const body = {
      name: this.state.valorInputUsuario,
      email: this.state.valorInputEmail
    };
    
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
        Authorization: "ronaldo-jonson-mello"
        }
      }
    ).then(response => {
      console.log(response);
      this.setState({ valorInputUsuario: "" });
      this.setState({ valorInputEmail: "" });
      this.GetUsers();
    })
    .catch(err => {
      console.log(err);
    });
  }

  GetUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "ronaldo-jonson-mello"
          }
        }
      )
      .then(response => {
        console.log(response.data);
        this.setState({ userList: response.data });
      })
      .catch(err => {
        console.log(err);
        alert("Email invalido ou informações ja cadastradas");
      });
  };

  RemoveUser = (id) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:${id}`;

    axios
    .delete(
      url,
      {
        headers: {
          Authorization: "ronaldo-jonson-mello"
        }
      }
    )
    .then(response => {
      console.log(response.data);
      this.GetUsers();
    })
    .catch(err => {
      console.log(err);
    });
};

  render() {

    return (
      <div>
        <div>
            <input           
              value={this.state.valorInputUsuario}            
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
            />
            <input
              type="text"
              value={this.state.valorInputEmail}           
              onChange={this.onChangeInputEmail}
              placeholder={"Email"}
            />
            <button onClick={this.CreateUser}>Enviar</button>
          </div>
          <div>
          {this.state.userList.map(users => {
            return <div key={users.id}>
              <span>{users.name} </span>
              <button onClick={() => this.RemoveUser(users.id)}>X</button>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
