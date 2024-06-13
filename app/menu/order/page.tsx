"use client";

import { Text } from "@/app/components/ui/text";
import { Button } from "@/app/components/ui/button";
import { OrderList } from "@/app/components/ui/orderList";
import { LinkCo } from "@/app/components/ui/link";
import { IoIosArrowBack } from "react-icons/io";
import { BsArrowLeftCircle } from "react-icons/bs";
import { LuConciergeBell } from "react-icons/lu";

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
          wishlist
        </Text>
      </header>
      <OrderList />
      <div className="w-full mt-10 flex justify-center">
        <LinkCo href={""} variant="placeOrderLink" className="flex items-center gap-3">
          <Text tag="p" weight="semibold">
            Place Order
          </Text>
          <LuConciergeBell className="scale-[130%]" />
        </LinkCo>
      </div>
    </main>
  );
}
