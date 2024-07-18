import { useEffect, useState } from "react";

/**
 * @params - time
 * @returns countdown
 */
export function useCountdownTimer(time: number): number {
  const [countDown, setCountdown] = useState(time);

  useEffect(() => {
    // console.log(countDown);
    const timerID = setInterval(() => {
      if (countDown > 0) setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerID);
  }, [countDown]);

  return countDown;
}
