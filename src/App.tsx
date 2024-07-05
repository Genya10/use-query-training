import { useTodos } from "./hooks/useTodos";

const { isLoading, error, data } = useTodos();

function App() {
  const todoId = 1;

  return (
    <div>
      {error && <div>{error.message}</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : data?.length ? (
        data?.map((todo) => (
          <div>
            <b>{todo.id}:</b>
            {todo.title}
          </div>
        ))
      ) : (
        <h1>Not found</h1>
      )}
    </div>
  );
}

/* return (
    <div>
    {error && <div>{error.message}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <h1>{data?.data.title}</h1>
      ) : (
        <h1>Not found</h1>
      )}
    </div>
  );*/

export { App };
