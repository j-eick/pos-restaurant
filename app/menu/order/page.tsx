"use client";

import { Text } from "@/app/components/ui/text";
import { OrderList } from "@/app/components/ui/orderList";
import { LinkCo } from "@/app/components/ui/link";
import { IoIosArrowBack } from "react-icons/io";
import { LuConciergeBell } from "react-icons/lu";
import useOrderStore from "@/app/hooks/useOrderStore";

export default function CustomerOrders() {
  const resetOrderList = useOrderStore((state) => state.clearList);
  const orderList = useOrderStore((state) => state.orderList);

  function placeOrderHandler() {
    resetOrderList();
  }

  return (
    <main>
      <header className="relative w-full h-16 flex justify-center items-center">
        <LinkCo
          href={"/menu"}
          className="absolute top-1/2 -translate-y-1/2 left-3 
                          flex gap-3 items-center
                          bg-transparent"
        >
          <IoIosArrowBack className="text-lg" />
          back to menu
        </LinkCo>
      </header>
      <OrderList />
      <div className="w-full mt-20 flex justify-center">
        <LinkCo
          href={"/complete"}
          variant="placeOrderLink"
          onClick={placeOrderHandler}
          className="mb-20 flex items-center gap-3"
        >
          <Text tag="p" weight="semibold">
            Place Order
          </Text>
          <LuConciergeBell className="scale-[130%]" />
        </LinkCo>
      </div>
    </main>
  );
}
