// import { useCustomerOrders } from "@/app/context/CustomerOrderProvider";
import Image from "next/image";
import { useEffect } from "react";
import useOrderStore from "@/app/hooks/useOrderStore";
import { Text } from "../text";

export function OrderList() {
  const orderList = useOrderStore((state) => state.orderList);

  const drinkList = orderList.filter((item) => item.category === "drink");
  const foodList = orderList.filter((item) => item.category === "food");

  const space_list_topBottom = "mt-9 mb-7";
  const list_width = "w-10/12";
  const border_img = "border-[1px] border-slate-500";
  const bg_category = "";

  useEffect(() => {}, []);

  return (
    <div className="mt-10 flex flex-col gap-7">
      <div className={`mx-auto my-0 ${list_width}`}>
        {/* ######################## */}
        {/* ####### DRINKS ####### */}
        <div className={`${bg_category}`}>
          <div
            className={`relative h-12 w-[100vw] -translate-x-1/2 left-1/2 flex items-center
                          bg-slate-200`}
          >
            <Text tag={"p"} size="lg" weight="semibold" className="ml-[10%]">
              Drink
            </Text>
            <div className="w-4/12 absolute top-1/2 -translate-y-1/2 right-0">
              <Image
                src="/drink2.png"
                alt={"list of ordered drinks"}
                width="100"
                height="100"
                style={{ objectFit: "contain" }}
                className={`scale-75`}
              />
            </div>
          </div>
          {drinkList.length !== 0 ? (
            <ul className={`mx-auto my-0 ${space_list_topBottom} flex flex-col align-middle gap-3`}>
              {drinkList.map((item, i) => (
                <li
                  key={i}
                  className={`relative p-2 flex items-center gap-2 shadow-orderedItems rounded text-slate-500`}
                >
                  <span className="w-2/12">#{item.id}</span>
                  <Text tag="p" className="w-8/12">
                    {item.title}
                  </Text>
                  <span className="w-2/12 text-right">{item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-14 h-14 mx-auto my-0 grid place-items-center rounded-sm bg-orange-50">
              <Text tag="p" className="">
                your throat wants to stay dry
              </Text>
            </div>
          )}
        </div>
        {/* ######################## */}
        {/* ####### FOOD ####### */}
        <div className={`mt-12 ${bg_category}`}>
          <div
            className={`relative h-12 w-[100vw] flex items-center -translate-x-1/2 left-1/2
                        bg-slate-200 `}
          >
            <Text tag={"p"} size="lg" weight="semibold" className="ml-[10%]">
              Food
            </Text>
            <div className="w-4/12 absolute top-1/2 -translate-y-1/2 right-0">
              <Image
                src="/food3.png"
                alt={"list of ordered drinks"}
                width="100"
                height="100"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          {foodList.length !== 0 ? (
            <ul className={`mx-auto my-0 ${space_list_topBottom} flex flex-col align-middle gap-3`}>
              {foodList.map((item, i) => (
                <li
                  key={i}
                  className={`relative p-2 flex items-center gap-2 shadow-orderedItems rounded text-slate-500`}
                >
                  <span className="w-2/12">#{item.id}</span>
                  <Text tag="p" className="w-8/12">
                    {item.title}
                  </Text>
                  <span className="w-2/12 text-right">{item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-14 h-14 mx-auto my-0 grid place-items-center rounded-sm bg-orange-50">
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
