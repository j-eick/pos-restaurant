// import { useCustomerOrders } from "@/app/context/CustomerOrderProvider";
import Image from "next/image";
import React, { useState } from "react";
import useOrderStore from "@/app/hooks/useOrderStore";
import { Text } from "../text";
import { RemoveIcon } from "../icon";
import { MenuItemProps } from "@/app/lib/menu";
import { MySVGs } from "@/app/lib/MySVGs";

console.clear();

export function OrderList() {
  const removeItem = useOrderStore((state) => state.removeItem);
  const [itemRemove, setItemRemove] = useState(0);
  const store = useOrderStore();

  function handleSelectedItem(item: MenuItemProps) {
    if (item.uniqueID !== itemRemove) {
      setItemRemove(item.uniqueID);
    } else {
      setItemRemove(0);
    }
  }

  function handleRemoveButton(item: MenuItemProps) {
    removeItem(item);
  }

  // REVIEW: the entire system aroud removing a specific item from the menuItemList needs an overhaul... I think
  function handleDeleteButton(item: MenuItemProps) {
    removeItem(item);
  }

  const space_list_topBottom = "mt-9 mb-7";

  return (
    <div className="mt-10 flex flex-col gap-7">
      <div
        className={`mx-auto my-0 w-11/12 
                       sm:max-w-lg`}
      >
        {/* ######################## */}
        {/* ####### DRINKS ####### */}
        <>
          <div
            className={`relative h-12 w-[100vw] -translate-x-1/2 left-1/2 flex items-center
                      bg-slate-200`}
          >
            <Text tag={"p"} size="lg" weight="semibold" className="ml-[10%] xs:ml-[20%]">
              Drink
            </Text>
            <div
              className={`w-4/12 absolute top-1/2 -translate-y-1/2 right-0
                            xs:right-5`}
            >
              <Image
                src="/drink2.png"
                alt={"drinks logo"}
                width="100"
                height="100"
                className={`scale-75 xxs:scale-70 xs:scale-60 xs:max-w-52`}
              />
            </div>
          </div>
          {store.selectedItems.filter((item) => item.category === "drink").length !== 0 ? (
            <ul className={`mx-auto my-0 w-full ${space_list_topBottom} flex flex-col align-middle gap-3`}>
              {store.selectedItems
                .filter((findItem) => findItem.category === "drink")
                .map((item, i) => (
                  <li
                    key={i}
                    className={`relative w-full pl-2 h-12 max-h-18 flex items-center justify-center gap-2 shadow-orderedItems rounded text-slate-500`}
                  >
                    <button
                      className="w-full h-full flex flex-wrap items-center "
                      onClick={() => handleSelectedItem(item)}
                    >
                      {/* <RemoveIcon onClick={() => handleRemoveButton(item)} /> */}
                      <span className="w-2/12">#{item.id}</span>
                      <Text tag="p" className="w-8/12 text-md leading-4.5">
                        {item.title}
                      </Text>
                      <span className="w-2/12 pr-2 text-right text-md">{item.price}</span>
                    </button>
                    <button
                      className={`${
                        item.uniqueID === itemRemove
                          ? "w-2/6 opacity-100 before:absolute before:inset-0 before:-z-10 before:bg-orange-300 before:opacity-60"
                          : "w-0 opacity-0"
                      } 
                      relative h-full px-2 flex justify-center items-center cursor-pointer
                      transition-all duration-500`}
                      onClick={() => handleDeleteButton(item, store.selectedItems)}
                    >
                      <MySVGs variant="bin" size="24" height="1.1em" />
                    </button>
                  </li>
                ))}
            </ul>
          ) : (
            <div className="mt-14 h-14 mx-auto my-0 grid place-items-center">
              <Text tag="p">your throat wants to stay dry</Text>
            </div>
          )}
        </>
        {/* ######################## */}
        {/* ####### FOOD ####### */}
        <div className={`mt-12`}>
          <div
            className={`relative h-12 w-[100vw] flex items-center -translate-x-1/2 left-1/2
                        bg-slate-200 `}
          >
            <Text tag={"p"} size="lg" weight="semibold" className="ml-[10%] xs:ml-[20%]">
              Food
            </Text>
            <div className="w-4/12 absolute top-1/2 -translate-y-1/2 right-0 xs:right-5">
              <Image src="/food3.png" alt={"list of ordered drinks"} width="100" height="100" className="max-w-40" />
            </div>
          </div>
          {store.selectedItems.filter((item) => item.category === "food").length !== 0 ? (
            <ul className={`mx-auto my-0 ${space_list_topBottom} flex flex-col align-middle gap-3`}>
              {store.selectedItems
                .filter((findItem) => findItem.category === "food")
                .map((item, i) => (
                  <li
                    key={i}
                    className={`relative p-2 flex items-center gap-2 shadow-orderedItems rounded text-slate-500`}
                  >
                    <RemoveIcon onClick={() => handleRemoveButton(item)} />
                    <span className="w-2/12">#{item.id}</span>
                    <Text tag="p" className="w-8/12">
                      {item.title}
                    </Text>
                    <span className="w-2/12 text-right">{item.price}</span>
                  </li>
                ))}
            </ul>
          ) : (
            <div className="mt-10 h-14 mx-auto my-0 grid place-items-center">
              <Text tag="p" className="">
                no orders yet
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
