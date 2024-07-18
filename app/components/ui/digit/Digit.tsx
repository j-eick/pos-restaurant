import { useCountdownTimer } from "@/app/hooks/useCountDownTimer";
import { useMemo } from "react";

type DigitProps = {
  variant: "" | "placeOrder";
};

export function Digit({ variant }: DigitProps) {
  const countDown = useCountdownTimer(6);

  const digitVariant = useMemo(() => {
    switch (variant) {
      case "placeOrder":
        return "px-1 font-bold animate-pulse";

      default:
        return "";
    }
  }, [variant]);

  return <span className={`${variant}`}>{countDown}</span>;
}
