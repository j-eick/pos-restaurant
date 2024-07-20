type MySVGProps = {
  variant: "bin";
  // "1em" | "1.25em" | "1.5em"
  width?: string;
  height?: string;
  size?: "20" | "24" | "28" | "32";
  fill?: "currentColor";
};

export const MySVGs = ({ variant, width = "1em", height = "1em", size = "28", fill = "currentColor" }: MySVGProps) => {
  const all = {
    bin: "M11.5 6h5a2.5 2.5 0 0 0-5 0M10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-1.217 14.603A4.25 4.25 0 0 1 17.488 26h-6.976a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5zM7.772 21.978a2.75 2.75 0 0 0 2.74 2.522h6.976a2.75 2.75 0 0 0 2.74-2.522L21.436 7.5H6.565zM11.75 11a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75m5.25.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0z",
  };
  const svgComponent = all[variant];
  if (!svgComponent) {
    throw new Error("This svg-variant does NOT exist!");
  }
  return (
    <svg width={width} height={height} viewBox={`0 0 ${size} ${size}`}>
      <path fill={fill} d={svgComponent} />
    </svg>
  );
};
