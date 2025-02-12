import Arrow from "./Arrow";
import Star1 from "./Star1";
import Star2 from "./Star2";
import Hexagon from "./Hexagon";

const W = 21;

interface GridMakerProps {
  grid: number[][];
  onCellClick: (row: number, col: number) => void;
  scale?: number;
}

const GridMaker = ({ grid, scale = 1, onCellClick }: GridMakerProps) => {
  return (
    <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      {grid.map((row, rowIndex) => {
        if (rowIndex % 4 === 0) {
          return (
            <RowOne
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              onCellClick={onCellClick}
              scale={scale}
            />
          );
        } else if (rowIndex % 4 === 1) {
          return (
            <RowTwo
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              onCellClick={onCellClick}
              scale={scale}
            />
          );
        } else if (rowIndex % 4 === 2) {
          return (
            <RowThree
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              onCellClick={onCellClick}
              scale={scale}
            />
          );
        } else if (rowIndex % 4 === 3) {
          return (
            <RowFour
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              onCellClick={onCellClick}
              scale={scale}
            />
          );
        }
      })}
    </div>
  );
};

interface RowProps {
  row: number[];
  rowIndex: number;
  onCellClick: (row: number, col: number) => void;
  scale?: number;
}

const RowOne = ({ row, rowIndex, onCellClick, scale = 1 }: RowProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2 * scale,
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {row.map((val, colIndex) =>
        colIndex % 2 === 0 ? (
          <Star1
            key={`${rowIndex}_${colIndex}`}
            isFilled={val === 1}
            onClick={() => onCellClick(rowIndex, colIndex)}
            scale={scale}
          />
        ) : (
          <Hexagon
            key={`${rowIndex}_${colIndex}`}
            isFilled={val === 1}
            onClick={() => onCellClick(rowIndex, colIndex)}
            scale={scale}
          />
        )
      )}
    </div>
  );
};

const RowTwo = ({ row, rowIndex, onCellClick, scale = 1 }: RowProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 16 * scale,
        marginTop: -4 * scale,
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {row.map((val, colIndex) =>
        colIndex % 2 === 0 ? (
          <Arrow
            dir={3}
            key={`${rowIndex}_${colIndex}`}
            isFilled={val === 1}
            style={{
              marginLeft: `${12 * scale}px`,
              marginRight: `${4 * scale}px`,
            }}
            onClick={() => onCellClick(rowIndex, colIndex)}
            scale={scale}
          />
        ) : (
          <Arrow
            dir={0}
            key={`${rowIndex}_${colIndex}`}
            isFilled={val === 1}
            style={{ marginRight: `${12 * scale}px` }}
            onClick={() => onCellClick(rowIndex, colIndex)}
            scale={scale}
          />
        )
      )}
    </div>
  );
};

const RowThree = ({ row, rowIndex, onCellClick, scale = 1 }: RowProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4.5 * scale,
        marginTop: -10 * scale,
        marginBottom: -10 * scale,
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {row.map((val, colIndex) =>
        colIndex % 2 === 0 ? (
          <Hexagon
            key={`${rowIndex}_${colIndex}`}
            isFilled={val === 1}
            vertical
            style={{
              marginLeft: `${10 * scale}px`,
              marginRight: `${10 * scale}px`,
            }}
            onClick={() => onCellClick(rowIndex, colIndex)}
            scale={scale}
          />
        ) : (
          <Star2
            key={`${rowIndex}_${colIndex}`}
            isFilled={val === 1}
            onClick={() => onCellClick(rowIndex, colIndex)}
            scale={scale}
          />
        )
      )}
    </div>
  );
};

const RowFour = ({ row, rowIndex, onCellClick, scale = 1 }: RowProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 16 * scale,
        marginTop: -4 * scale,
        marginBottom: -4 * scale,
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {row.map((val, colIndex) =>
        colIndex % 2 === 0 ? (
          <Arrow
            dir={2}
            key={`${rowIndex}_${colIndex}`}
            isFilled={val === 1}
            style={{
              marginLeft: `${12 * scale}px`,
              marginRight: `${4 * scale}px`,
            }}
            onClick={() => onCellClick(rowIndex, colIndex)}
            scale={scale}
          />
        ) : (
          <Arrow
            dir={1}
            key={`${rowIndex}_${colIndex}`}
            isFilled={val === 1}
            style={{ marginRight: `${12 * scale}px` }}
            onClick={() => onCellClick(rowIndex, colIndex)}
            scale={scale}
          />
        )
      )}
    </div>
  );
};

export default GridMaker;
