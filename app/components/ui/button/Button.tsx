import React, { MouseEvent, ReactNode, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProp = {
  children: ReactNode;
  type?: "regular" | "placeOrder" | "addItem";
  size?: string;
  color?: "peach" | "green";
  className?: string;
  href?: "/menu" | "/order-summary";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isClicked?: boolean;
  setIsClicked?: (value: boolean) => void;
  disabled?: boolean;
  hidden?: boolean;
  count?: number;
};

export const Button = ({
  children,
  size = "md",
  type,
  color,
  onClick,
  isClicked,
  setIsClicked,
  className,
  disabled,
  hidden,
  count,
}: ButtonProp) => {
  const transition50 = "before:w-1/2 before:animate-placeOrder50";
  const transitionFull = "before:w-full before:animate-placeOrder100";

  const buttonType = useMemo(() => {
    switch (type) {
      case "regular":
        return `w-[auto] h-[auto] p-2
        border-2 rounded-xs`;

      case "placeOrder":
        return `relative w-2/4 h-5/5 mb-12 px-5 py-5 flex items-center justify-center gap-3 overflow-hidden  
                rounded-sm bg-slate-200 cursor-pointer 
                before:absolute before:z-10 before:bg-slate-500 before:bottom-0 before:left-0 before:h-1 before:transition-all
                ${count === 0 ? "" : count === 1 ? transition50 : count === 2 ? transitionFull : ""}
                
                `;

      case "addItem":
        return `flex items-center justify-center w-2/4 h-5/5 gap-3 shadow-dishOrder rounded-lg`;

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
    <button
      className={twMerge(
        `${buttonSize} ${buttonColor} ${buttonType} ${className} ${isClicked} ${setIsClicked} ${disabled} ${hidden}`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
