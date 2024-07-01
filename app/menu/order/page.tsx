"use client";

import { OrderList } from "@/app/components/ui/orderList";
import { LinkCo } from "@/app/components/ui/link";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import useOrderStore from "@/app/hooks/useOrderStore";
import { Button } from "@/app/components/ui/button";
import { FaConciergeBell } from "react-icons/fa";
import { LuConciergeBell } from "react-icons/lu";
import { useState } from "react";
import { useCounter } from "@/app/hooks/useCounter";

console.clear();

export default function CustomerOrders() {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [count, { add, reset }] = useCounter();
  const [orderButtonDisabled, setOrderButtonDisabled] = useState(false);

  const orderList = useOrderStore((state) => state.orderList);
  const resetOrderList = useOrderStore((state) => state.clearList);

  const router = useRouter();

  function handlePlaceOrder() {
    if (count === 0) {
      add();
    }
    if (count === 1) {
      add();
      setOrderButtonDisabled(!orderButtonDisabled);
      setTimeout(() => {
        router.push("/complete");
      }, 6000);
      reset();
    }
  }

  const buttonAnimation =
    count === 0
      ? ""
      : count === 1
        ? "animate-slideDownUp button-half"
        : count === 2
          ? "animate-slideDownUp button-full "
          : "";

  return (
    <main>
      <header className="relative w-full h-16 flex justify-center items-center">
        <LinkCo
          href={"/menu"}
          className="absolute top-1/2 -translate-y-1/2 left-3 
                          flex gap-3 items-center
                          bg-transparent"
        >
          <IoIosArrowBack className="text-lg" />
          back to menu
        </LinkCo>
      </header>
      <OrderList />
      <div className="w-full mt-16 flex justify-center">
        <Button
          onClick={handlePlaceOrder}
          type="placeOrder"
          key={count}
          isClicked={buttonIsClicked}
          disabled={orderButtonDisabled}
          setIsClicked={setButtonIsClicked}
          className={`
                      ${buttonAnimation} `}
        >
          {count === 0 && (
            <>
              <span>place order</span>
              <LuConciergeBell className="scale-[120%]" />
            </>
          )}
          {count === 1 && (
            <>
              <span>Confirm</span>
              <LuConciergeBell className="scale-[120%]" />
            </>
          )}
          {count >= 2 && (
            <>
              <span>Confirm</span>
              <FaConciergeBell
                className={`scale-[120%] animate-bellWiggleFast ${count === 2 && "pointer-events-none"}`}
              />
            </>
          )}
        </Button>
      </div>
    </main>
  );
}
