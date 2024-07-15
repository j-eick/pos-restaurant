import Image from "next/image";
import { LinkCo } from "./components/ui/link";
import { Text } from "./components/ui/text";

export default function Home() {
  return (
    <main className="relative max-w-3xl h-screen px-10">
      <div className="absolute right-[1rem] top-1/2 -translate-y-[10%] -z-20 opacity-50">
        <Image
          src="/landingpage.jpg"
          alt={"landingpage_background"}
          width={800}
          height={800}
          priority={true}
          className="scale-[2.5] xs:scale-[2] sm:scale-[1.5] "
        />
      </div>
      <div
        className={`relative h-1/2 grid place-items-center 
                      before:absolute before:-z-10 before:inset-0 before:content-[''] before:bg-slate-400 before:opacity-60`}
      >
        <span className="h-1/2" />
        <Text tag={"h1"} size="3xl" weight="bold" className="text-center">
          Welcome to <br /> 김치 Guys
        </Text>
      </div>
      <div className="w-full h-1/2 grid place-items-center bg-transparent">
        <LinkCo href={"/menu"} variant="menuLink" className="font-semibold">
          Go to menu
        </LinkCo>
      </div>
    </main>
  );
}
