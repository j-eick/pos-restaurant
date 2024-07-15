<p style="color: red; font-size: 50px">mobile optimized</p>

# POS-Restaurant App

The app does 3 things:

- Display the menu
- Allows guest to place order
- Guest pays via app

## Implementations

Dishes are typed with numerous props:

```tsx
export type MenuItemProps = {
  id: string;
  ident: string;
  title: string;
  photo: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  altText: string;
  price: string;
  category: "drink" | "food" | "dessert";
  selected: boolean;
};
```

MenuLists are hardcoded so far for showcasing sake:

```tsx
export const drinkItems: MenuItemProps[] = [
  {
    id: "1",
    ident: "mango-smoothie",
    title: "Mango Smoothie",
    photo: "https://recipesforthermomix.com/recipes-images/mango-smoothie-thermomix.jpg",
    description: "Refreshing mango smoothie with a hint of lime.",
    ingredients: ["Mango", "lime juice", "yogurt", "honey"],
    allergens: ["Dairy"],
    altText: "Mango Smoothie",
    price: "6.50",
    category: "drink",
    selected: false,
  },
```

GlobalState with Zustand.js:

```tsx
const useOrderStore = create<OrderState>()((set) => ({
  // list of placed orders
  orderList: [],
  // adds item to orderList
  addOrder: (newDish) => set((state) => ({ orderList: [...state.orderList, newDish] })),
  // clears list
  clearList: () => set(() => ({ orderList: [] })),
  // conditional rendering of respective menu
  selectedCategory: "drink",
  changeCategory: (category) => set(() => ({ selectedCategory: category })),
  // menu item is selected or not
  isItemSelected: false,

  unselectItem: () => set((state) => ({ isItemSelected: false })),
  selectItem: () => set((state) => ({ isItemSelected: true })),
}));

export default useOrderStore;
```

Custom counter hook:

```tsx
import { useState } from "react";

export const useCounter = <T extends { add: () => void; subtract: () => void; reset: () => void }>(
  initialValue = 0
): [number, T] => {
  const [count, setCount] = useState(initialValue);

  const handleAdd = () => setCount((prev) => count + 1);
  const handleSubtract = () => setCount((prev) => count - 1);
  const handleReset = () => setCount((prev) => 0);

  return [
    count,
    {
      add: handleAdd,
      subtract: handleSubtract,
      reset: handleReset,
    } as T,
  ];
};
```
