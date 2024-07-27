import { useCounter } from "@/app/hooks/useCounter";
import { Button } from "../button";
import { Text } from "../text";
import { LuConciergeBell } from "react-icons/lu";
import { FaConciergeBell } from "react-icons/fa";
import React, { MouseEvent, useEffect, useRef } from "react";
import { MenuItemProps } from "@/app/lib/menu";
import useOrderStore from "@/app/hooks/useOrderStore";
import { UniqueID } from "@/app/lib/uniqueID";
import { Counter } from "../counter";

type DishItemProp = {
  dish: MenuItemProps;
};

export function Dish({ dish }: DishItemProp) {
  const [count, { add }] = useCounter();
  const dishTitleRef = useRef<HTMLDivElement>(null);
  const addDrinkToList = useOrderStore((state) => state.addDrinkToList);
  const addFoodToList = useOrderStore((state) => state.addFoodToList);
  const store = useOrderStore();

  const handleOrderButton = (item: MenuItemProps) => {
    const itemWithID = {
      ...item,
      ordered: true,
      uniqueID: UniqueID(),
      selected: true,
    };
    if (item.category === "drink") {
      addDrinkToList(itemWithID);
    }
    if (item.category === "food") {
      addFoodToList(itemWithID);
    }

    // add();
  };

  // TODO:  when clicking the Counter button, a modal opens that allows the visitor to correct the total number of orders of this item.
  const handleCounterClick = () => {};

  useEffect(() => {}, []);

  return (
    <article
      className={`relative h-full max-w-xs mx-auto my-0 pt-48 pb-5 px-5 rounded-md shadow-dishCard_shallow
                  xxs:w-11/12
                  md:w-10/12`}
    >
      <div className="mb-5 flex gap-2 justify-center">
        <div className="absolute p-[3px] h-52 w-10/12 right-1/2 translate-x-1/2 top-[-1.5rem] bg-gray-100 rounded-full">
          <img src={dish.photo} alt={dish.altText} className="shadow-dishPhoto rounded-full" />
        </div>
      </div>
      <div ref={dishTitleRef}>
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
            {dish.allergens.length !== 0 ? (
              <>
                <Text tag={"p"} size="xs" weight="medium" className="text-start">
                  Allergens
                </Text>
                <Text tag={"p"} size="xs" weight="light" className="text-start">
                  {dish.allergens}
                </Text>
              </>
            ) : (
              <>
                <Text tag={"p"} size="xs" weight="medium" className="text-start">
                  Allergens
                </Text>
                <Text tag={"p"} size="xs" weight="light" className="text-start">
                  ---
                </Text>
              </>
            )}
          </div>
          <Button className="relative" type="addItem" key={count} onClick={() => handleOrderButton(dish)}>
            {/* #####   dish is selected && at least one instace of a dish is inside selectedItems[]   ##### */}
            {dish.selected && store.selectedItems.filter((item) => item.title === dish.title).length > 0 && (
              <Counter className="absolute bottom-6 right-0 h-6 w-6 rounded-lg bg-primary-gray animate-appear">
                {store.selectedItems.filter((item) => item.title === dish.title).length}
              </Counter>
            )}
            <Text tag="p" weight="semibold">
              &euro; {dish.price}
            </Text>
            {/* #####   if this dish is inside selectedItems[], use filled Icon   ##### */}
            {store.selectedItems.filter((item) => item.title === dish.title).length > 0 ? (
              <FaConciergeBell className="scale-[120%] animate-bellWiggle" />
            ) : (
              <LuConciergeBell className="scale-[120%]" />
            )}
          </Button>
        </section>
      </div>
    </article>
  );
}
