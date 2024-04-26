import { menuItems } from "../lib/menu";
import { Text } from "../components/ui/text";
import Image from "next/image";

export default function Menu() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between py-24 px-10 ">
      <Text tag="h1" size="2xl" weight="semibold">
        Menu
      </Text>
      <section className="text-center">
        <ul role="list" className="flex flex-col gap-10">
          {menuItems.map((item) => (
            <li key={item.id} className="border-2 border-red-400">
              <article>
                <div className="flex gap-2 justify-center border-2 border-green-400 max-h-[220px]">
                  <img src={item.photo} alt={item.altText} />
                  <ul role="list" className="flex flex-col gap-3 overflow-y-auto max-h-[220px] hideScrollbar">
                    {item.gallery.map((photo, i) => (
                      <li key={i}>
                        <img src={photo} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
                <Text tag="h1" size="lg" weight="semibold">
                  {item.title}
                </Text>

                <Text tag="p">{item.description}</Text>
                <Text tag="p">Ingredients: {item.ingredients}</Text>
                <Text tag="p">Allergens: {item.allergens}</Text>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
