import axios from "axios";

const url = "http://127.0.0.1:3001";

export default class DataService {
  async getTodoItems() {
    // const matches = await axios.get(url + "/newMatches", {
    //   headers: { "Access-Control-Allow-Origin": "*" },
    // });
    // return matches.data;
    return [{
      name: 'testen',
      description: 'testd',
      status: true,
      updated: '31/03/1999',
      id: '123312312'
    }]
  }

  async sendMessage(users, message) {
    const payload = {
      users,
      message,
    };
    await axios.post(url + `/sendMessages`, payload, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }
}
