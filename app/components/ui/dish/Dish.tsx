import { Text } from "../text";
import { LuConciergeBell } from "react-icons/lu";

type MenuItemProp = {
  dish: {
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
};

export function Dish({ dish }: MenuItemProp) {
  return (
    <article
      className={`relative m-2 ${dish.gallery.length === 0 ? "pt-48" : "pt-52"} pb-5 px-5 min-h-96 rounded-xl shadow-dishCard`}
    >
      <div className="mb-5 flex gap-2 justify-center">
        {/* WITHOUT GALLERY */}
        {dish.gallery.length === 0 && (
          <div className="absolute p-[3px] h-52 w-10/12 right-1/2 translate-x-1/2 top-[-1.5rem] bg-gray-100 rounded-full">
            <img src={dish.photo} alt={dish.altText} className="shadow-dishPhoto rounded-full" />
          </div>
        )}
        {/* WITH GALLERY */}
        {dish.gallery.length >= 1 && (
          <div className="flex flex-col gap-2">
            <div className="absolute p-[3px] h-52 w-10/12 right-1/2 translate-x-1/2 top-[-1.5rem] bg-gray-100 rounded-full">
              <img src={dish.photo} alt={dish.altText} className="shadow-dishPhoto rounded-full" />
            </div>
            <ul role="list" className="flex gap-3 overflow-x-auto max-h-[220px] hideScrollbar">
              {dish.gallery.map((photo, i) => (
                <li key={i}>
                  <img src={photo} alt="" className="rounded-3xl max-w-[70px]" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <section className="mb-7">
          <Text tag="h1" size="lg" weight="semibold" className="mb-3">
            {dish.title}
          </Text>
          <Text tag="p" size="sm">
            {dish.description}
          </Text>
          <Text tag="p" size="sm" className="hidden">
            Ingredients: {dish.ingredients}
          </Text>
        </section>
        <section className="flex justify-around">
          <div className="flex flex-col w-2/4">
            <Text tag={"p"} size="xs" weight="medium" className="text-start">
              Allergens
            </Text>
            <Text tag={"p"} size="xs" weight="light" className="text-start">
              {dish.allergens}
            </Text>
          </div>
          <div className="flex items-center justify-center w-2/4 gap-3 shadow-dishOrder rounded-lg">
            <Text tag="p" weight="semibold">
              &euro; {dish.price}
            </Text>
            <LuConciergeBell className="scale-[130%]" />
          </div>
        </section>
      </div>
    </article>
  );
}
