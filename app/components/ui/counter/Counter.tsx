import { useState } from "react";

type CounterProps = {
  children: number;
  className: string;
};

export function Counter({ children, className }: CounterProps) {
  const [isClicked, setIsCLicked] = useState(false);

  const handleClicked = () => {
    setIsCLicked(!isClicked);
  };

  return (
    <div className={className} onClick={handleClicked}>
      {children}
    </div>
  );
}
