"use client";

import { OrderList } from "@/app/components/ui/orderList";
import { LinkCo } from "@/app/components/ui/link";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { FaConciergeBell } from "react-icons/fa";
import { LuConciergeBell } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { useCounter } from "@/app/hooks/useCounter";
import { Text } from "@/app/components/ui/text";
import { Countdown } from "@/app/components/ui/countdown";
import { HeadingOrderMenu } from "@/app/components/ui/heading";

export default function CustomerOrders() {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [count, { add, reset }] = useCounter();
  const [orderButtonDisabled, setOrderButtonDisabled] = useState(false);
  const [isOrderButtonHidden, setIsOrderButtonHidden] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  const router = useRouter();

  function handlePlaceOrder() {
    if (count === 0) {
      add();
    }
    if (count === 1) {
      add();
      setOrderButtonDisabled(!orderButtonDisabled);

      setTimeout(() => {
        setIsOrderButtonHidden(true);
      }, 3000);

      setTimeout(() => {
        router.push("/complete");
        // reset click-counter (placeOrder-Button)
        reset();
      }, 6000);
    }
  }

  const buttonAnimation =
    count === 0 ? "" : count === 1 ? "animate-slideDownUp " : count === 2 ? "animate-slideDownUp " : "";

  useEffect(() => {
    const reference = ref.current;
    if (!reference) {
      return;
    }

    console.log(reference);

    const observer = new IntersectionObserver(
      (entry) => {
        const ioEntry = entry[0];
        setIsIntersecting(ioEntry.isIntersecting);
        console.log(ioEntry);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(reference);

    return () => {
      if (reference) observer.unobserve(reference);
    };
  }, [isIntersecting]);

  return (
    <main className={`relative min-h-screen shadow-mainShadow`}>
      <HeadingOrderMenu />
      <OrderList />
      {!isOrderButtonHidden ? (
        <Button
          onClick={handlePlaceOrder}
          type="placeOrder"
          key={count}
          isClicked={buttonIsClicked}
          disabled={orderButtonDisabled}
          hidden={isOrderButtonHidden}
          setIsClicked={setButtonIsClicked}
          className={`${buttonAnimation} max-w-52 mx-auto my-0`}
          count={count}
        >
          {count === 0 && (
            <>
              <span>Place Order</span>
              <LuConciergeBell className="scale-[120%]" />
            </>
          )}
          {count === 1 && (
            <>
              <span>Plz Confirm!</span>
              <LuConciergeBell className="scale-130" />
            </>
          )}
          {count >= 2 && (
            <>
              <span>Let us cook</span>
              <FaConciergeBell className={`scale-130 animate-bellWiggleFast ${count === 2 && "pointer-events-none"}`} />
            </>
          )}
        </Button>
      ) : (
        <div className="bg-slate-300 animate-slideDownUp">
          <Text tag="p" size="lg" className="h-14 grid place-items-center">
            Thank you for your order!
          </Text>
        </div>
      )}
      {count === 2 && <Countdown />}
    </main>
  );
}
