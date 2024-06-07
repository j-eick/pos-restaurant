"use client";

import { Text } from "@/app/components/ui/text";
import { Button } from "@/app/components/ui/button";
import { OrderList } from "@/app/components/ui/orderList";
import { LinkCo } from "@/app/components/ui/link";
import { IoIosArrowBack } from "react-icons/io";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function CustomerOrders() {
  function placeOrderHandler() {
    console.log("asd");
  }

  const margin_tb = "mt-10 mb-10";

  return (
    <main>
      <header className="relative w-full h-16 bg-slate-300 flex justify-center items-center">
        <LinkCo href={"/menu"} className="absolute top-1/2 -translate-y-1/2 left-3 bg-transparent">
          <IoIosArrowBack className="text-lg" />
        </LinkCo>
        <Text tag="h1" size="lg" weight="semibold">
          overview
        </Text>
      </header>
      <OrderList />
      <div className="w-full mt-10 flex">
        <Button type="regular" onClick={placeOrderHandler} className="mx-auto my-0">
          Place Order
        </Button>
      </div>
    </main>
  );
}
