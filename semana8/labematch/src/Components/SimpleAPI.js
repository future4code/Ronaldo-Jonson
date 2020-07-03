import axios from 'axios';

export default class SimpleRestAPI { 
    constructor(base_URL){
        this.BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ronaldo-jonson';
    }

    GetData(params, callback){
        this.SendRequest(
            "get", 
            params === ""? this.BASE_URL : this.BASE_URL + params, 
            callback
        );
    }

    PostData(params, body, callback){
        this.SendRequest(
            "post", 
            params === ""? this.BASE_URL : this.BASE_URL + params, 
            callback,
            body,
        );
    }

    PutData(params, body, callback){
        this.SendRequest(
            "put", 
            params === ""? this.BASE_URL : this.BASE_URL + params, 
            callback,
            body,
        );
    }

    DeleteData(params, callback){
        this.SendRequest(
            "delete", 
            params === ""? this.BASE_URL : this.BASE_URL + params, 
            callback,
        );
    }

    async SendRequest(method, url, callback, body){        
        axios.request({
            method: method,
            data: body,
            headers: {
                Authorization: "ronaldo-jonson-mello"
            },
            url: url
        }) 
        .then(response => {
            callback({
                status: response.status,
                data: response.data,
            });
        })
        .catch(err => {
            console.log(err);
            callback({
                status: 400,
                data: err,
            });
        });
    }
}

