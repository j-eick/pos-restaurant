import Image from "next/image";
import { Button } from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-primary">Welcome to [...]</h1>
      <Button variant="menuNav">Start ordering</Button>
    </main>
  );
}
