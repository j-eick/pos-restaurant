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
  type: "food" | "beverage";
};

export const exampleOrder: DishProps[] = [
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
    type: "food",
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
    type: "food",
  },
];
