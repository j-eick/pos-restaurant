"use client";

import { menuItems } from "../lib/menu";
import { Dish } from "../components/ui/dish";
import { Button } from "../components/ui/button";
import { SideMenu } from "../components/ui/sideMenu";
import { useInView, InView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Heading } from "../components/ui/heading";
import { useCounter } from "../hooks/useCounter";
import { CustomerOrderProvider, useCustomerOrders } from "../context/CustomerOrderProvider";

// const addOrder = () => {
//   preventDefault();
// }

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState();
  const [count, { add, subtract, reset }] = useCounter(0);
  const { ref, inView } = useInView({ threshold: 0.75 });

  const setInView = (inView: boolean, entry: any) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };

  useEffect(() => {}, [count]);

  return (
    <CustomerOrderProvider>
      <main className="relative">
        <Heading />
        <SideMenu isOpen={isMenuOpen} inView={inView} highlight={visibleSection} />
        <div className="pt-36 pb-20 px-6 flex flex-col items-center">
          <section className="text-center">
            <ul id="section-wrapper" ref={ref} role="list" className="flex flex-col gap-20">
              {menuItems.map((item) => (
                <InView onChange={setInView} threshold={0.75} key={item.title}>
                  {({ ref }) => (
                    <li key={item.id} id={item.title} ref={ref}>
                      <Dish dish={item} />
                    </li>
                  )}
                </InView>
              ))}
            </ul>
          </section>
          <Button
            size="lg"
            color="peach"
            className={`fixed z-50 flex justify-center items-center rounded-full transition-all duration-500
                    ${
                      isMenuOpen
                        ? "bg-custom-peach scale-75 right-3 bottom-3"
                        : `bottom-6 right-6 bg-orange-300 border-2 border-gray-300`
                    }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="menu.png" alt="menu button" className="scale-[45%]" />
          </Button>
        </div>
      </main>
    </CustomerOrderProvider>
  );
}
