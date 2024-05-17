"use client";

import { Button } from "@/app/components/ui/button";
import { OrderList } from "@/app/components/ui/orderList";
import { LinkCo } from "@/app/components/ui/link";

export default function CustomerOrders() {
  return (
    <main>
      <header className="w-full bg-slate-200 flex justify-center gap-5">
        <LinkCo href={"/menu"}>back</LinkCo>
        heading
      </header>
      <OrderList />
      <footer className="w-full flex justify-center border-2">
        <Button className="border-2">Place Order</Button>
      </footer>
    </main>
  );
}
