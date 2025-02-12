// interface HexagonProps {
//   rotate?: boolean;
//   isFilled?: boolean;
// }
interface HexagonProps extends React.SVGProps<SVGSVGElement> {
  vertical?: boolean;
  isFilled?: boolean;
  scale?: number;
}
const Hexagon = ({
  vertical = false,
  isFilled,
  scale = 1,
  ...props
}: HexagonProps) => {
  return !vertical ? (
    <svg
      width={24 * scale}
      height={24 * scale}
      viewBox="0 0 24 12"
      {...({
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      } as React.SVGProps<SVGSVGElement>)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0H6L0 6L6 12H18L24 6L18 0Z"
        {...({
          fill: isFilled ? "var(--primary)" : "var(--secondary)",
        } as React.SVGProps<SVGPathElement>)}
      />
    </svg>
  ) : (
    <svg
      width="12"
      height="24"
      viewBox="0 0 12 24"
      {...({
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      } as React.SVGProps<SVGSVGElement>)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18 L12 6 L6 0 L0 6 L0 18 L6 24 L12 18 Z"
        {...({
          fill: isFilled ? "var(--primary)" : "var(--secondary)",
        } as React.SVGProps<SVGPathElement>)}
      />
    </svg>
  );
};

export default Hexagon;
