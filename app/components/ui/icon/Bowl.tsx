import useOrderStore from "@/app/hooks/useOrderStore";
import Link from "next/link";

export function Bowl() {
  const store = useOrderStore();

  return (
    <div
      className={`relative w-12
                  sm:w-16`}
    >
      {store.selectedItems.length !== 0 ? (
        <Link href="/menu/order">
          <div
            className={`absolute z-20 bottom-6 h-7 w-7 bg-custom-peach-dark rounded-full 
              left-1/2 -translate-x-1/2 grid place-items-center
              sm:h-8 sm:w-8 sm:text-lg sm:top-0 sm:animate-scale`}
          >
            {store.selectedItems.length}
          </div>
          <img src="bowl.svg" alt="" />
        </Link>
      ) : (
        <>
          <div
            className={`absolute z-20 bottom-6 h-7 w-7 left-1/2 -translate-x-1/2 grid place-items-center
                       bg-slate-500 rounded-full text-slate-300 
                         sm:h-8 sm:w-8 sm:text-lg sm:top-0`}
          >
            {store.selectedItems.length}
          </div>
          {/* <Text
            tag="p"
            weight="bold"
            className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 rounded -rotate-12 leading-none"
          >
            empty
          </Text> */}
          <img src="bowl.svg" alt="" className="w-full" />
        </>
      )}
    </div>
  );
}
