import { useEffect, useState } from "react";

export function SubHeader({ isCategoryOpen }: { isCategoryOpen: boolean }) {
  // const [hide, setHide] = useState("transition-all ease-in duratin-300 translate-y-0");
  // const [slideIn, setSlideIn] = useState("transition-all ease-in-out duration-300 translate-y-16");
  const slideIn = "transition-all ease-in-out duration-300 translate-y-16";
  const hide = "transition-all ease-in duratin-300 translate-y-0";

  useEffect(() => {
    console.log(isCategoryOpen);
  }, [isCategoryOpen]);

  return (
    <ul
      className={`fixed z-20 h-12 w-full mx-auto my-0 flex flex-row justify-evenly items-center
      bg-primary-lightgray text-primary italic
      ${isCategoryOpen ? slideIn : hide}`}
    >
      <li className="py-1">Drink</li>
      <li className="py-1">Dish</li>
      <li className="py-1">Dessert</li>
    </ul>
  );
}
