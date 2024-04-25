import Link from "next/link";
import { ReactNode, useMemo } from "react";

type LinkProp = {
  children: ReactNode;
  href: "" | "/menu" | "/order-summary";
  className?: string;
  variant?: "" | "menuLink";
};

export const LinkCo = ({ children, href = "", className, variant = "" }: LinkProp) => {
  const style = useMemo(() => {
    const hover = {
      red: `transition-all hover:bg-red-hover`,
    };

    switch (variant) {
      case "menuLink":
        return `px-5 py-5 bg-red rounded-xl cursor-pointer ${hover.red}`;

      default:
        return "px-3 py-3 bg-gray-200 rounded-xl";
    }
  }, []);

  return (
    <Link href={href} className={`${style} ${className}`}>
      {children}
    </Link>
  );
};
