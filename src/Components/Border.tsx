import Animate from "./Animate";
import Grid, { GridProps } from "./Grid";

const Border = ({ grid }: GridProps) => {
  return (
    <div style={{ padding: 8, border: "4px solid var(--secondary)" }}>
      <div style={{ padding: 12, border: "4px solid var(--secondary)" }}>
        <Animate grid={grid}></Animate>
      </div>
    </div>
  );
};

export default Border;
