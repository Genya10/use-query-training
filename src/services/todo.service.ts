import axios from "axios";
import { ICreateTodo, ITodo } from "../types/app.interface";

class TodoService {
  private URL = "https://jsonplaceholder.typicode.com/todos";

  async getAll() {
    const response = await axios.get<ITodo[]>(`${this.URL}/?_start=5&_limit=5`);
    return response.data;
  }

  async getById(id: string) {
   return axios.get<ITodo>(`${this.URL}/${id}`);
  }

  async create(title:string){
   return axios.post<ICreateTodo>(this.URL,{
    title,
    userId:1,
    completed:false
   })
  }
}

export default new TodoService();
