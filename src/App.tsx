import { todoService } from "./services/todo.service";

function App() {

  const {isLoading, error, data} = todoService()

  return (
    <div>
    {error && <div>{error.message}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <h1>{data.data.title}</h1>
      ) : (
        <h1>Not found</h1>
      )}
    </div>
  );
}

export default App;
