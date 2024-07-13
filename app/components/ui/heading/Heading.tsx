import { Text } from "../text";
import { Button } from "../button";
import { useEffect, useState } from "react";
import { SubHeader } from "../subHeading";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import useOrderStore from "@/app/hooks/useOrderStore";
import { Bowl } from "../icon";

export function Heading() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const allOrders = useOrderStore((state) => state.orderList);

  const ref = useOutsideClick(() => {
    if (isCategoryOpen) {
      setIsCategoryOpen(!isCategoryOpen);
    }
  });

  const subHeaderHandler = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="relative">
      <header
        className={`fixed top-0 w-full max-w-3xl z-50 left-1/2 -translate-x-1/2 bg-primary-gray shadow-dishCard_shallow `}
      >
        <ul role="list" className="h-16 flex justify-around ">
          <li
            className={`relative h-full w-6/12 flex justify-center 
                          xs:w-4/12`}
          >
            <Button onClick={subHeaderHandler} className="w-full curser-pointer">
              <Text
                tag={"p"}
                size="lg"
                weight="bold"
                color={`${!isCategoryOpen ? "secondary" : "light"}`}
                className="leading-[20px] flex items-center justify-center italic translate-all duration-500"
              >
                pick a category
              </Text>
            </Button>
          </li>
          <li className="relative h-full w-6/12 flex items-end justify-center">
            <div className="relative z-20 w-12 h-12">
              <Bowl />
            </div>
          </li>
        </ul>
      </header>
      <div ref={ref} className="fixed z-20 h-12 w-full ">
        <SubHeader isCategoryOpen={isCategoryOpen} />
      </div>
    </div>
  );
}
