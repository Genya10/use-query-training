import { useQuery } from "@tanstack/react-query";
import todoService from "../services/todo.service";
import { ITodo } from "../types/app.interface";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => todoService.getByAll(),
  });
};

/* const {isLoading, error, data} = useQuery({
        queryKey:['todos'],
        queryFn:() => todoService.getByAll(),
        //enabled:true,//выполнить или не выполнить запрос при определенном условии
        retry:10//количество попыток запросов до выбрасывания попытки
      })

      return {isLoading,error,data}*/
