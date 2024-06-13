import { drinkItems, menuItems } from "@/app/lib/menu";
import { Text } from "../text/Text";
import useOrderStore from "@/app/hooks/useOrderStore";
import { useState } from "react";
import { CategoryProps } from "@/app/lib/types";

type SideMenuProps = {
  isOpen?: boolean;
  inView?: boolean;
  highlight?: string;
};

export const SideMenu = ({ isOpen, inView, highlight }: SideMenuProps) => {
  const selectedCategory = useOrderStore((state) => state.selectedCategory);
  const [sidePenu, setSidePane] = useState<CategoryProps>("");
  const show = "translate-x-0 transition-all duration-300 ease-in-out";
  const hide = "translate-x-[-100%] transition-all duration-300 ease-in-out";

  const openClose = `fixed z-30 top-1/2 -translate-y-[45%] w-8/12 h-4/5
      rounded-r-md pt-14 pb-14 pl-4 backdrop-blur-lg bg-opacity-60 bg-[#8aa0c1]
      ${isOpen ? show : hide}`;

  return (
    <aside className={openClose}>
      <div className="relative h-full">
        <ul className="h-full flex flex-col gap-3 pt-2 pb-2 overflow-auto">
          {selectedCategory === "drink" &&
            drinkItems.map((item) => (
              <li key={item.id}>
                {highlight === item.title ? (
                  <Text tag="p" weight="bold" className="pl-3 text-[18px] text-zinc-100">
                    {item.title}
                  </Text>
                ) : (
                  <Text tag="p" size="regular" weight="semibold" className="pl-3 text-gray-600">
                    {item.title}
                  </Text>
                )}
              </li>
            ))}
          {selectedCategory === "food" &&
            menuItems.map((item) => (
              <li key={item.id}>
                {highlight === item.title ? (
                  <Text tag="p" weight="bold" className="pl-3 text-[18px] text-zinc-100">
                    {item.title}
                  </Text>
                ) : (
                  <Text tag="p" size="regular" weight="semibold" className="pl-3 text-gray-600">
                    {item.title}
                  </Text>
                )}
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};
