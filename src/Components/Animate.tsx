import Arrow from "./Arrow";
import Star1 from "./Star1";
import Star2 from "./Star2";
import Hexagon from "./Hexagon";
import { useState } from "react";

const W = 21;

interface GridProps {
  grid: number[][];
  animateMode: number;
  scale: number;
}
const Animate = ({ grid, animateMode, scale }: GridProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const DIMS = [632, 572];
  return (
    <div
      className={isHovering ? "border borderExpand" : "border"}
      style={{
        width: DIMS[0] * scale,
        height: DIMS[1] * scale,
        // overflow: "hidden",
      }}
    >
      <div
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",

          width: DIMS[0],
          height: DIMS[1],
        }}
      >
        {grid.map((row, index) => {
          if (index % 4 === 0) {
            return RowOne(row, index, isHovering, animateMode);
          } else if (index % 4 === 1) {
            return RowTwo(row, index, isHovering, animateMode);
          } else if (index % 4 === 2) {
            return RowThree(row, index, isHovering, animateMode);
          } else if (index % 4 === 3) {
            return RowFour(row, index, isHovering, animateMode);
          }
        })}
      </div>
    </div>
  );
};

const RowOne = (
  row: number[],
  index: number,
  isHovering: boolean,
  animateMode: number
) => {
  return (
    <div
      key={index + "_"}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
      }}
    >
      {row.map((val, index2) =>
        index2 % 2 === 0 ? (
          <Star1
            className={
              isHovering && animateMode === 0
                ? "starSpin"
                : isHovering && animateMode === 2
                ? val === 1
                  ? "flipP"
                  : "flipS"
                : isHovering && animateMode === 3
                ? "grow3"
                : ""
            }
            key={`${index}_${index2}`}
            isFilled={val === 1}
            style={
              isHovering && animateMode === 1
                ? {
                    animation: `slant 2s ease-in-out ${index * 0.1}s`,
                  }
                : // : isHovering && animateMode === 2
                  // ? {
                  //     // fill: "var(--secondary)",
                  //   }
                  {}
            }
          />
        ) : (
          <Hexagon
            key={`${index}_${index2}`}
            isFilled={val === 1}
            // className={isHovering && animateMode == 0 ? "hexagon2" : ""}
            className={
              isHovering && animateMode === 0
                ? "hexagon2"
                : isHovering && animateMode === 2
                ? val === 1
                  ? "flipP"
                  : "flipS"
                : isHovering && animateMode === 3
                ? "grow3"
                : ""
            }
            style={
              isHovering && animateMode === 1
                ? {
                    animation: `slant 2s ease-in-out ${index * 0.1}s`,
                  }
                : {}
            }
          />
        )
      )}
    </div>
  );
};
const RowTwo = (
  row: number[],
  index: number,
  isHovering: boolean,
  animateMode: number
) => {
  return (
    <div
      key={index + "_"}
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
            // className={isHovering && animateMode == 0 ? "arrow1" : ""}
            className={
              isHovering && animateMode === 0
                ? "arrow1"
                : isHovering && animateMode === 2
                ? val === 1
                  ? "flipP"
                  : "flipS"
                : isHovering && animateMode === 3
                ? "grow2"
                : ""
            }
            dir={3}
            key={`${index}_${index2}`}
            isFilled={val === 1}
            style={{
              marginLeft: "12px",
              marginRight: "4px",
              animation:
                isHovering && animateMode === 1
                  ? `slant 2s ease-in-out ${index * 0.1}s`
                  : "",
            }}
          />
        ) : (
          <Arrow
            dir={0}
            // className={isHovering && animateMode == 0 ? "arrow2" : ""}
            className={
              isHovering && animateMode === 0
                ? "arrow2"
                : isHovering && animateMode === 2
                ? val === 1
                  ? "flipP"
                  : "flipS"
                : isHovering && animateMode === 3
                ? "grow2"
                : ""
            }
            key={`${index}_${index2}`}
            isFilled={val === 1}
            style={{
              marginRight: "12",
              animation:
                isHovering && animateMode === 1
                  ? `slant 2s ease-in-out ${index * 0.1}s`
                  : "",
            }}
          />
        )
      )}
    </div>
  );
};
const RowThree = (
  row: number[],
  index: number,
  isHovering: boolean,
  animateMode: number
) => {
  return (
    <div
      key={index + "_"}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4.5,
        marginTop: -10,
        marginBottom: -10,
      }}
    >
      {row.map((val, index2) =>
        index2 % 2 === 0 ? (
          <Hexagon
            // className={isHovering && animateMode === 0 ? "hexagon1" : ""}
            className={
              isHovering && animateMode === 0
                ? "hexagon1"
                : isHovering && animateMode === 2
                ? val === 1
                  ? "flipP"
                  : "flipS"
                : isHovering && animateMode === 3
                ? "grow3"
                : ""
            }
            key={`${index}_${index2}`}
            isFilled={val === 1}
            vertical
            style={{
              marginLeft: 10,
              marginRight: 10,
              animation:
                isHovering && animateMode === 1
                  ? `slant 2s ease-in-out ${index * 0.1}s`
                  : "",
            }}
          />
        ) : (
          <Star2
            // className={isHovering && animateMode === 0 ? "starSpin" : ""}
            className={
              isHovering && animateMode === 0
                ? "starSpin"
                : isHovering && animateMode === 2
                ? val === 1
                  ? "flipP"
                  : "flipS"
                : isHovering && animateMode === 3
                ? "grow1"
                : ""
            }
            key={`${index}_${index2}`}
            isFilled={val === 1}
            style={
              isHovering && animateMode === 1
                ? {
                    animation: `slant 2s ease-in-out ${index * 0.1}s`,
                  }
                : {}
            }
          />
        )
      )}
    </div>
  );
};
const RowFour = (
  row: number[],
  index: number,
  isHovering: boolean,
  animateMode: number
) => {
  return (
    <div
      key={index + "_"}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        marginLeft: 16,
        marginTop: -10 + 6,
        marginBottom: -4,
      }}
    >
      {row.map((val, index2) =>
        index2 % 2 === 0 ? (
          <Arrow
            // className={isHovering && animateMode === 0 ? "arrow3" : ""}
            className={
              isHovering && animateMode === 0
                ? "arrow3"
                : isHovering && animateMode === 2
                ? val === 1
                  ? "flipP"
                  : "flipS"
                : isHovering && animateMode === 3
                ? "grow2"
                : ""
            }
            dir={2}
            key={`${index}_${index2}`}
            isFilled={val === 1}
            style={{
              marginLeft: "12px",
              marginRight: "4px",
              animation:
                isHovering && animateMode === 1
                  ? `slant 2s ease-in-out ${index * 0.1}s`
                  : "",
            }}
          />
        ) : (
          <Arrow
            dir={1}
            // className={isHovering && animateMode === 0 ? "arrow4" : ""}
            className={
              isHovering && animateMode === 0
                ? "arrow4"
                : isHovering && animateMode === 2
                ? val === 1
                  ? "flipP"
                  : "flipS"
                : isHovering && animateMode === 3
                ? "grow2"
                : ""
            }
            key={`${index}_${index2}`}
            isFilled={val === 1}
            style={{
              marginRight: "12",
              animation:
                isHovering && animateMode === 1
                  ? `slant 2s ease-in-out ${index * 0.1}s`
                  : "",
            }}
          />
        )
      )}
    </div>
  );
};

export default Animate;
