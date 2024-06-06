import { Text } from "../text";
import Link from "next/link";
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
    setIsCategoryOpen(!isCategoryOpen);
  });

  useEffect(() => {
    console.log("orderlist:");
    console.log(allOrders);
  }, [allOrders]);

  return (
    <>
      <header className="fixed z-50 w-full bg-primary shadow-md">
        <ul role="list" className="h-16 flex justify-around">
          <li className="relative h-full flex justify-center">
            <Button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="curser-pointer">
              <Text
                tag={"p"}
                size="lg"
                weight="bold"
                className="leading-[20px] h-full flex items-center justify-center italic"
              >
                pick a category
              </Text>
            </Button>
          </li>
          <li className="relative flex items-end justify-center h-full">
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
