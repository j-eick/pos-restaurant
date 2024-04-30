"use client";

import { menuItems } from "../lib/menu";
import { Text } from "../components/ui/text";
import { Dish } from "../components/ui/dish";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { SideMenu } from "../components/ui/sideMenu";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative">
      <SideMenu isOpen={isMenuOpen} />
      <div className="pt-20 pb-20 px-6 flex flex-col items-center">
        <Text tag="h1" size="2xl" weight="semibold" className="mb-14">
          Menu
        </Text>
        <section className="text-center">
          <ul role="list" className="flex flex-col gap-20">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Dish dish={item} />
              </li>
            ))}
          </ul>
        </section>
        <Button
          size="lg"
          color="peach"
          className={`fixed z-50 flex justify-center items-center rounded-full transition-all duration-500
                    ${
                      !isMenuOpen
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
