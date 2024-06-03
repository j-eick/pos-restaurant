import { create } from "zustand";
import { DishProps } from "../lib/menu";

type OrderState = {
  orderList: DishProps[];
  addOrder: (newDish: DishProps) => void;
  clearList: () => void;
};

const useOrderStore = create<OrderState>()((set) => ({
  orderList: [],
  addOrder: (newDish) => set((state) => ({ orderList: [...state.orderList, newDish] })),
  clearList: () => set((state) => ({ orderList: [] })),
}));

export default useOrderStore;
