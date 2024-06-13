export type DishProps = {
  id: string;
  title: string;
  photo: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  altText: string;
  price: string;
};

export type DrinkProps = {
  id: string;
  title: string;
  photo: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  altText: string;
  price: string;
};

export const drinkItems: DrinkProps[] = [
  {
    id: "1",
    title: "Mango Smoothie",
    photo: "https://recipesforthermomix.com/recipes-images/mango-smoothie-thermomix.jpg",
    description: "Refreshing mango smoothie with a hint of lime.",
    ingredients: ["Mango", "lime juice", "yogurt", "honey"],
    allergens: ["Dairy"],
    altText: "Mango Smoothie",
    price: "6.50",
  },
  {
    id: "2",
    title: "Iced Coffee",
    photo: "https://wideawakecoffee.com/wp-content/uploads/2022/08/Iced-Coffee-Cubes.jpg",
    description: "Chilled coffee with a splash of milk.",
    ingredients: ["Coffee", "milk", "ice", "sugar"],
    allergens: ["Dairy"],
    altText: "Iced Coffee",
    price: "4.00",
  },
  {
    id: "3",
    title: "Lemonade",
    photo: "https://www.bigbearswife.com/wp-content/uploads/2015/06/Homemade20Lemonade206_zpskagqyqik.jpg",
    description: "Classic lemonade with a touch of mint.",
    ingredients: ["Lemon", "sugar", "water", "mint"],
    allergens: [],
    altText: "Lemonade",
    price: "3.50",
  },
  {
    id: "4",
    title: "Strawberry Milkshake",
    photo: "https://www.rawblend.com.au/wp-content/uploads/2020/11/Healthy-Strawberry-Milkshake1920x1080.jpg",
    description: "Creamy milkshake with fresh strawberries.",
    ingredients: ["Strawberries", "milk", "ice cream", "sugar"],
    allergens: ["Dairy"],
    altText: "Strawberry Milkshake",
    price: "5.50",
  },
  {
    id: "5",
    title: "Green Tea",
    photo: "https://static2.bigstockphoto.com/5/8/1/large1500/185957137.jpg",
    description: "Hot green tea with a hint of jasmine.",
    ingredients: ["Green tea", "jasmine"],
    allergens: [],
    altText: "Green Tea",
    price: "2.50",
  },
  {
    id: "6",
    title: "Berry Smoothie",
    photo:
      "https://mljqj1thoqw7.i.optimole.com/cb:jvvg~13514/w:750/h:442/q:mauto/ig:avif/f:best/https://cleancookingcaitlin.com/ziwawuby/2022/12/blueberry-kale-smoothie-wide.png",
    description: "Mixed berry smoothie with a blend of blueberries, raspberries, and strawberries.",
    ingredients: ["Blueberries", "raspberries", "strawberries", "yogurt", "honey"],
    allergens: ["Dairy"],
    altText: "Berry Smoothie",
    price: "6.00",
  },
  {
    id: "7",
    title: "Hot Chocolate",
    photo: "https://media.rainpos.com/11782/Hot_Chocolate_BC.webp",
    description: "Rich hot chocolate with whipped cream.",
    ingredients: ["Cocoa", "milk", "sugar", "whipped cream"],
    allergens: ["Dairy"],
    altText: "Hot Chocolate",
    price: "4.50",
  },
  {
    id: "8",
    title: "Orange Juice",
    photo: "https://static1.bigstockphoto.com/2/8/2/large1500/282075529.jpg",
    description: "Freshly squeezed orange juice.",
    ingredients: ["Oranges"],
    allergens: [],
    altText: "Orange Juice",
    price: "3.00",
  },
  {
    id: "9",
    title: "Mojito",
    photo: "https://www.kitchensanctuary.com/wp-content/uploads/2016/08/Pinapple-Ginger-Mojito-wide-FS-3824.jpg",
    description: "Classic mojito with fresh mint and lime.",
    ingredients: ["Mint", "lime", "sugar", "rum", "soda water"],
    allergens: [],
    altText: "Mojito",
    price: "7.50",
  },
  {
    id: "10",
    title: "Pina Colada",
    photo:
      "https://static.wixstatic.com/media/4eeb0c_8b034714ac4d497d82c67355298b9518~mv2.jpg/v1/fill/w_553,h_331,al_c,q_80,enc_auto/4eeb0c_8b034714ac4d497d82c67355298b9518~mv2.jpg",
    description: "Tropical pina colada with pineapple and coconut.",
    ingredients: ["Pineapple", "coconut cream", "rum"],
    allergens: [],
    altText: "Pina Colada",
    price: "8.00",
  },
];

export const menuItems: DishProps[] = [
  {
    id: "1",
    title: "Margherita Pizza",
    photo: "https://de.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=915&v=1644589966&width=1200",
    description: "Classic Margherita with fresh mozzarella and basil.",
    ingredients: ["Tomato sauce", "mozzarella cheese", "basil", "olive oil"],
    allergens: ["Dairy"],
    altText: "Margherita Pizza",
    price: "12.95",
  },
  {
    id: "2",
    title: "Caesar Salad",
    photo:
      "https://assets.zuckerjagdwurst.com/kcf8yp4ou1trwqxkgptu9kjhrkra/1110/701/55/true/center/R814+byodo+-+Vegane+Caesar+Salad+Pasta-50.jpg?animated=false",
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
    description: "Smooth and savory pumpkin soup with a hint of nutmeg.",
    ingredients: ["Pumpkin", "vegetable stock", "onion", "nutmeg", "cream"],
    allergens: ["Dairy"],
    altText: "Pumpkin Soup",
    price: "9.00",
  },
];
