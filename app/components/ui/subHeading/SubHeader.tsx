import { useEffect } from "react";
import Image from "next/image";

export function SubHeader({ isCategoryOpen }: { isCategoryOpen: boolean }) {
  const slideIn = "transition-all ease-in-out duration-300 translate-y-16";
  const start = "transition-all ease-in duratin-300 translate-y-0";

  useEffect(() => {
    console.log(isCategoryOpen);
  }, []);

  return (
    // <div className="w-full bg-red-200">
    // ${isCategoryOpen ? slideIn : start}
    <ul
      className={`fixed z-20 w-full mx-auto my-0 mt-5 flex flex-row justify-evenly 
      bg-primary-lightgray text-primary italic
      ${isCategoryOpen ? slideIn : start}`}
    >
      <li className="py-1">Drink</li>
      <li className="py-1">Dish</li>
      <li className="py-1">Dessert</li>
    </ul>
    // </div>
  );
}
