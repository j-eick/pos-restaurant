import { MouseEvent } from "react";

type RemoveIconProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function RemoveIcon({ onClick }: RemoveIconProps) {
  return (
    <button onClick={onClick} className="absolute top-0 w-5 h-5 -translate-y-3 font-bold cursor-pointer">
      X
    </button>
  );
}
