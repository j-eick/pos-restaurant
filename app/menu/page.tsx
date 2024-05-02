"use client";

import { menuItems } from "../lib/menu";
import { Text } from "../components/ui/text";
import { Dish } from "../components/ui/dish";
import { Button } from "../components/ui/button";
import { SideMenu } from "../components/ui/sideMenu";
import { useInView, InView } from "react-intersection-observer";
import { useState } from "react";
import { Heading } from "../components/ui/heading";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [visibleSection, setVisibleSection] = useState();
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  const setInView = (inView: boolean, entry: any) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };

  return (
    <main className="relative">
      <Heading />
      <SideMenu isOpen={isMenuOpen} inView={inView} highlight={visibleSection} />
      <div className="pt-20 pb-20 px-6 flex flex-col items-center">
        <Text tag="h1" size="2xl" weight="semibold" className="mb-14">
          Menu
        </Text>
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
                        : "bottom-6 right-6 bg-orange-300 border-2 border-slate-100"
                    }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="menu.png" alt="menu button" className="scale-[45%]" />
        </Button>
      </div>
    </main>
  );
}
