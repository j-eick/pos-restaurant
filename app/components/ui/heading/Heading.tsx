import { useCustomerOrders } from "@/app/context/CustomerOrderProvider";
import { Text } from "../text";
import Link from "next/link";

export function Heading() {
  const { customerOrder, setCustomerOrder } = useCustomerOrders();

  return (
    //TODO: WHAT TO DO WITH THE HEADER???
    <header className="fixed z-50 w-full bg-white">
      <ul role="list" className="h-16 flex justify-around">
        <li className="relative h-full w-2/6 flex justify-center">
          <div className="absolute top-1/2 -translate-y-1/4">one</div> {/*   ELEMENT 1   */}
        </li>
        <li className="relative h-full w-2/6 flex justify-center">
          <div className="absolute top-1/2 -translate-y-1/4">two</div> {/*   ELEMENT 2   */}
        </li>
        {/*   ELEMENT 3   */}
        <li className="relative flex items-end justify-center w-2/6 h-full">
          <div className="absolute z-60 w-12 h-12">
            {customerOrder.length !== 0 ? (
              <Link href="/menu/order">
                <span
                  className="absolute z-20 bottom-5 h-7 w-7  bg-custom-peach-dark  rounded-full 
                         left-1/2 -translate-x-1/2 grid place-items-center"
                >
                  {customerOrder.length}
                </span>
                <img
                  src="bowl.svg"
                  alt=""
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl"
                />
              </Link>
            ) : (
              <a href="/menu/order">
                <Text
                  tag="p"
                  weight="bold"
                  className="absolute z-20 px-2 bottom-7 left-1/2 -translate-x-1/2 rounded -rotate-12"
                >
                  empty
                </Text>
                <img
                  src="bowl.svg"
                  alt=""
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl"
                />
              </a>
            )}
          </div>
        </li>
      </ul>
    </header>
  );
}
