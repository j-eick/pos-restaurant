import { menuItems } from "../lib/menu";
import { Text } from "../components/ui/text";
import { Dish } from "../components/ui/dish";

export default function Menu() {
  // useEffect(() => {}, []);

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
    </main>
  );
}
