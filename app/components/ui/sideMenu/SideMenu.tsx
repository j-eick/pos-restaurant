import { drinkItems, foodItems } from "@/app/lib/menu";
import { Text } from "../text/Text";
import useOrderStore from "@/app/hooks/useOrderStore";
import { useState, MouseEvent, TouchEvent } from "react";
import { CategoryProps } from "@/app/lib/types";
import { tapAndClickProps } from "@/app/lib/types";
import { Button } from "../button";

type SideMenuProps = {
  isOpen?: boolean;
  inView?: boolean;
  highlight?: string;
  href: string;
};

export const SideMenu = ({ isOpen, inView, highlight, href }: SideMenuProps) => {
  const selectedCategory = useOrderStore((state) => state.selectedCategory);
  const [sidePenu, setSidePane] = useState<CategoryProps>("");
  const show = "translate-x-0 transition-all duration-300 ease-in-out";
  const hide = "translate-x-[-100%] transition-all duration-300 ease-in-out invisible";
  const store = useOrderStore();

  const openClose = `fixed z-30 top-1/2 -translate-y-[45%] w-8/12 h-4/5
      rounded-r-sm pb-14 pt-14 pl-4 backdrop-blur-lg bg-opacity-60 bg-[#8aa0c1]
      ${isOpen ? show : hide}`;

  const anchorHandler = (e: tapAndClickProps) => {
    e.preventDefault();
  };

  const clearOrderHandler = () => {
    store.clearList();
  };

  return (
    <aside className={`${openClose} pr-5 border`}>
      <div className="relative h-full">
        <ul className="h-full flex flex-col gap-3 pt-2 pb-2 overflow-auto">
          {selectedCategory === "drink" &&
            drinkItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.ident}`} onClick={anchorHandler}>
                  {highlight === item.title ? (
                    <Text tag="p" weight="bold" className="pl-3 text-[18px] text-zinc-100">
                      {item.title}
                    </Text>
                  ) : (
                    <Text tag="p" size="regular" weight="semibold" className="pl-3 text-gray-600">
                      {item.title}
                    </Text>
                  )}
                </a>
              </li>
            ))}
          {selectedCategory === "food" &&
            foodItems.map((item) => (
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
      <div className="flex justify-end">
        <Button type="clearOrders--sideMenu" onClick={clearOrderHandler}>
          <div className="w-32 flex ">
            <span>{store.selectedItems.length >= 2 ? "clear orders" : "clear order"}</span>
          </div>
          <span
            className={`absolute w-10 h-10 py-1 right-0 flex items-center justify-center
                            top-1/2 -translate-y-1/2
                           bg-slate-300 rounded-lg border border-black`}
          >
            {store.selectedItems.length}
          </span>
        </Button>
      </div>
    </aside>
  );
};
