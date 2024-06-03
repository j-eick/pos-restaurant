// import { useCustomerOrders } from "@/app/context/CustomerOrderProvider";
import Image from "next/image";
import { useEffect } from "react";
import useOrderStore from "@/app/hooks/useOrderStore";
import { exampleOrder } from "@/app/lib/exampleOrder";
import { Text } from "../text";

export function OrderList() {
  const orderList = useOrderStore((state) => state.orderList);

  const space_list_topBottom = "mt-9 mb-7";
  const list_width = "w-10/12";
  const border_img = "border-[1px] border-slate-500";
  const bg_category = "";
  // const shadow = "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
  // const underline = "border-[.5px] border-slate-300 w-full left-0 bottom-2";

  useEffect(() => {
    console.log(orderList);
  }, []);

  return (
    <div className="mt-10 flex flex-col gap-7">
      {/* <div className="">
        <div className={`relative w-full h-10 ${bg_category} flex items-center`}>
          <Text tag={"p"} size="lg" weight="semibold" className="pl-3">
            Drinks
          </Text>
          <div className="w-3/12 absolute top-1/2 -translate-y-1/2 right-3">
            <Image
              src="/drink.jpg"
              alt={"list of ordered drinks"}
              width="100"
              height="100"
              fill={false}
              priority={true}
              style={{ objectFit: "contain" }}
              className={`rounded-sm ${border_img}`}
            />
          </div>
        </div>
        <ul
          className={`mx-auto my-0 ${space_list_topBottom} ${list_width} flex flex-col align-middle gap-5 bg-red-200`}
        >
          {exampleOrder.map((item, i) => (
            <li key={i} className="inline-flex flex-col border-2 border-slate-400">
              <span className="inline-block">#{item.id}</span>
              <Text tag="p">{item.title}</Text>
            </li>
          ))}
        </ul>
      </div> */}

      <div className={`mx-auto my-0 ${list_width}`}>
        <div className={`relative h-10 flex items-center ${bg_category}`}>
          <Text tag={"p"} size="lg" weight="semibold">
            Food
          </Text>
          <div className="w-4/12 absolute top-1/2 -translate-y-1/2 right-0">
            <Image
              src="/food.jpg"
              alt={"list of ordered drinks"}
              width="100"
              height="100"
              fill={false}
              priority={true}
              style={{ objectFit: "contain" }}
              className={`rounded-sm ${border_img}`}
            />
          </div>
        </div>
        {orderList.length !== 0 ? (
          <ul className={`mx-auto my-0 ${space_list_topBottom} flex flex-col align-middle gap-3`}>
            {orderList.map((item, i) => (
              <li key={i} className={`relative p-2 flex items-center gap-2 shadow-orderedItems rounded text-slate-500`}>
                <span className="w-2/12">#{item.id}</span>
                <Text tag="p" className="w-8/12">
                  {item.title}
                </Text>
                <span className="w-2/12 text-right">{item.price}</span>
                {/* <span className={`absolute ${underline}`} /> */}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 h-20 mx-auto my-0 grid place-items-center rounded-sm shadow-dishOrder bg-slate-50">
            <Text tag="p" className="">
              no orders yet
            </Text>
          </div>
        )}
      </div>
    </div>
  );
}
