"use client";

import { Text } from "@/app/components/ui/text";
import { Button } from "@/app/components/ui/button";
import { OrderList } from "@/app/components/ui/orderList";
import { LinkCo } from "@/app/components/ui/link";
import { IoIosArrowBack } from "react-icons/io";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function CustomerOrders() {
  const margin_tb = "mt-10 mb-10";

  return (
    <main>
      <header className="relative w-full h-16 bg-slate-200 flex justify-center items-center">
        <LinkCo href={"/menu"} className="absolute top-1/2 -translate-y-1/2 left-3">
          <IoIosArrowBack className="text-lg" />
        </LinkCo>
        <Text tag="h1" size="lg" weight="semibold">
          overview
        </Text>
      </header>
      <OrderList />
      <footer className="w-full flex justify-center">
        <Button className={`${margin_tb} border-2`}>Place Order</Button>
      </footer>
    </main>
  );
}
