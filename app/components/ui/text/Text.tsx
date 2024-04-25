import React, { ReactNode } from "react";

type TextProp = {
  children: ReactNode;
  tag: "p" | "h1" | "h2" | "h3";
  className?: string;
  ref?: React.Ref<HTMLElement>;
};

export const Text = ({ tag, className, ref, children }: TextProp) => {
  return React.createElement(tag, { ref, className }, children);
};
