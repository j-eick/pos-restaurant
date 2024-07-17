import useOrderStore from "@/app/hooks/useOrderStore";
import { useEffect } from "react";
import { Button } from "../button";

export function SubHeader({ isCategoryOpen }: { isCategoryOpen: boolean }) {
  const selectedCategory = useOrderStore((state) => state.selectedCategory);
  const changeCategory = useOrderStore((state) => state.changeCategory);

  const slideIn = "transition-all ease-in-out duration-300 translate-y-16 sm:translate-y-20";
  const hide = "transition-all ease-in duratin-300 -translate-y-0";

  const selected = "font-bold text-regular sm:text-lg";

  const handleChangeCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.textContent?.toLowerCase();
    console.log(category);

    if (category === "drink" || category === "food" || category === "dessert") {
      changeCategory(category);
    } else {
      throw Error("somethings wrong");
    }
  };

  return (
    <ul
      className={`flex flex-row h-10 justify-evenly items-center
      bg-primary-lightgray text-primary italic
      ${isCategoryOpen ? slideIn : hide}
      sm:h-14 sm:text-lg`}
    >
      <li className={`py-1 ${selectedCategory === "drink" && selected}`}>
        <Button onClick={(e) => handleChangeCategory(e)}>Drink</Button>
      </li>
      <li className={`py-1 ${selectedCategory === "food" && selected}`}>
        <Button onClick={(e) => handleChangeCategory(e)}>Food</Button>
      </li>
      <li className={`py-1 ${selectedCategory === "dessert" && selected}`}>
        <Button onClick={(e) => handleChangeCategory(e)}>Dessert</Button>
      </li>
    </ul>
  );
}
