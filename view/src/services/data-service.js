import axios from "axios";

const url = "https://1lam20h9i7.execute-api.us-east-1.amazonaws.com/prod";
// const url = "https://dhiwrutwdf.execute-api.us-east-1.amazonaws.com/teste";
export default class DataService {
  async getTodoItems() {
    const response = await axios.get(url + "/todoItems").catch((err) => {
      console.log(err)
      return []
    });
    console.log(response.data)
    return response.data || [];
  }

  async createItem(item) {
    const response = await axios.post(url + `/create`, item, {
     
    });
    console.log(response)
  }
}
