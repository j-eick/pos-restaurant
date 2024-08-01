import { useEffect, useRef, useState } from "react";
import { LinkCo } from "../link";
import { IoIosArrowBack } from "react-icons/io";
import useInViewport from "@/app/hooks/useInViewport";

export function HeadingOrderMenu() {
  const targetRef = useRef<HTMLDivElement>(null);
  const inViewPort = useInViewport(targetRef, { threshold: 0.5 });

  return (
    <>
      {!inViewPort ? (
        <div className="relative h-10 w-10">
          <header
            className={`fixed z-50 top-7 left-5 w-max h-12 border rounded-sm bg-white
              sm:h-16 sm:w-16 `}
          >
            <LinkCo
              href={"/menu"}
              className="h-full flex gap-3 items-center justify-center
                        bg-transparent"
            >
              <IoIosArrowBack className="text-lg" />
              <span>menu</span>
            </LinkCo>
          </header>
          {/* INFO: Just a pixel to "carry" the ref; in order to absorb flickering caused by rapid false/true toggle */}
          <div className="absolute top-0 left-10 z-50 w-[50px] h-[50px]" ref={targetRef} />
        </div>
      ) : (
        <div className="relative h-10 w-10">
          <header
            className={`relative w-full h-16 flex justify-center items-center
                    sm:h-20 `}
          >
            <LinkCo
              href={"/menu"}
              className="absolute w-max top-1/2 -translate-y-1/2 left-3 
                          flex gap-3 items-center
                          bg-transparent"
            >
              <IoIosArrowBack className="text-lg" />
              back to menu
            </LinkCo>
          </header>
          {/* INFO: bg-blue-500 opacity-40 (debugging) */}
          <div className="absolute z-50 left-10 top-0 w-[50px] h-[50px] " ref={targetRef} />
        </div>
      )}
    </>
  );
}
