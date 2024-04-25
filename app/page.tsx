import { Link_Co } from "./components/ui/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-primary">Welcome to [...]</h1>
      <Link_Co href={"/menu"} variant="menuLink">
        Go to menu
      </Link_Co>
    </main>
  );
}
