import { ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { DishProps } from "../lib/menu";

type customerOrderProps = Pick<DishProps, "title">;

type OrderContextProps = {
  customerOrder: customerOrderProps[];
  setCustomerOrder: React.Dispatch<SetStateAction<customerOrderProps[]>>;
};

export const CustomerOrders = createContext<OrderContextProps | null>(null);

export const CustomerOrderProvider = ({ children }: { children: ReactNode }) => {
  const [customerOrder, setCustomerOrder] = useState<customerOrderProps[]>([]);

  return <CustomerOrders.Provider value={{ customerOrder, setCustomerOrder }}>{children}</CustomerOrders.Provider>;
};

export const useCustomerOrders = () => {
  const context = useContext(CustomerOrders);

  if (!context) {
    throw new Error("useCustomerOrder must be used within a CustomerOrderProvider");
  }
  return context;
};
