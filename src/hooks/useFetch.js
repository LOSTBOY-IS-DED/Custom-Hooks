import { useState, useEffect } from "react";
import axios from "axios";

//gtcf

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

//App.jsx code for playing with this

// import { useState } from "react";
// import "./App.css";
// import { useFetch } from "./hooks/useFetch";

// function App() {
//   const [button, setButton] = useState(1);

//   const { data, loading, error } = useFetch(
//     `https://jsonplaceholder.typicode.com/todos/${button}`
//   );

//   if (loading) return <h1>Loading ...</h1>;
//   if (error) console.log(error);

//   return (
//     <>
//       <div>
//         <button
//           onClick={() => {
//             setButton(1);
//           }}
//         >
//           1
//         </button>
//         <button
//           onClick={() => {
//             setButton(2);
//           }}
//         >
//           2
//         </button>
//         <button
//           onClick={() => {
//             setButton(3);
//           }}
//         >
//           3
//         </button>
//         <h1>{data?.title}</h1>
//       </div>
//     </>
//   );
// }

// export default App;
