import { useQueryClient } from "@tanstack/react-query";
import { useTodos } from "./hooks/useTodos";

function App() {


  const queryCleint = useQueryClient()

  return (
    <div>     
      {error && <div>{error.message}</div>}

       <button onClick={()=> queryCleint.invalidateQueries(['todos'])}>Refresh</button>

      {isLoading ? (
        <div>Loading...</div>
      ) : data?.length ? (
        data.map((todo) => (
          <div key={todo.id}>
            <b>{todo.id}: </b>
            {todo.title}
          </div>
        ))
      ) : (
        <h1>Not found</h1>
      )}
    </div>
  );
}
export { App };
