import { create } from "zustand";
import { drinkItems, foodItems, MenuItemProps } from "../lib/menu";
import { UniqueID } from "../lib/uniqueID";

type categoryProp = "" | "drink" | "food" | "dessert";

type OrderState = {
  // selectOrder: (id: string, ordered: boolean) => MenuItemProps[];
  selectedItems: MenuItemProps[];
  // all available drinks
  menuDrinkList: MenuItemProps[];
  // all available dishes
  menuFoodList: MenuItemProps[];
  // add drink / food / dessert
  addDrinkToList: (itemWithID: MenuItemProps) => void;
  addFoodToList: (itemWithID: MenuItemProps) => void;
  // clears list
  clearList: () => void;
  // conditional rendering of respective menu
  selectedCategory: categoryProp;
  // change category
  changeCategory: (category: categoryProp) => void;
  //remove selected item
  removeItem: (item: MenuItemProps) => void;
};

const useOrderStore = create<OrderState>()((set, get) => ({
  // gets populated with items the user picks from the list
  selectedItems: [],
  // drinkItems[] is a hardcoded drink-DB that initializes menuDrinkList
  menuDrinkList: drinkItems,
  // foodItems[] is a hardcoded food-DB that initializes menuFoodList
  menuFoodList: foodItems,

  /** addDrinkToList()
   * @param item - drink-object, modified by uniqueID + ordered: ordered
   *    selecting a drink item does 2 things:
   *    1. selected drink item is added to selectedItems[]
   *    2. inside menuDrinkList respective drink object gets modified by a) uniqueID b) { ordererd: ordered }
   */
  addDrinkToList: (item) =>
    set((state) => ({
      selectedItems: [...state.selectedItems, item],
      menuDrinkList: [...state.menuDrinkList.map((drink) => (drink.id === item.id ? { ...item } : drink))],
    })),

  /** addFoodToList()
   * @param item - food-object, modified by uniqueID + ordered: ordered
   *    selecting a drink item does 2 things:
   *    1. selected food item is added to selectedItems[]
   *    2. inside addFoodToList respective food object gets modified by a) uniqueID b) { ordererd: ordered }
   */
  addFoodToList: (item) =>
    set((state) => ({
      selectedItems: [...state.selectedItems, item],
      menuFoodList: [...state.menuFoodList.map((dish) => (dish.id === item.id ? { ...item } : dish))],
    })),

  // initial setting of the subHeading
  selectedCategory: "drink",
  // changes the categories of the subHeading
  changeCategory: (category) => set(() => ({ selectedCategory: category })),
  // removes SELECTED item from selectedItems[]
  removeItem: (toRemove) =>
    set((state) => ({ selectedItems: state.selectedItems.filter((item) => item.uniqueID !== toRemove.uniqueID) })),
  // removes ALL items from selectedItems[]
  clearList: () => set(() => ({ selectedItems: [] })),
}));

export default useOrderStore;
