import React, { MouseEvent, ReactNode, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProp = {
  children: ReactNode;
  type?: "regular";
  size?: string;
  color?: "peach" | "green";
  className?: string;
  href?: "/menu" | "/order-summary";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ children, size = "md", type = "regular", color, onClick, className }: ButtonProp) => {
  const hover = {
    red: `transition-all hover:bg-red-hover`,
  };

  const buttonType = useMemo(() => {
    switch (type) {
      case "regular":
        return `w-[auto] h-[auto] p-2
        border-2 rounded-xs`;

      default:
        break;
    }
  }, [type]);

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
    <button className={twMerge(`${buttonSize} ${buttonColor} ${buttonType} ${className}`)} onClick={onClick}>
      {children}
    </button>
  );
};
