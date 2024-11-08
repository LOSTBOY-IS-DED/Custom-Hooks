// It is supposed to show you the prev value of a state variable
// as a value of a state variable changes

import { useEffect, useRef } from "react";

// step 1 : initialize a ref
// step 2 : return the current value
// step 3 : run a use effect

// Note : I am returning it first then i am updating the value and when ref value updates it doesn't triggers a rerender
// NOTE : It returns first then the effect will be called (property of react);

export function usePrev(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
