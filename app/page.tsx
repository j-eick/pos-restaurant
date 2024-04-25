import { LinkCo } from "./components/ui/link";
import { Text } from "./components/ui/text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-primary">Welcome to [...]</h1>
      <Text tag={"p"} className="text-xl">
        This is a text
      </Text>
      <LinkCo href={"/menu"} variant="menuLink">
        Go to menu
      </LinkCo>
    </main>
  );
}
