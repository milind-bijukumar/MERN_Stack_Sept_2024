import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return <>Count value: {count}</>;
};

export default Counter;
