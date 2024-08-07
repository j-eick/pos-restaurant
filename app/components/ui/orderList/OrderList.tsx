// import { useCustomerOrders } from "@/app/context/CustomerOrderProvider";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import useOrderStore from "@/app/hooks/useOrderStore";
import { Text } from "../text";
import { MenuItemProps } from "@/app/lib/menu";
import { MySVGs } from "@/app/lib/MySVGs";

console.clear();

export function OrderList() {
  const removeItem = useOrderStore((state) => state.removeItem);
  const [itemRemove, setItemRemove] = useState(0);
  const store = useOrderStore();

  const space_list_topBottom = "mt-9 mb-7";

  function handleSelectedItem(item: MenuItemProps) {
    if (item.uniqueID !== itemRemove && item.uniqueID !== null) {
      setItemRemove(item.uniqueID);
    } else {
      setItemRemove(0);
    }
  }

  function handleDeleteButton(item: MenuItemProps) {
    removeItem(item);
  }

  return (
    <section className="mt-10 pb-32 flex flex-col gap-7 ">
      <div className="relative h-12 flex items-center bg-slate-200">
        <Text tag={"p"} size="lg" weight="semibold" className="ml-[10%] xs:ml-[20%]">
          Drink
        </Text>
        <div
          className={`w-4/12 absolute right-0 -bottom-[15%]
                      flex justify-center`}
        >
          <Image
            src="/drink2.png"
            alt={"drinks logo"}
            width="100"
            height="100"
            className={`w-24
                        xs:w-24
                        sm:w-28
                      `}
          />
        </div>
      </div>
      {store.selectedItems.filter((item) => item.category === "drink").length !== 0 ? (
        <ul
          className={`mx-auto my-0 w-4/5 ${space_list_topBottom} flex flex-col align-middle gap-3
                        sm:w-4/5`}
        >
          {store.selectedItems
            .filter((findItem) => findItem.category === "drink")
            .map((item, i) => (
              //TODO: Replace current delete-func: make li-element wider than ul-element with overflow hidden
              //      to avoid a bit of unused space at the very right side of each li-element
              <li
                key={i}
                className={`relative h-12 max-h-18 flex items-center justify-center gap-2 shadow-orderedItems rounded text-slate-500`}
              >
                <button className="w-full h-full flex flex-wrap items-center " onClick={() => handleSelectedItem(item)}>
                  <span className="w-2/12 h-3/4 grid place-items-center text-slate-400 text-sm border-r-1">
                    #{item.id}
                  </span>
                  <Text tag="p" color="secondary" className="w-8/12 text-md leading-4.5">
                    {item.title}
                  </Text>
                  <span className="w-2/12 pr-2 text-right text-slate-400 text-sm">{item.price}</span>
                </button>
                <button
                  className={`${
                    item.uniqueID === itemRemove
                      ? "w-2/6 opacity-100 before:absolute before:inset-0 before:-z-10 before:bg-orange-300 before:opacity-60"
                      : "w-0 opacity-0"
                  } 
                    relative h-full px-2 flex justify-center items-center cursor-pointer
                    transition-all duration-500`}
                  onClick={() => handleDeleteButton(item)}
                >
                  <MySVGs variant="bin" size="24" height="1.1em" />
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <div className=" h-14 mx-auto my-0 grid place-items-center">
          <Text tag="p">your throat wants to stay dry</Text>
        </div>
      )}
      <div className={`mt-12`}>
        <div
          className={`relative h-12 w-full flex items-center -translate-x-1/2 left-1/2
                        bg-slate-200 `}
        >
          <Text tag={"p"} size="lg" weight="semibold" className="ml-[10%] xs:ml-[20%]">
            Food
          </Text>
          <div className={`w-4/12 absolute -translate-y-3 right-0 flex justify-center`}>
            <Image
              src="/food3.png"
              alt={"list of ordered drinks"}
              width="100"
              height="100"
              className={`max-w-28
                          xs:max-w-32
              `}
            />
          </div>
        </div>
        {store.selectedItems.filter((item) => item.category === "food").length !== 0 ? (
          <ul className={`w-4/5 mx-auto my-0 ${space_list_topBottom} flex flex-col align-middle gap-3`}>
            {store.selectedItems
              .filter((findItem) => findItem.category === "food")
              .map((item, i) => (
                <li
                  key={i}
                  className={`relative w-full pl-2 h-12 max-h-18 flex items-center justify-center gap-2 
                              shadow-orderedItems rounded text-slate-500`}
                >
                  <button
                    className="w-full h-full flex flex-wrap items-center "
                    onClick={() => handleSelectedItem(item)}
                  >
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
                    onClick={() => handleDeleteButton(item)}
                  >
                    <MySVGs variant="bin" size="24" height="1.1em" />
                  </button>
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
    </section>
  );
}
