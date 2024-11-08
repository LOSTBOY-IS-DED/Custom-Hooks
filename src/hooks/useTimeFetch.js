// Let's write a logic to hit the backend automatically every 10 seconds

import axios from "axios";
import { useEffect, useState } from "react";

export function useTimeFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch data inside the hook
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // initial fetch

    const intervalId = setInterval(fetchData, 10000); // Fetch every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [url]); // only trigger on URL change

  return { data, loading, error };
}

//code for App.jsx

// import { useState } from "react";
// import "./App.css";
// // import { useFetch } from "./hooks/useFetch";
// import { useTimeFetch } from "./hooks/useTimeFetch";

// function App() {
//   const [button, setButton] = useState(1);

//   const { data, loading, error } = useTimeFetch(
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
