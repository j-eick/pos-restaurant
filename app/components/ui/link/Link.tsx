import Link from "next/link";
import { ReactNode, useMemo } from "react";

type LinkProp = {
  children: ReactNode;
  href: "" | "/menu" | "/order-summary";
  className?: string;
  variant?: "" | "menuLink" | "small" | "medium";
  blur?: "light" | "medium" | "strong";
};

export const LinkCo = ({ children, href = "", className, variant = "", blur }: LinkProp) => {
  const style = useMemo(() => {
    const hover = {
      // peach: `transition-all hover:bg-custom-peach-dark`,
      // outline outline-2 outline-offset-4 outline-slate-100
      peach: `transition-all hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-slate-100
      active:outline active:outline-2 active:outline-offset-4 active:outline-slate-100`,
    };

    switch (variant) {
      case "menuLink":
        return `px-5 py-5 bg-custom-peach rounded-sm cursor-pointer ${hover.peach}`;

      case "small":
        return `px-5 py-5 bg-red rounded-xl cursor-pointer ${hover.peach}`;

      case "medium":
        return `px-5 py-5 bg-custom-peach rounded-xl cursor-pointer ${hover.peach}`;

      default:
        return "px-3 py-3 bg-gray-200 rounded-xl";
    }
  }, [variant]);

  const bg_blur = useMemo(() => {
    switch (blur) {
      case "light":
        return "backdrop-blur-sm";
      case "medium":
        return "backdrop-blur-md";
      case "strong":
        return "backdrop-blur-lg";

      default:
        return "";
    }
  }, [blur]);

  return (
    <div className={`${bg_blur}`}>
      <Link href={href} className={`${style} ${className}`}>
        {children}
      </Link>
    </div>
  );
};
