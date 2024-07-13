import Image from "next/image";
import { LinkCo } from "./components/ui/link";
import { Text } from "./components/ui/text";

export default function Home() {
  return (
    <main className="relative max-w-3xl flex min-h-screen flex-col px-10 overflow-hidden">
      <div className="h-[50vh] bg-slate-400 opacity-60">
        <Text
          tag={"h1"}
          size="3xl"
          weight="bold"
          className="absolute h-1/2 text-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-black"
        >
          Welcome to <br /> 김치 Guys
        </Text>
      </div>
      <div className="absolute  right-[1rem] top-1/2 -translate-y-[10%] -z-20 opacity-50">
        <Image
          src="/landingpage.jpg"
          alt={"landingpage_background"}
          width={800}
          height={800}
          priority={true}
          className="scale-[2.5] xs:scale-[2] sm:scale-[1.5] "
        />
      </div>
      <div className="h-[50vh] my-0 mx-auto flex items-center bg-transparent">
        <LinkCo href={"/menu"} variant="menuLink" className="font-semibold">
          Go to menu
        </LinkCo>
      </div>
    </main>
  );
}
