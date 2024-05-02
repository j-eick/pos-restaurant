import { CiBowlNoodles } from "react-icons/ci";

export function Heading() {
  return (
    //TODO: WHAT TO DO WITH THE HEADER???
    <header className="fixed z-50 w-full bg-white">
      <ul role="list" className="h-16 flex justify-around">
        <li className="relative h-full w-2/6 flex justify-center">
          <div className="absolute top-1/2 -translate-y-1/4"></div> {/*   ELEMENT 1   */}
        </li>
        <li className="relative h-full w-2/6 flex justify-center">
          <div className="absolute top-1/2 -translate-y-1/4"></div> {/*   ELEMENT 2   */}
        </li>
        {/*   ELEMENT 3   */}
        <li className="relative flex items-end justify-center w-2/6 h-full">
          <div className="absolute z-60 w-12 h-12">
            <span
              className="absolute z-20 bottom-5 h-7 w-7 border-1 bg-black rounded-full 
                         left-1/2 -translate-x-1/2 grid place-items-center text-white"
            >
              12
            </span>
            <img
              src="bowl.svg"
              alt=""
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl"
            />
          </div>
        </li>
      </ul>
    </header>
  );
}
