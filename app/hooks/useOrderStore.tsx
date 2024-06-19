import { create } from "zustand";
import { MenuItemProps } from "../lib/menu";

type OrderState = {
  orderList: MenuItemProps[];
  addOrder: (newDish: MenuItemProps) => void;
  clearList: () => void;
  selectedCategory: "" | "drink" | "food" | "dessert";
  changeCategory: (category: "" | "drink" | "food" | "dessert") => void;
  isItemSelected: boolean;
  unselectItem: () => void;
  selectItem: () => void;
};

const useOrderStore = create<OrderState>()((set) => ({
  orderList: [],
  selectedCategory: "drink",
  changeCategory: (category) => set(() => ({ selectedCategory: category })),
  isItemSelected: false,
  unselectItem: () => set((state) => ({ isItemSelected: false })),
  selectItem: () => set((state) => ({ isItemSelected: true })),
  addOrder: (newDish) => set((state) => ({ orderList: [...state.orderList, newDish] })),
  clearList: () => set(() => ({ orderList: [] })),
}));

export default useOrderStore;
