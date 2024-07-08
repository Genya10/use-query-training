import { useMutation } from "@tanstack/react-query";
import todoService from "../services/todo.service";

export const usePost = () => {
  const { mutate } = useMutation({
    mutationKey: ["create todo"],
    mutationFn: (title: string) => todoService.create(title),
    onSuccess() {
      alert("Created title!");
    },
    //onMutate-указывает что мутация выполнена
    //onSettled-аналог finally в try/catch
  });
  return { mutate };
};
