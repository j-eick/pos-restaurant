export type DishProps = {
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

export const exampleOrder: DishProps[] = [
  {
    id: "5",
    ident: "beef-burger",
    title: "Beef Burger",
    photo: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg",
    description: "Juicy beef burger with lettuce, tomato, and secret sauce.",
    ingredients: ["Beef patty", "lettuce", "tomato", "burger bun", "secret sauce"],
    allergens: ["Gluten"],
    altText: "Beef Burger",
    price: "11.95",
    category: "food",
    selected: false,
  },
  {
    id: "6",
    ident: "chicken-tikka-masala",
    title: "Chicken Tikka Masala",
    photo:
      "https://images.squarespace-cdn.com/content/v1/63d0a16cfad8c1759df2fe31/49cce2fb-0fd7-427e-b0f9-80aa32541cb2/GCBC16_EP30_Chicken+Tikka+Masala_1L0A4580.jpg",
    description: "Grilled chicken in a spicy and creamy masala sauce.",
    ingredients: ["Chicken", "yogurt", "tomatoes", "onion", "masala spices"],
    allergens: ["Dairy"],
    altText: "Chicken Tikka Masala",
    price: "13.50",
    category: "food",
    selected: false,
  },
];
