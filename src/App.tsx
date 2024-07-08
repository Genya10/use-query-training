import { useIsFetching, useQueryClient} from "@tanstack/react-query";
import { useTodos } from "./hooks/useTodos";
import { SyntheticEvent, useState } from "react";
import { usePost } from "./hooks/usePost";

function App() {
  const { isLoading, error, data } = useTodos();
  const [title, setTitle] = useState("");

  const countFetching = useIsFetching()//показывает кол-во активных запросов

  const {mutate} = usePost()

  const queryClient = useQueryClient();

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(title);
    setTitle('')
    mutate(title);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
      }}
    >
      <div>
        {!!countFetching && <h3>Is fetching...</h3>}
        <h2>Create todo:</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter todo title"
          />
          <button type="submit">Create</button>
        </form>
      </div>
      <div>
        {error && <div>{error.message}</div>}
        {/*<button onClick={() => queryClient.invalidateQueries(["todos"])}>
          Refresh
        </button>*/}
        <h1>Todos:</h1>
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
    </div>
  );
}
export { App };
