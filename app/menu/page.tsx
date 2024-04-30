"use client";

import { menuItems } from "../lib/menu";
import { Text } from "../components/ui/text";
import { Dish } from "../components/ui/dish";
import { Button } from "../components/ui/button";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between pb-12 pt-10 px-6">
      <Text tag="h1" size="2xl" weight="semibold" className="mb-14">
        Menu
      </Text>
      <section className="text-center">
        <ul role="list" className="flex flex-col gap-14">
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
        className="fixed z-50 bottom-6 right-6 flex justify-center items-center 
          rounded-full bg-custom-peach"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src="menu.png" alt="menu button" className="scale-[45%]" />
      </Button>
    </main>
  );
}
