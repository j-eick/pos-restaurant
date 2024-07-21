"use client";

import { menuItems, drinkItems } from "../lib/menu";
import { Dish } from "../components/ui/dish";
import { Button } from "../components/ui/button";
import { SideMenu } from "../components/ui/sideMenu";
import { useInView, InView } from "react-intersection-observer";
import { useState } from "react";
import { Heading } from "../components/ui/heading";
import useOrderStore from "../hooks/useOrderStore";

export default function Menu() {
  const selectedCategory = useOrderStore((state) => state.selectedCategory);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState();
  const { ref, inView } = useInView({ threshold: 0.75 });
  const [itemIdent] = useState("");

  const setInView = (inView: boolean, entry: any) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };

  return (
    <main className="relative w-full shadow-mainShadow">
      <Heading />
      <SideMenu isOpen={isMenuOpen} inView={inView} highlight={visibleSection} href={itemIdent} />
      <div className={`pt-44 pb-20 px-6 flex flex-col items-center`}>
        <section className="w-full text-center">
          {selectedCategory === "" && (
            <div className=" bg-red-400">
              <h1 className="border-2">What comes first?</h1>
            </div>
          )}
          {selectedCategory === "drink" && (
            <ul
              id="section-wrapper"
              ref={ref}
              role="list"
              className={`flex flex-col gap-20
                          sm:grid sm:grid-cols-2 sm:gap-y-14 sm:gap-x-0
                          md:grid md:grid-cols-2 md:gap-y-14 md:gap-x-0`}
            >
              {drinkItems.map((item) => (
                <InView onChange={setInView} threshold={0.75} key={item.title}>
                  {({ ref }) => (
                    <li key={item.id} id={item.title} ref={ref} itemID={itemIdent}>
                      <Dish dish={item} />
                    </li>
                  )}
                </InView>
              ))}
            </ul>
          )}
          {selectedCategory === "food" && (
            <ul
              id="section-wrapper"
              ref={ref}
              role="list"
              className={`flex flex-col gap-20 
                          md:grid md:grid-cols-2 md:gap-y-14 md:gap-x-0`}
            >
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
          )}
          {selectedCategory === "dessert" && (
            <ul
              id="section-wrapper"
              ref={ref}
              role="list"
              className={`flex flex-col gap-20 
                          md:grid md:grid-cols-2 md:gap-y-14 md:gap-x-0`}
            >
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
          )}
        </section>
        {selectedCategory == "" ? null : (
          <Button
            size="lg"
            color="peach"
            className={`fixed z-50 flex justify-center items-center rounded-full transition-all duration-500
                  ${isMenuOpen ? "bg-custom-peach scale-75 right-3 bottom-3" : `bottom-6 right-6 bg-orange-300`}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="menu.png" alt="menu button" className="scale-[45%]" />
          </Button>
        )}
      </div>
    </main>
  );
}
