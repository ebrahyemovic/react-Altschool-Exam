import { useState } from "react";

function useCounter (val) {
  const [count, setCount] = useState(val);
  
  const Increment = () => {
    setCount(count + 1)
  }

  const Decrement = () => {
    setCount(count - 1)
  }

  const Reset = () => {
    setCount(0)
  }

  return [count, Reset, Increment, Decrement, setCount]
 
}

export default useCounter;

