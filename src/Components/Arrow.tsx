// import "react-native-svg";
import React from "react";

interface ArrowProps extends React.SVGProps<SVGSVGElement> {
  dir: number;
  isFilled?: boolean;
  scale?: number;
}
const Arrow = ({ dir, isFilled = false, scale = 1, ...props }: ArrowProps) => {
  return (
    <svg
      width={16 * scale}
      height={16 * scale}
      viewBox="0 0 16 16"
      {...({
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      } as React.SVGProps<SVGSVGElement>)}
      {...props}
    >
      <path
        d="M0 6
        H10
        V16
        L16 10
        V0
        H6
        L0 6
        Z"
        {...({
          fill: isFilled ? "var(--primary)" : "var(--secondary)",
        } as React.SVGProps<SVGPathElement>)}
        transform={`rotate(${dir * 90} 8 8)`}
      />
    </svg>
  );
};
export default Arrow;

//
