// import { useCustomerOrders } from "@/app/context/CustomerOrderProvider";
import { useEffect, useId } from "react";

export function OrderList() {
  // const { customerOrder, setCustomerOrder } = useCustomerOrders();
  const id = useId();

  useEffect(() => {
    // console.log(customerOrder);
  }, []);

  return (
    <ul>
      {/* {customerOrder.map((item) => (
        <li key={id}>{item.title}</li>
      ))} */}
    </ul>
  );
}
