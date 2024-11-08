// import { useState } from "react";
import "./App.css";
// import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebounceHook";
// import { useFetch } from "./hooks/useFetch";
// import { useTimeFetch } from "./hooks/useTimeFetch";

function App() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <>
      <div>
        <input onChange={debouncedFn} type="search" />
      </div>
    </>
  );
}

export default App;
