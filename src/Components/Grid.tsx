import Arrow from "./Arrow";
import Star1 from "./Star1";
import Star2 from "./Star2";
import Hexagon from "./Hexagon";

const W = 21;

export interface GridProps {
  grid: number[][];
}
const Grid = ({ grid }: GridProps) => {
  return (
    <div>
      {grid.map((row, index) => {
        if (index % 4 === 0) {
          return RowOne(row, index);
        } else if (index % 4 === 1) {
          return RowTwo(row, index);
        } else if (index % 4 === 2) {
          return RowThree(row, index);
        } else if (index % 4 === 3) {
          return RowFour(row, index);
        }
      })}
    </div>
  );
};

const RowOne = (row: number[], index: number) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
      }}
    >
      {row.map((val, index2) =>
        index2 % 2 === 0 ? (
          <Star1 key={`${index}_${index2}`} isFilled={val === 1} />
        ) : (
          <Hexagon key={`${index}_${index2}`} isFilled={val === 1} />
        )
      )}

      {/* {row.map((val, index2) => {
        index 2% 2 === 0 ? (
          <Star1 key={index} isFilled />
        ) : (
          <Hexagon isFilled key={index} />
        );
      })} */}
      {/* {Array.from({ length: num }, (_, index) =>
        
      )} */}
    </div>
  );
};
const RowTwo = (row: number[], index: number) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 16, //22, -10 to fit in corner
        marginTop: -10 + 6,
      }}
    >
      {row.map((val, index2) =>
        index2 % 2 === 0 ? (
          <Arrow
            dir={3}
            key={`${index}_${index2}`}
            isFilled={val === 1}
            style={{ marginLeft: "12px", marginRight: "4px" }}
          />
        ) : (
          <Arrow
            dir={0}
            key={`${index}_${index2}`}
            isFilled={val === 1}
            style={{ marginRight: "12px" }}
          />
        )
      )}
    </div>
  );
};
const RowThree = (row: number[], index: number) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4.5,
        marginTop: -10,
        marginBottom: -10,
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {row.map((val, index2) =>
        index2 % 2 === 0 ? (
          <Hexagon
            key={`${index}_${index2}`}
            isFilled={val === 1}
            vertical
            style={{ marginLeft: 10, marginRight: 10 }}
          />
        ) : (
          // <Arrow
          //   dir={3}
          //   key={`${index}_${index2}`}
          //   isFilled={val === 1}
          //   style={{ marginLeft: "12px", marginRight: "4px" }}
          // />
          <Star2 key={`${index}_${index2}`} isFilled={val === 1} />
          // <Arrow
          //   dir={0}
          //   key={`${index}_${index2}`}
          //   isFilled={val === 1}
          //   style={{ marginRight: "12" }}
          // />
        )
      )}
      {/* {Array.from({ length: W - 1 }, (_, index) =>
        index % 2 === 0 ? (
          <Hexagon
            isFilled
            vertical
            style={{ marginLeft: 10, marginRight: 10 }}
          />
        ) : (
          <Star2 key={index} isFilled />
        )
      )} */}
    </div>
  );
};
const RowFour = (row: number[], index: number) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // gap: 2,
        marginLeft: 16, //22, -10 to fit in corner
        marginTop: -10 + 6,
        marginBottom: -4,
      }}
    >
      {row.map((val, index2) =>
        index2 % 2 === 0 ? (
          <Arrow
            dir={2}
            key={`${index}_${index2}`}
            isFilled={val === 1}
            style={{ marginLeft: "12px", marginRight: "4px" }}
          />
        ) : (
          <Arrow
            dir={1}
            key={`${index}_${index2}`}
            isFilled={val === 1}
            style={{ marginRight: "12" }}
          />
        )
      )}
      {/* {Array.from({ length: W - 1 }, (_, index) =>
        index % 2 === 0 ? (
          <Arrow
            dir={2}
            key={index}
            isFilled
            style={{ marginLeft: "12px", marginRight: "4px" }}
          />
        ) : (
          <Arrow dir={1} key={index} isFilled style={{ marginRight: "12" }} />
        )
      )} */}
    </div>
  );
};

export default Grid;
