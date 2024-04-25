import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProp = {
  children: ReactNode;
  variant: "menuNav";
  className?: string;
};

export const Button = ({ children, variant, className }: ButtonProp) => {
  const hover = {
    red: `transition-all hover:bg-red-hover`,
  };

  const styles = {
    menuNav: `px-5 py-5 bg-red rounded-xl cursor-pointer ${hover.red}`,
  };

  return (
    <button className={twMerge(`${styles[variant]} ${className}`)}>
      {children}
    </button>
  );
};
