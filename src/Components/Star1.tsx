interface Star1Props extends React.SVGProps<SVGSVGElement> {
  isFilled?: boolean;
  scale?: number;
}

const Star1: React.FC<Star1Props> = ({
  isFilled,
  // style,
  scale = 1,
  ...props
}) => {
  return (
    <svg
      width={32 * scale}
      height={32 * scale}
      viewBox="0 0 32 32"
      // c="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M22 0
          V10
          H32
          L26 16

          L32 22

          H22
          V32
          L16 26

          L 10 32
          
          V22
          H0
          L 6 16
          L 0 10
          H 10
          V 0
          L 16 6

        
          Z
        "
        {...({
          fill: isFilled ? "var(--primary)" : "var(--secondary)",
        } as React.SVGProps<SVGPathElement>)}
      />
    </svg>
  );
};

export default Star1;
