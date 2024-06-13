import useOrderStore from "@/app/hooks/useOrderStore";
import { useEffect } from "react";
import { Button } from "../button";

type CategoryProps = {
  category: "drink" | "food" | "dessert";
};

export function SubHeader({ isCategoryOpen }: { isCategoryOpen: boolean }) {
  const selectedCategory = useOrderStore((state) => state.selectedCategory);
  const changeCategory = useOrderStore((state) => state.changeCategory);

  const slideIn = "transition-all ease-in-out duration-300 translate-y-16";
  const hide = "transition-all ease-in duratin-300 translate-y-0";

  const selected = "font-semibold text-regular";

  const handleChangeCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.textContent?.toLowerCase();
    console.log(category);

    if (category === "drink" || category === "food" || category === "dessert") {
      changeCategory(category);
    } else {
      throw Error("somethings wrong");
    }
  };

  useEffect(() => {
    // console.log(isCategoryOpen);
  }, [isCategoryOpen]);

  return (
    <ul
      className={`fixed z-20 h-12 w-full mx-auto my-0 flex flex-row justify-evenly items-center
      bg-primary-lightgray text-primary italic
      ${isCategoryOpen ? slideIn : hide}`}
    >
      <li className={`py-1 ${selectedCategory === "drink" && selected}`}>
        <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleChangeCategory(e)}>Drink</Button>
      </li>
      <li className={`py-1 ${selectedCategory === "food" && selected}`}>
        <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleChangeCategory(e)}>Food</Button>
      </li>
      <li className={`py-1 ${selectedCategory === "dessert" && selected}`}>
        <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleChangeCategory(e)}>Dessert</Button>
      </li>
    </ul>
  );
}
