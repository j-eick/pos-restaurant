import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const handleAdd = () => setCount((prev) => count + 1);
  const handleSubtract = () => setCount((prev) => count - 1);
  const handleReset = () => setCount((prev) => 0);

  return [
    count,
    {
      add: handleAdd,
      subtract: handleSubtract,
      reset: handleReset,
    },
  ];
};
