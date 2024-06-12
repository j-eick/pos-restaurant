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

  useEffect(() => {
    console.log(isCategoryOpen);
  }, [isCategoryOpen]);

  return (
    <>
      <header className="fixed z-50 w-full bg-primary-gray shadow-dishCard_shallow">
        <ul role="list" className="h-16 flex justify-around">
          <li className="relative h-full w-3/12 flex justify-center">
            <Button onClick={subHeaderHandler} className="w-full curser-pointer">
              <Text
                tag={"p"}
                size="lg"
                weight="bold"
                className="leading-[20px] flex items-center justify-center italic"
              >
                pick a category
              </Text>
            </Button>
          </li>
          <li className="relative w-3/12 flex items-end justify-center h-full">
            <div className="relative z-20 w-12 h-12">
              <Bowl />
            </div>
          </li>
        </ul>
      </header>
      <div ref={ref}>
        <SubHeader isCategoryOpen={isCategoryOpen} />
      </div>
    </>
  );
}
