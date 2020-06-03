import axios from "axios";

export function CreateUser (body) {
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
        Authorization: "ronaldo-jonson-mello"
        }
      }
    ).then(response => {
      console.log(response.data);
      return response;
    })
    .catch(err => {
        console.log(err);
        return null;
    });
  }

  export function GetUsers () {
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
        return response.data;
      })
      .catch(err => {
        console.log(err);
        alert("Email invalido ou informações ja cadastradas");
        return null;
      });
  };

  export function RemoveUser(id) {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

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
    })
    .catch(err => {
      console.log(err);
    });
};