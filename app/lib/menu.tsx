type MenuItemProp = {
  id: string;
  title: string;
  photo: string;
  gallery: string[];
  description: string;
  ingredients: string[];
  allergens: string[];
  altText: string;
};

export const menuItems: MenuItemProp[] = [
  {
    id: "1",
    title: "Margherita Pizza",
    photo: "https://placeholder.com/350x220",
    gallery: ["https://placeholder.com/100", "https://placeholder.com/100"],
    description: "Classic Margherita with fresh mozzarella and basil.",
    ingredients: ["Tomato sauce", "mozzarella cheese", "basil", "olive oil"],
    allergens: ["Dairy"],
    altText: "Margherita Pizza",
  },
  {
    id: "2",
    title: "Caesar Salad",
    photo: "https://placeholder.com/350x220",
    gallery: ["https://placeholder.com/100", "https://placeholder.com/100", "https://placeholder.com/100"],
    description: "Crispy romaine lettuce with Caesar dressing and croutons.",
    ingredients: ["Romaine lettuce", "Parmesan cheese", "croutons", "Caesar dressing"],
    allergens: ["Dairy", "Gluten"],
    altText: "Caesar Salad",
  },
  {
    id: "3",
    title: "Spaghetti Carbonara",
    photo: "https://placeholder.com/350x220",
    gallery: [
      "https://placeholder.com/100",
      "https://placeholder.com/100",
      "https://placeholder.com/100",
      "https://placeholder.com/100",
    ],
    description: "Rich and creamy spaghetti with pancetta and a touch of egg.",
    ingredients: ["Spaghetti", "egg", "pancetta", "Parmesan cheese", "black pepper"],
    allergens: ["Gluten", "Egg", "Dairy"],
    altText: "Spaghetti Carbonara",
  },
  {
    id: "4",
    title: "Vegetable Stir Fry",
    photo: "https://placeholder.com/350x220",
    gallery: ["https://placeholder.com/100"],
    description: "Fresh veggies sautéed with soy sauce and garlic.",
    ingredients: ["Broccoli", "bell peppers", "carrots", "soy sauce", "garlic", "olive oil"],
    allergens: ["Soy"],
    altText: "Vegetable Stir Fry",
  },
  {
    id: "5",
    title: "Beef Burger",
    photo: "https://placeholder.com/350x220",
    gallery: ["https://placeholder.com/100", "https://placeholder.com/100"],
    description: "Juicy beef burger with lettuce, tomato, and secret sauce.",
    ingredients: ["Beef patty", "lettuce", "tomato", "burger bun", "secret sauce"],
    allergens: ["Gluten"],
    altText: "Beef Burger",
  },
  {
    id: "6",
    title: "Chicken Tikka Masala",
    photo: "https://placeholder.com/350x220",
    gallery: ["https://placeholder.com/100", "https://placeholder.com/100", "https://placeholder.com/100"],
    description: "Grilled chicken in a spicy and creamy masala sauce.",
    ingredients: ["Chicken", "yogurt", "tomatoes", "onion", "masala spices"],
    allergens: ["Dairy"],
    altText: "Chicken Tikka Masala",
  },
  {
    id: "7",
    title: "Fish and Chips",
    photo: "https://placeholder.com/350x220",
    gallery: [
      "https://placeholder.com/100",
      "https://placeholder.com/100",
      "https://placeholder.com/100",
      "https://placeholder.com/100",
    ],
    description: "Classic British beer-battered fish with crispy fries.",
    ingredients: ["Fish", "flour", "beer", "potatoes", "tartar sauce"],
    allergens: ["Fish", "Gluten"],
    altText: "Fish and Chips",
  },
  {
    id: "8",
    title: "Mushroom Risotto",
    photo: "https://placeholder.com/350x220",
    gallery: ["https://placeholder.com/100", "https://placeholder.com/100"],
    description: "Creamy risotto with sautéed mushrooms and Parmesan.",
    ingredients: ["Arborio rice", "mushrooms", "chicken broth", "Parmesan cheese", "onions"],
    allergens: ["Dairy"],
    altText: "Mushroom Risotto",
  },
  {
    id: "9",
    title: "BBQ Ribs",
    photo: "https://placeholder.com/350x220",
    gallery: ["https://placeholder.com/100"],
    description: "Tender ribs coated in BBQ sauce, served with coleslaw.",
    ingredients: ["Pork ribs", "BBQ sauce", "cabbage", "carrot", "mayonnaise"],
    allergens: ["None"],
    altText: "BBQ Ribs",
  },
  {
    id: "10",
    title: "Pumpkin Soup",
    photo: "https://placeholder.com/350x220",
    gallery: ["https://placeholder.com/100"],
    description: "Smooth and savory pumpkin soup with a hint of nutmeg.",
    ingredients: ["Pumpkin", "vegetable stock", "onion", "nutmeg", "cream"],
    allergens: ["Dairy"],
    altText: "Pumpkin Soup",
  },
];
