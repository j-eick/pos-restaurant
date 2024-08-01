import { Text } from "../text";
import { Button } from "../button";
import { useEffect, useState } from "react";
import { SubHeader } from "../subHeading";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import { Bowl } from "../icon";

export function Heading() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const ref = useOutsideClick(() => {
    if (isCategoryOpen) {
      setIsCategoryOpen(!isCategoryOpen);
    }
  });

  const subHeaderHandler = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <>
      <header
        className={`fixed z-50 w-full h-16 max-w-3xl top-0 left-1/2 -translate-x-1/2 bg-primary-gray shadow-dishCard_shallow 
                    sm:h-20`}
      >
        <ul role="list" className="h-full flex justify-around items-center">
          <li className={`relative h-full w-6/12 flex justify-center`}>
            <Button onClick={subHeaderHandler} className={`w-8/12 h-full cursor-pointer`}>
              <Text
                tag={"p"}
                size="lg"
                weight="bold"
                color={`${!isCategoryOpen ? "secondary" : "light"}`}
                className="leading-[20px] flex items-center justify-center italic translate-all duration-500 sm:text-2xl"
              >
                pick a category
              </Text>
            </Button>
          </li>
          <li className="h-full w-6/12 flex items-center justify-center translate-y-1">
            <span className="w-1/2" />
            <span className="w-1/2 flex items-end justify-start">
              <Bowl />
            </span>
          </li>
        </ul>
      </header>
      <div ref={ref} className={`fixed z-20 w-full max-w-3xl h-12 left-1/2 -translate-x-1/2`}>
        <SubHeader isCategoryOpen={isCategoryOpen} />
      </div>
    </>
  );
}
