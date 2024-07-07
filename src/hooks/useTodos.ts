import { useQuery } from "@tanstack/react-query";
import todoService from "../services/todo.service";
import { ITodo } from "../types/app.interface";

const data:{data:ITodo[]} = {
  data:[
    {
      id:1,
      completed:false,
      title:'hello',
      userId:1
    }
  ]
}

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => todoService.getAll(),
    initialData(){
      return data.data
    },
  });
};


/* const {isLoading, error, data} = useQuery({
        queryKey:['todos'],
        queryFn:() => todoService.getByAll(),
        //enabled:true,//выполнить или не выполнить запрос при определенном условии
        retry:10//количество попыток запросов до выбрасывания попытки
      })

      return {isLoading,error,data}*/
