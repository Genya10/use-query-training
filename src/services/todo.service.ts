import axios from "axios";
import { ITodo } from "../types/app.interface";

class TodoService {
  private URL = "https://jsonplaceholder.typicode.com/todos";

  async getByAll(): Promise<ITodo[]> {
    const response = await axios.get<ITodo[]>(this.URL);
    return response.data;
  }

  async getById(id: string) {
    axios.get<ITodo>(`${this.URL}/${id}`);
  }
}

export default new TodoService();

/*export function todoService(){
    const todoId = 1;
    const { isLoading, error, data } = useQuery({
        queryKey: ["todos", todoId],
        queryFn: () =>axios.get<ITodo>("https://jsonplaceholder.typicode.com/todos/1")
      });

      return {isLoading, error, data}
}*/
