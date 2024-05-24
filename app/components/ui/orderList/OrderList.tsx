// import { useCustomerOrders } from "@/app/context/CustomerOrderProvider";
import { useEffect, useId } from "react";
import useOrderStore from "@/app/hooks/useOrderStore";
import { exampleOrder } from "@/app/lib/exampleOrder";
import { Text } from "../text";

export function OrderList() {
  const orderList = useOrderStore((state) => state.orderList);

  useEffect(() => {
    console.log(orderList);
  }, []);

  return (
    <main className="flex justify-center">
      <ul className="w-4/5 flex flex-col mt-5 mb-5 align-middle gap-5  bg-red-300">
        {exampleOrder.map((item, i) => (
          <li key={i} className="inline-flex flex-col border-2 border-slate-400">
            <span className="inline-block">#{item.id}</span>
            <Text tag="p">{item.title}</Text>
          </li>
        ))}
      </ul>
    </main>
  );
}
