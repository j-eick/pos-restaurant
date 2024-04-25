import { LinkCo } from "./components/ui/link";
import { Text } from "./components/ui/text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Text tag={"h1"} size="3xl" weight="bold">
        Welcome to [...]
      </Text>
      <Text tag="p" className="text-center">
        This is a text Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab eius adipisci totam pariatur
        impedit voluptates voluptate rerum tempore earum accusamus cumque provident doloribus quo optio neque
        perferendis, nesciunt expedita.
      </Text>
      <LinkCo href={"/menu"} variant="menuLink">
        Go to menu
      </LinkCo>
    </main>
  );
}
