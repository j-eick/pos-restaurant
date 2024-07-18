import { Text } from "../text";
import { useCountdownTimer } from "@/app/hooks/useCountDownTimer";

export function Countdown() {
  const countDown = useCountdownTimer(5);

  return (
    <Text tag="p" size="sm" color="tertiary" className="w-max mx-auto my-0 flex">
      checking out in... <div className="px-1 font-bold">{countDown}</div>
    </Text>
  );
}
