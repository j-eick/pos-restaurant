import { useCustomerOrders } from "@/app/context/CustomerOrderProvider";
import { Text } from "../text";
import Link from "next/link";
import { Button } from "../button";
import { useState } from "react";
import { SubHeader } from "../subHeading";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";

export function Heading() {
  const { customerOrder, setCustomerOrder } = useCustomerOrders();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setIsCategoryOpen(!isCategoryOpen);
  });

  return (
    <>
      <header className="fixed z-50 w-full bg-white shadow-md">
        <ul role="list" className="h-16 flex justify-around">
          <li className="relative h-full flex justify-center">
            <Button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="curser-pointer">
              <Text tag={"p"} weight="bold" className="leading-[20px] h-full flex items-center justify-center italic">
                category
              </Text>
            </Button>
          </li>
          <li className="relative flex items-end justify-center h-full">
            <div className="relative z-20 w-12 h-12">
              {customerOrder.length !== 0 ? (
                <Link href="/menu/order">
                  <span
                    className="absolute z-20 bottom-5 h-7 w-7  bg-custom-peach-dark  rounded-full 
                         left-1/2 -translate-x-1/2 grid place-items-center"
                  >
                    {customerOrder.length}
                  </span>
                  <img
                    src="bowl.svg"
                    alt=""
                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl"
                  />
                </Link>
              ) : (
                <div className="">
                  <Text
                    tag="p"
                    weight="bold"
                    className="absolute z-20 px-2 bottom-7 left-1/2 -translate-x-1/2 rounded -rotate-12"
                  >
                    empty
                  </Text>
                  <img
                    src="bowl.svg"
                    alt=""
                    className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                  />
                </div>
              )}
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
