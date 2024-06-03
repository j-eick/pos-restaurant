export type DishProps = {
  id: string;
  title: string;
  photo: string;
  gallery: string[];
  description: string;
  ingredients: string[];
  allergens: string[];
  altText: string;
  price: string;
};

export const menuItems: DishProps[] = [
  {
    id: "1",
    title: "Margherita Pizza",
    photo: "https://de.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=915&v=1644589966&width=1200",
    gallery: [],
    description: "Classic Margherita with fresh mozzarella and basil.",
    ingredients: ["Tomato sauce", "mozzarella cheese", "basil", "olive oil"],
    allergens: ["Dairy"],
    altText: "Margherita Pizza",
    price: "12.95",
    // currency: "EUR"
  },
  {
    id: "2",
    title: "Caesar Salad",
    photo:
      "https://assets.zuckerjagdwurst.com/kcf8yp4ou1trwqxkgptu9kjhrkra/1110/701/55/true/center/R814+byodo+-+Vegane+Caesar+Salad+Pasta-50.jpg?animated=false",
    gallery: ["https://placeholder.com/100", "https://placeholder.com/100", "https://placeholder.com/100"],
    description: "Crispy romaine lettuce with Caesar dressing and croutons.",
    ingredients: ["Romaine lettuce", "Parmesan cheese", "croutons", "Caesar dressing"],
    allergens: ["Dairy", "Gluten"],
    altText: "Caesar Salad",
    price: "10.50",
  },
  {
    id: "3",
    title: "Spaghetti Carbonara",
    photo:
      "https://production-media.gousto.co.uk/cms/mood-image/2338---Creamy-Spaghetti-Carbonara-copy-1675769448672.jpg",
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
    price: "15.00",
  },
  {
    id: "4",
    title: "Vegetable Stir Fry",
    photo:
      "https://www.thespruceeats.com/thmb/gTNi3OytZQVmxc7_qsPcKhEhWoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetable-stir-fry-sauce-695104-hero-05-0f29ad92fd7141589cb1a773636d714b.jpg",
    gallery: [],
    description: "Fresh veggies sautéed with soy sauce and garlic.",
    ingredients: ["Broccoli", "bell peppers", "carrots", "soy sauce", "garlic", "olive oil"],
    allergens: ["Soy"],
    altText: "Vegetable Stir Fry",
    price: "14.00",
  },
  {
    id: "5",
    title: "Beef Burger",
    photo: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg",
    gallery: [],
    description: "Juicy beef burger with lettuce, tomato, and secret sauce.",
    ingredients: ["Beef patty", "lettuce", "tomato", "burger bun", "secret sauce"],
    allergens: ["Gluten"],
    altText: "Beef Burger",
    price: "11.95",
  },
  {
    id: "6",
    title: "Chicken Tikka Masala",
    photo:
      "https://images.squarespace-cdn.com/content/v1/63d0a16cfad8c1759df2fe31/49cce2fb-0fd7-427e-b0f9-80aa32541cb2/GCBC16_EP30_Chicken+Tikka+Masala_1L0A4580.jpg",
    gallery: ["https://placeholder.com/100", "https://placeholder.com/100", "https://placeholder.com/100"],
    description: "Grilled chicken in a spicy and creamy masala sauce.",
    ingredients: ["Chicken", "yogurt", "tomatoes", "onion", "masala spices"],
    allergens: ["Dairy"],
    altText: "Chicken Tikka Masala",
    price: "13.50",
  },
  {
    id: "7",
    title: "Fish and Chips",
    photo:
      "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/qjiendmr/01ee296e-a5d7-4788-8323-24befd50b1db.jpg",
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
    price: "12.00",
  },
  {
    id: "8",
    title: "Mushroom Risotto",
    photo:
      "https://www.thespruceeats.com/thmb/ZEowdu14wmTI2tdAGQaAA1lw6YY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mushroom-risotto-recipe-996005-hero-01-85f8cef9cf8042e8afbaa9d2e46c1fa8.jpg",
    gallery: ["https://placeholder.com/100", "https://placeholder.com/100"],
    description: "Creamy risotto with sautéed mushrooms and Parmesan.",
    ingredients: ["Arborio rice", "mushrooms", "chicken broth", "Parmesan cheese", "onions"],
    allergens: ["Dairy"],
    altText: "Mushroom Risotto",
    price: "14.25",
  },
  {
    id: "9",
    title: "BBQ Ribs",
    photo:
      "https://www.coles.com.au/content/dam/coles/cusp/recipes-inspiration/pvx/May23-PVX-slow-cooker-BBQ-ribs-976x549.jpg",
    gallery: [],
    description: "Tender ribs coated in BBQ sauce, served with coleslaw.",
    ingredients: ["Pork ribs", "BBQ sauce", "cabbage", "carrot", "mayonnaise"],
    allergens: ["None"],
    altText: "BBQ Ribs",
    price: "16.95",
  },
  {
    id: "10",
    title: "Pumpkin Soup",
    photo:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/07/Spicy-pumpkin-soup-fcf2fe5.jpg?resize=768,574",
    gallery: ["https://placeholder.com/100"],
    description: "Smooth and savory pumpkin soup with a hint of nutmeg.",
    ingredients: ["Pumpkin", "vegetable stock", "onion", "nutmeg", "cream"],
    allergens: ["Dairy"],
    altText: "Pumpkin Soup",
    price: "9.00",
  },
];
