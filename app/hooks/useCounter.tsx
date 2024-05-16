import { useState } from "react";

export const useCounter = <T extends { add: () => void; subtract: () => void; reset: () => void }>(
  initialValue = 0
): [number, T] => {
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
    } as T,
  ];
};
