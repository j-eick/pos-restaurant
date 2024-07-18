import { create } from "zustand";
import { MenuItemProps } from "../lib/menu";

type categoryProp = "" | "drink" | "food" | "dessert";

type OrderState = {
  // list of placed orders
  orderList: MenuItemProps[];
  // adds item to orderList
  addOrder: (newDish: MenuItemProps) => void;
  // clears list
  clearList: () => void;
  // conditional rendering of respective menu
  selectedCategory: categoryProp;
  changeCategory: (category: categoryProp) => void;
  // menu item is selected or not
  isItemSelected: boolean;

  unselectItem: () => void;
  selectItem: () => void;
};

const useOrderStore = create<OrderState>()((set) => ({
  orderList: [],
  selectedCategory: "drink",
  changeCategory: (category) => set(() => ({ selectedCategory: category })),
  isItemSelected: false,
  unselectItem: () => set(() => ({ isItemSelected: false })),
  selectItem: () => set(() => ({ isItemSelected: true })),
  addOrder: (newDish) => set((state) => ({ orderList: [...state.orderList, newDish] })),
  clearList: () => set(() => ({ orderList: [] })),
}));

export default useOrderStore;
