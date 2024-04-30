import React, { ReactNode, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProp = {
  children: ReactNode;
  size: string;
  color?: "peach" | "green";
  className?: string;
  href?: "/menu" | "/order-summary";
  onClick?: () => void;
};

export const Button = ({ children, size = "md", color, onClick, className }: ButtonProp) => {
  const hover = {
    red: `transition-all hover:bg-red-hover`,
  };

  const buttonSize = useMemo(() => {
    switch (size) {
      case "sm":
        return "";
      case "md":
        return "w-16 h-16";
      case "lg":
        return "w-[4.5rem] h-[4.5rem]";

      default:
        return "p-3 border-2";
    }
  }, []);

  const buttonColor = useMemo(() => {
    switch (size) {
      case "peach":
        return "bg-custom-peach";
      case "green":
        return "bg-custom-green";

      default:
    }
  }, []);

  return (
    <button className={twMerge(`${buttonSize} ${buttonColor} ${className}`)} onClick={onClick}>
      {children}
    </button>
  );
};
