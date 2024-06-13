import { create } from "zustand";
import { DishProps } from "../lib/menu";

type OrderState = {
  orderList: DishProps[];
  addOrder: (newDish: DishProps) => void;
  clearList: () => void;
  selectedCategory: "" | "drink" | "food" | "dessert";
  changeCategory: (category: "" | "drink" | "food" | "dessert") => void;
};

const useOrderStore = create<OrderState>()((set) => ({
  orderList: [],
  selectedCategory: "drink",
  changeCategory: (category) => set(() => ({ selectedCategory: category })),
  addOrder: (newDish) => set((state) => ({ orderList: [...state.orderList, newDish] })),
  clearList: () => set(() => ({ orderList: [] })),
}));

export default useOrderStore;
