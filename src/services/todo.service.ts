import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ITodo } from "../app.interface";

export function todoService(){
    const todoId = 1;
    const { isLoading, error, data } = useQuery({
        queryKey: ["todos", todoId],
        queryFn: () =>
          axios.get<ITodo>("https://jsonplaceholder.typicode.com/todos/1"),
      });

      return {isLoading, error, data}
}