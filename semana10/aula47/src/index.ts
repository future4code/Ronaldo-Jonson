import axios from 'axios';

type User = {
	id: string;
	name: string;
	email: string;
}

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews/';

/*
async function getSubscribers(): Promise<any[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data;
};
*/

/*

A arrow function precisa de uma inversão onde a keyword async vai pra frente e a keyword function é substituida por const
de resto tudo igual

const getSubscribers = async (): Promise<any[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data;
};
*/

/*
    A-) trocar apenas a keyword nao dará certo pois o retorno padrão da api nao vem como User temos que criar um na mao usando 
    as variaveis que vem no retorno da api

    B-) pq estamos passando por todos os elementos e criando um user, esse map serve para fazer essa conversao em todos os elementos
*/

const getSubscribers = async (): Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }

  // nesse caso faz sentudo sim usar o for pois temos que fazer essa requisição para diversos users diferentes, isso evita repetição de codigo

const sendNotifications = async (
    users: User[],
    message: string
  ): Promise<void> => {
    const promiseArray = [];
    for (const user of users) {
      promiseArray.push(
        axios.post(`${baseUrl}/notifications/send`, {
          subscriberId: user.id,
          message: message,
        })
      );
    }
  
    await Promise.all(promiseArray);
  };

  const createSubscriber = async (name: string, email: string) => {
    await axios.put(`${baseUrl}/subscribers`, {
      name,
      email
    });
  };

  const createAndSendNotifications = async () => {
    try {
      await createNews(
        "Novidade a caminho",
        "Labenu: uma nova escola de programação",
        1590522289000
      );
  
      const users = await getSubscribers();
  
      await sendNotifications(users, "Testando mensagens");
    } catch (err) {
      console.log("err: ", err.message);
    }
  };

  const getAllNotifications = async (): Promise<any> => {
    const users = await getSubscribers();
  
    const notificationPromises = [];
    for (const user of users) {
      notificationPromises.push(
        axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
      );
    }
  
    const result = await Promise.all(notificationPromises);
  
    const dataFromResult = result.map((res) => res.data);
  
    return dataFromResult;
  };