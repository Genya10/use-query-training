import axios from "axios";
import { ITodo } from "../types/app.interface";

class TodoService {
  private URL = "https://jsonplaceholder.typicode.com/todos";

  async getByAll() {
    const response = await axios.get<ITodo[]>(this.URL);
    return response.data;
  }

  async getById(id: string) {
    axios.get<ITodo>(`${this.URL}/${id}`);
  }
}

export default new TodoService();
