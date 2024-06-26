"use client";

import { useEffect } from "react";
import { Text } from "../components/ui/text";
import { useRouter } from "next/navigation";
import useOrderStore from "../hooks/useOrderStore";
import { LinkCo } from "../components/ui/link";
import Image from "next/image";

export default function OrderCompleted() {
  const list = useOrderStore((state) => state.orderList);
  const router = useRouter();

  const bg_transp = "bg-transparent";

  useEffect(() => {
    setTimeout(() => {
      // router.push("/");
    }, 5000);
  }, []);

  return (
    <main className="relative h-screen flex flex-col items-center justify-end ">
      <span className="h-1/3" />
      <div className="h-2/3">
        <Image
          src="/orderComplete2.png"
          alt={"order-complete_background"}
          width={500}
          height={800}
          priority={true}
          className="opacity-50 scale-105"
        />
      </div>
      {/* ###########  ORDER PLACED  ###########  */}
      <div
        className="absolute w-4/5 h-orderPlaced top-0 flex flex-col items-center 
                      backdrop-blur-sm bg-slate-300/50
                      animate-slideDown transition-transform transform-gpu"
      >
        <span className="h-1/2" />
        <div className="h-1/2 flex flex-col gap-5 justify-center">
          <Text tag={"h1"} size="2xl" weight="bold" className="text-center">
            Order placed
          </Text>
          <Text tag={"p"} size="regular" weight="bold" color="secondary" className="text-center">
            We&apos;re on it
          </Text>
        </div>
      </div>
      {/* ###########  BUTTONS  ###########  */}
      <div className="absolute w-4/5 flex justify-center items-start h-orderPlaced_buttons bg-transparent">
        <LinkCo href={"/menu"} variant="placeOrderLink" className="py-4 ">
          <Text tag={"p"} size="lg" className="h-3/12 text-">
            back to menu
          </Text>
        </LinkCo>

        {/* <div className="h-1/4 w-full grid place-items-center ">
          <LinkCo href={"/"} variant="complete_navButtons">
            <Text tag={"p"} size="regular" className="h-3/12">
              back to start
            </Text>
          </LinkCo>
        </div> */}
      </div>
    </main>
  );
}
