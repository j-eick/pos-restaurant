import React, { RefObject, useEffect, useState } from "react";

const useInViewport = <T extends HTMLElement>(ref: RefObject<T>, options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      console.log(entry);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    } else {
      return;
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, options]);

  return isInView;
};

export default useInViewport;
