"use client";

import { Button } from "@/app/components/ui/button";
import { OrderList } from "@/app/components/ui/orderList";
import { LinkCo } from "@/app/components/ui/link";
import { IoIosArrowBack } from "react-icons/io";

export default function CustomerOrders() {
  return (
    <main>
      <header className="relative w-full h-20 bg-slate-200 flex flex-col justify-center items-center">
        <LinkCo href={"/menu"} className="absolute top-1/2 -translate-y-1/2 left-3">
          <IoIosArrowBack />
        </LinkCo>
        <div className="">Your Orders</div>
      </header>
      <OrderList />
      <footer className="w-full flex justify-center">
        <Button className="border-2">Place Order</Button>
      </footer>
    </main>
  );
}
