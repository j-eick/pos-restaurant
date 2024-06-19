import { Text } from "../components/ui/text";

export default function OrderCompleted() {
  return (
    <main className=" h-screen flex flex-col items-center justify-center bg-teal-100">
      <article className="w-1/2 h-2/5 flex items-center justify-center border-2 bg-transparent">
        <Text tag={"p"} className="inline ">
          Thx for your order!
        </Text>
      </article>
    </main>
  );
}
