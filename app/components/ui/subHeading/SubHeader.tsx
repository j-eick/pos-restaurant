import { useEffect } from "react";

export function SubHeader({ isCategoryOpen }: { isCategoryOpen: boolean }) {
  const slideIn = "transition-all ease-in-out duration-300 translate-y-16";
  const start = "transition-all ease-in duratin-300 translate-y-0";

  useEffect(() => {
    console.log(isCategoryOpen);
  }, [isCategoryOpen]);

  return (
    // <div className="w-full bg-red-200">
    // ${isCategoryOpen ? slideIn : start}
    <ul
      className={`absolute z-20 w-full mx-auto my-0 mt-5 flex flex-row justify-evenly border-2 ${isCategoryOpen ? slideIn : start}`}
    >
      <li className="py-1">Drinks</li>
      <li className="py-1">Dishes</li>
      <li className="py-1">Dessert</li>
    </ul>
    // </div>
  );
}
