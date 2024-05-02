import { CiBowlNoodles } from "react-icons/ci";

export function Heading() {
  return (
    <header className="sticky z-20 bg-green-300">
      <ul role="list" className="h-16 flex justify-around gap-3 border-2">
        <li className="flex items-center">one</li>
        <li className="flex items-center">two</li>
        <li className="flex items-end">
          <div className="relative w-12 h-12 flex border-2 ">
            <span
              className="absolute z-20 bottom-5 h-7 w-7 border-1 border-black rounded-full 
                            left-1/2 -translate-x-1/2 grid place-items-center bg-white"
            >
              0
            </span>
            <img
              src="bowl.svg"
              alt=""
              className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl"
            />
          </div>
        </li>
      </ul>
    </header>
  );
}
