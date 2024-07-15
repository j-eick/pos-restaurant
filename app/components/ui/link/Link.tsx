import Link from "next/link";
import { ReactNode, useMemo } from "react";

type LinkProp = {
  children: ReactNode;
  href: "" | "/" | "/menu" | "/order-summary" | "/complete";
  className?: string;
  variant?: "" | "menuLink" | "placeOrderLink" | "complete_navButtons" | "small" | "medium";
  blur?: "light" | "medium" | "strong";
  onClick?: () => void;
};

export const LinkCo = ({ children, href = "", className, variant, blur, onClick }: LinkProp) => {
  const style = useMemo(() => {
    const hover = {
      peach: `transition-all 
              hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-slate-100
              active:outline active:outline-2 active:outline-offset-4 active:outline-slate-100`,
      order: `transition-all bg-slate-200 hover:bg-custom-peach
      active:outline active:outline-2 active:outline-offset-4 active:outline-slate-100`,
    };

    switch (variant) {
      case "menuLink":
        return `h-16 w-max px-3 flex items-center 
                bg-custom-peach rounded-sm cursor-pointer ${hover.peach}
                  `;

      case "placeOrderLink":
        return `px-5 py-5 rounded-sm cursor-pointer ${hover.order}`;

      case "complete_navButtons":
        return `w-full py-5 cursor-pointer text-center`;

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
    <Link href={href} onClick={onClick} className={`${style} ${variant} ${className}`}>
      {children}
    </Link>
  );
};
