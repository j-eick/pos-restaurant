import React, { ReactNode, useMemo } from "react";

type TextProp = {
  children: ReactNode;
  tag: "p" | "h1" | "h2" | "h3";
  color?: "primary" | "secondary" | "tertiary" | "light";
  size?: "xs" | "sm" | "regular" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "thin" | "verylight" | "light" | "regular" | "medium" | "semibold" | "bold" | "extrabold" | "thick";

  className?: string;
};

export const Text = ({
  tag = "p",
  color = "primary",
  size = "regular",
  weight = "regular",
  className,
  children,
}: TextProp) => {
  const textcolor = useMemo(() => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "tertiary":
        return "text-tertiary";
      case "light":
        return "text-light";

      default:
        return "text-primary";
    }
  }, [color]);

  const textsize = useMemo(() => {
    switch (size) {
      case "xs":
        return "text-xs leading-5";
      case "sm":
        return "text-sm leading-6";
      case "regular":
        return "text-base leading-7";
      case "lg":
        return "text-lg";
      case "xl":
        return "text-xl";
      case "2xl":
        return "text-2xl";
      case "3xl":
        return "text-3xl";

      default:
        return "text-base";
    }
  }, [size]);

  const textWeight = useMemo(() => {
    switch (weight) {
      case "thin":
        return "font-thin";
      case "verylight":
        return "font-verylight";
      case "light":
        return "font-light";
      case "regular":
        return "font-regular";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      case "extrabold":
        return "font-extrabold";
      case "thick":
        return "font-thick";
      default:
        return "font-400";
    }
  }, [weight]);

  return React.createElement(tag, { className: `${textcolor} ${textsize} ${textWeight} ${className}` }, children);
};
