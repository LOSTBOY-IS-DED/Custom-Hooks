// step 1 : create a function which accept the original funciton
// step 2 : create a clock --> using useRef
// step 3 : write a func to clear the clock --> clearTimeOut
// and call the clock using setTime out --> this will be the value of ref current
// step 4 : return the fn

import { useRef } from "react";

export function useDebounce(originalFn) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, 500);
  };

  return fn;
}
