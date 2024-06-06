import useOrderStore from "@/app/hooks/useOrderStore";
import Link from "next/link";
import { Text } from "../text";

export function Bowl() {
  const allOrders = useOrderStore((state) => state.orderList);

  return (
    <>
      {allOrders.length !== 0 ? (
        <Link href="/menu/order">
          <span
            className="absolute z-20 bottom-5 h-7 w-7  bg-custom-peach-dark  rounded-full 
                         left-1/2 -translate-x-1/2 grid place-items-center"
          >
            {allOrders.length}
          </span>
          <img src="bowl.svg" alt="" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl" />
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
          <img src="bowl.svg" alt="" className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
        </div>
      )}
    </>
  );
}
