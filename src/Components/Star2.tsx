interface Star2Props extends React.SVGProps<SVGSVGElement> {
  isFilled?: boolean;
  scale?: number;
}

const Star2 = ({ isFilled = false, scale = 1, ...props }: Star2Props) => {
  return (
    <svg
      width={19 * scale}
      height={19 * scale}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Axis-aligned square */}
      <rect
        x="3"
        y="3"
        width="13"
        height="13"
        {...({
          fill: isFilled ? "var(--primary)" : "var(--secondary)",
        } as React.SVGProps<SVGRectElement>)}
      />
      {/* Rotated square */}
      <rect
        x="3"
        y="3"
        width="13"
        height="13"
        fill={isFilled ? "var(--primary)" : "var(--secondary)"}
        transform="rotate(45 9.5 9.5)"
      />
    </svg>
  );
};

export default Star2;
