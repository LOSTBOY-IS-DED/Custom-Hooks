import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) return <h1>Loading ...</h1>;
  if (error) console.log(error);

  return (
    <>
      <div>
        <h1>{data?.title}</h1>
      </div>
    </>
  );
}

export default App;
