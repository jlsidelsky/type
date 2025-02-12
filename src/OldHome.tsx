// // // // import { useState } from "react";
// // // // import "./colors.css";
// // // // import "./App.css";
// // // // import Tile from "./Components/Tile";
// // // // import Grid from "./Components/Grid";
// // // // import "./Components/Animate2.css";
// // // // import E from "./letters/E";
// // // // import H from "./letters/H";
// // // // import B from "./letters/B";
// // // // import D from "./letters/D";
// // // // import GridMaker from "./Components/GridMaker";
// // // // import F from "./letters/F";
// // // // import I from "./letters/I";
// // // // import J from "./letters/J";
// // // // import L from "./letters/L";
// // // // import T from "./letters/T";
// // // // import C from "./letters/C";
// // // // import G from "./letters/G";
// // // // import O from "./letters/O";
// // // // import Q from "./letters/Q";
// // // // import K from "./letters/K";
// // // // import X from "./letters/X";
// // // // import Y from "./letters/Y";
// // // // import Z from "./letters/Z";
// // // // import N from "./letters/N";
// // // // import M from "./letters/M";
// // // // import Animate from "./Components/Animate";
// // // // import Border from "./Components/Border";
// // // // import W from "./letters/W";
// // // // import A from "./letters/A";
// // // // import P from "./letters/P";
// // // // import R from "./letters/R";
// // // // import S from "./letters/S";
// // // // import U from "./letters/U";
// // // // import arr from "./letters/Start";
// // // // const grids = [B, C, D, E, F, G, H, I, J, K, L, N, O, Q, T, X, Y, Z];
// // // // const initialGrid = arr;
// // // // const endGrid = A;
// // // // //remaining: A, M, P, R, S, U, V, W, fix B
// // // // function Home() {
// // // //   const [grid, setGrid] = useState(initialGrid);

// // // //   const handleCopy = async () => {
// // // //     // Format the grid as JSON. You can adjust the formatting if desired.
// // // //     const gridString = JSON.stringify(grid);
// // // //     try {
// // // //       await navigator.clipboard.writeText(gridString);
// // // //       alert("Grid copied to clipboard!");
// // // //     } catch (error) {
// // // //       console.error("Failed to copy: ", error);
// // // //       alert("Unable to copy to clipboard.");
// // // //     }
// // // //   };

// // // //   const handleCellClick = (row: number, col: number) => {
// // // //     setGrid((prevGrid) => {
// // // //       const newGrid = prevGrid.map((r) => [...r]);
// // // //       newGrid[row][col] = newGrid[row][col] === 1 ? 0 : 1;
// // // //       return newGrid;
// // // //     });
// // // //   };
// // // //   const handleFlip = () => {
// // // //     setGrid((prevGrid) => {
// // // //       return prevGrid.map((row) => [...row].reverse());
// // // //     });
// // // //   };
// // // //   const handleShift = () => {
// // // //     setGrid((prevGrid) => {
// // // //       return prevGrid.map((row) => {
// // // //         const lastElement = row.pop(); // Removes 4
// // // //         if (lastElement !== undefined) row.unshift(lastElement);
// // // //         return row;
// // // //       });
// // // //     });
// // // //   };
// // // //   return (
// // // //     <>
// // // //       <div style={{ display: "flex", flexFlow: "row" }}>
// // // //         <Border grid={M} />
// // // //         {/* <Border grid={R} /> */}
// // // //         <Border grid={N} />
// // // //         {/* <Border grid={A} /> */}
// // // //         <Border grid={T} />
// // // //         <Border grid={E} />
// // // //       </div>

// // // //       <GridMaker grid={grid} onCellClick={handleCellClick}></GridMaker>
// // // //       <button onClick={handleCopy}>Copy Grid to Clipboard</button>
// // // //       <button onClick={handleFlip}>flip</button>
// // // //       <button onClick={handleShift}>shift right</button>
// // // //     </>
// // // //   );
// // // // }

// // // // export default Home;
// // // // import { useState } from "react";
// // // // import "./colors.css";
// // // // import "./App.css";
// // // // import GridMaker from "./Components/GridMaker";
// // // // import Border from "./Components/Border";
// // // // import A from "./letters/A";
// // // // import M from "./letters/M";
// // // // import N from "./letters/N";
// // // // import T from "./letters/T";
// // // // import E from "./letters/E";
// // // // import arr from "./letters/Start";

// // // // const initialGrid = arr;
// // // // const endGrid = A;

// // // // function Home() {
// // // //   const [grid, setGrid] = useState(initialGrid);
// // // //   const [isTransitioning, setIsTransitioning] = useState(false);

// // // //   // Function to get differing pixels
// // // //   const getDifferingPixels = (
// // // //     currentGrid: number[][],
// // // //     targetGrid: number[][]
// // // //   ) => {
// // // //     let differingPixels: [number, number][] = [];
// // // //     for (let i = 0; i < currentGrid.length; i++) {
// // // //       for (let j = 0; j < currentGrid[i].length; j++) {
// // // //         if (currentGrid[i][j] !== targetGrid[i][j]) {
// // // //           differingPixels.push([i, j]);
// // // //         }
// // // //       }
// // // //     }
// // // //     return differingPixels;
// // // //   };

// // // //   // Function to transition grid using requestAnimationFrame
// // // //   const startTransition = () => {
// // // //     if (isTransitioning) return; // Prevent multiple transitions at once
// // // //     setIsTransitioning(true);

// // // //     const step = () => {
// // // //       setGrid((prevGrid) => {
// // // //         let differingPixels = getDifferingPixels(prevGrid, endGrid);
// // // //         if (differingPixels.length === 0) {
// // // //           setIsTransitioning(false);
// // // //           return prevGrid; // Stop transition if complete
// // // //         }

// // // //         // Update multiple pixels per frame for speed
// // // //         const updatesPerFrame = Math.max(
// // // //           5,
// // // //           Math.floor(differingPixels.length * 0.1)
// // // //         ); // 10% of remaining pixels
// // // //         const newGrid = prevGrid.map((r) => [...r]);

// // // //         for (
// // // //           let i = 0;
// // // //           i < updatesPerFrame && differingPixels.length > 0;
// // // //           i++
// // // //         ) {
// // // //           let [row, col] = differingPixels.pop()!;
// // // //           newGrid[row][col] = endGrid[row][col];
// // // //         }

// // // //         requestAnimationFrame(step); // Continue animation
// // // //         return newGrid;
// // // //       });
// // // //     };

// // // //     requestAnimationFrame(step); // Start animation loop
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <div style={{ display: "flex", flexFlow: "row" }}>
// // // //         <Border grid={M} />
// // // //         <Border grid={N} />
// // // //         <Border grid={T} />
// // // //         <Border grid={E} />
// // // //       </div>

// // // //       <GridMaker grid={grid} />

// // // //       <button onClick={startTransition} disabled={isTransitioning}>
// // // //         {isTransitioning ? "Transitioning..." : "Start Transition"}
// // // //       </button>
// // // //     </>
// // // //   );
// // // // }

// // // // export default Home;
// // // import { useCallback, useRef, useState } from "react";
// // // import "./colors.css";
// // // import "./App.css";
// // // import Grid from "./Components/Grid";
// // // import Border from "./Components/Border";
// // // import A from "./letters/A";
// // // import M from "./letters/M";
// // // import N from "./letters/N";
// // // import T from "./letters/T";
// // // import E from "./letters/E";
// // // import arr from "./letters/Start";
// // // import H from "./letters/H";
// // // import L from "./letters/L";
// // // import O from "./letters/O";
// // // import R from "./letters/R";
// // // import I from "./letters/I";
// // // import F from "./letters/F";
// // // import S from "./letters/S";
// // // import start from "./letters/Start";
// // // import GridMaker from "./Components/GridMaker";

// // // // const combine = (arr: number[][][]) => {
// // // //   if (!arr || arr.length === 0) return [];

// // // //   const ret: number[][] = Array.from({ length: arr[0].length }, () => []); // Initialize rows

// // // //   arr.forEach((letter) => {
// // // //     for (let row = 0; row < letter.length; row++) {
// // // //       ret[row] = [...ret[row], ...letter[row], 0]; // Add a small space (0) between letters
// // // //     }
// // // //   });

// // // //   return ret;
// // // // };
// // // // const combine = (arr: number[][][]) => {
// // // //   if (!arr || arr.length === 0) return [];

// // // //   // Create an array with the correct number of rows, initialized with empty arrays
// // // //   const ret: number[][] = Array.from({ length: arr[0].length }, () => []);

// // // //   arr.forEach((letter, index) => {
// // // //     for (let row = 0; row < letter.length; row++) {
// // // //       if (!ret[row]) ret[row] = []; // Ensure the row exists before pushing

// // // //       ret[row].push(...letter[row]); // Add a space (0) between letters
// // // //       if (index === arr.length - 1) continue;
// // // //       if (row % 4 === 1 || row % 4 === 3) {
// // // //         ret[row].push(0, 0);
// // // //       } else {
// // // //         ret[row].push(0);
// // // //       }
// // // //     }
// // // //   });

// // // //   return ret;
// // // // };

// // // // /**
// // // //  * Creates an initial randomized grid with a placeholder pattern.
// // // //  */
// // // // const makeStart = (arr: number[][][]) => {
// // // //   const rows = 37;
// // // //   const cols = arr.length * 22; // Estimate combined width
// // // //   const ret: number[][] = [];

// // // //   for (let i = 0; i < rows; i++) {
// // // //     const row: number[] = [];
// // // //     for (let j = 0; j < cols; j++) {
// // // //       row.push((i + j) % 2); // Simple alternating pattern
// // // //     }
// // // //     ret.push(row);
// // // //   }
// // // //   return ret;
// // // // };
// // // // const combine = (arr: number[][][]) => {
// // // //   const ret: number[][] = [];
// // // //   for (let i = 0; i < arr.length; i++) {
// // // //     const letter = letters[i];
// // // //     for (let row = 0; row < letter.length; row++) {
// // // //       ret[row].push(...letter[row]);
// // // //     }
// // // //     return ret;
// // // //   }
// // // // };
// // // // const makeStart = (arr: number[][][]) => {
// // // //   const ret: number[][] = [];
// // // //   for (let i = 0; i < 37; i++) {
// // // //     const num =
// // // //       i % 2 === 0
// // // //         ? 20 * arr.length + arr.length * 2 - 1
// // // //         : 21 * arr.length + arr.length - 2;
// // // //     const row = [];
// // // //     for (let j = 0; j < num; j++) {
// // // //       if (i % 4 === 0) {
// // // //         row.push(1);
// // // //       } else if (i % 4 === 1) {
// // // //         row.push(0);
// // // //       } else if (i % 4 === 2) {
// // // //         row.push(1);
// // // //       } else if (i % 4 === 3) {
// // // //         row.push(0);
// // // //       }
// // // //     }
// // // //     ret.push(row);
// // // //   }
// // // //   return ret;
// // // // };

// // // const make = (arr: number[][]) => {
// // //   const ret = [];
// // //   const rows = arr.length;
// // //   for (let i = 0; i < rows; i++) {
// // //     const num = arr[i].length;
// // //     const row = [];
// // //     for (let j = 0; j < num; j++) {
// // //       if (i % 4 === 0) {
// // //         row.push(1);
// // //       } else if (i % 4 === 1) {
// // //         row.push(0);
// // //       } else if (i % 4 === 2) {
// // //         row.push(1);
// // //       } else if (i % 4 === 3) {
// // //         row.push(0);
// // //       }
// // //     }
// // //     ret.push(row);
// // //   }
// // //   return ret;
// // // };
// // // const letters = [O, R, N, A, T, E];
// // // const letters2 = [S, E, R, I, F];

// // // const initialGrid = make(start);
// // // const endGrid = start;
// // // // const initialGrid2 = makeStart(letters2);
// // // // const endGrid2 = combine(letters2) ?? initialGrid;

// // // // function Home() {
// // // //   const [grid, setGrid] = useState(initialGrid);
// // // //   // const [grid2, setGrid2] = useState(initialGrid2);
// // // //   const [isTransitioning, setIsTransitioning] = useState(false);

// // // //   // Sort pixels by their column index (left to right transition)
// // // //   const getSortedPixelsByColumn = (grid: number[][]) => {
// // // //     let pixels: { row: number; col: number }[] = [];
// // // //     const rows = grid.length;
// // // //     const cols = grid[0].length;

// // // //     for (let i = 0; i < rows; i++) {
// // // //       for (let j = 0; j < cols; j++) {
// // // //         pixels.push({ row: i, col: j });
// // // //       }
// // // //     }

// // // //     // Sort pixels **left to right** based on column index
// // // //     return pixels.sort((a, b) => a.col - b.col);
// // // //   };
// // // //   const startTransition = () => {
// // // //     if (isTransitioning) return;
// // // //     setIsTransitioning(true);

// // // //     // Get a list of all pixels (sorted left-to-right) that need updating.
// // // //     let differingPixels = getSortedPixelsByColumn(grid).filter(
// // // //       ({ row, col }) => grid[row][col] !== endGrid[row][col]
// // // //     );

// // // //     // Use requestAnimationFrame for smooth, batched updates.
// // // //     const step = () => {
// // // //       setGrid((prevGrid) => {
// // // //         // Make a shallow copy of the grid (each row is copied).
// // // //         const newGrid = prevGrid.map((row) => row.slice());

// // // //         // Determine how many pixels to update this frame.
// // // //         // Here we update 20% of the remaining pixels, with a minimum batch size.
// // // //         const batchSize = Math.max(
// // // //           10,
// // // //           Math.floor(differingPixels.length * 0.2)
// // // //         );

// // // //         // Update a batch of pixels.
// // // //         for (let i = 0; i < batchSize && differingPixels.length > 0; i++) {
// // // //           const { row, col } = differingPixels.shift()!;
// // // //           newGrid[row][col] = endGrid[row][col];
// // // //         }

// // // //         return newGrid;
// // // //       });

// // // //       // If there are still pixels to update, request the next frame.
// // // //       if (differingPixels.length > 0) {
// // // //         requestAnimationFrame(step);
// // // //       } else {
// // // //         // Transition complete.
// // // //         setIsTransitioning(false);
// // // //       }
// // // //     };

// // // //     // Start the animation.
// // // //     requestAnimationFrame(step);
// // // //   };

// // // //   // const startTransition = () => {
// // // //   //   if (isTransitioning) return;
// // // //   //   setIsTransitioning(true);

// // // //   //   let differingPixels = getSortedPixelsByColumn(grid).filter(
// // // //   //     ({ row, col }) => grid[row][col] !== endGrid[row][col]
// // // //   //   );

// // // //   //   let updatesPerFrame = Math.max(
// // // //   //     10,
// // // //   //     Math.floor(differingPixels.length * 0.05)
// // // //   //   ); // Update 5% of remaining pixels per frame
// // // //   //   let delay = 0;

// // // //   //   differingPixels.forEach(({ row, col }, index) => {
// // // //   //     setTimeout(() => {
// // // //   //       setGrid((prevGrid) => {
// // // //   //         const newGrid = prevGrid.map((r) => [...r]);
// // // //   //         newGrid[row][col] = endGrid[row][col]; // Instantly update pixel
// // // //   //         return newGrid;
// // // //   //       });

// // // //   //       if (index === differingPixels.length - 1) {
// // // //   //         setTimeout(() => setIsTransitioning(false), 50);
// // // //   //       }
// // // //   //     }, delay);

// // // //   //     if (index % updatesPerFrame === 0) {
// // // //   //       delay += 2; // Faster transition by reducing delay between updates
// // // //   //     }
// // // //   //   });
// // // //   // };

// // // //   // const startTransition = () => {
// // // //   //   if (isTransitioning) return;
// // // //   //   setIsTransitioning(true);

// // // //   //   let differingPixels = getSortedPixelsByColumn(grid).filter(
// // // //   //     ({ row, col }) => grid[row][col] !== endGrid[row][col]
// // // //   //   );

// // // //   //   let updatesPerFrame = Math.max(
// // // //   //     20,
// // // //   //     Math.floor(differingPixels.length * 0.2)
// // // //   //   ); // Update 20% of remaining pixels per frame

// // // //   //   const step = () => {
// // // //   //     setGrid((prevGrid) => {
// // // //   //       const newGrid = prevGrid.map((r) => [...r]);

// // // //   //       for (
// // // //   //         let i = 0;
// // // //   //         i < updatesPerFrame && differingPixels.length > 0;
// // // //   //         i++
// // // //   //       ) {
// // // //   //         let { row, col } = differingPixels.shift()!;
// // // //   //         newGrid[row][col] = endGrid[row][col];
// // // //   //       }

// // // //   //       if (differingPixels.length === 0) {
// // // //   //         setTimeout(() => setIsTransitioning(false), 10);
// // // //   //         return newGrid;
// // // //   //       }

// // // //   //       requestAnimationFrame(step); // Run the next update as fast as possible
// // // //   //       return newGrid;
// // // //   //     });
// // // //   //   };

// // // //   //   requestAnimationFrame(step); // Start ultra-fast transition loop
// // // //   // };
// // // //   // const startTransition = () => {
// // // //   //   if (isTransitioning) return;
// // // //   //   setIsTransitioning(true);

// // // //   //   // Make a local copy of the grid that will accumulate changes.
// // // //   //   let currentGrid = grid.map((row) => [...row]);

// // // //   //   // Get all pixels that need updating (using the currentGrid copy).
// // // //   //   let differingPixels = getSortedPixelsByColumn(currentGrid).filter(
// // // //   //     ({ row, col }) => currentGrid[row][col] !== endGrid[row][col]
// // // //   //   );

// // // //   //   // Group pixels by column.
// // // //   //   const columns = new Map<number, { row: number; col: number }[]>();
// // // //   //   differingPixels.forEach(({ row, col }) => {
// // // //   //     if (!columns.has(col)) {
// // // //   //       columns.set(col, []);
// // // //   //     }
// // // //   //     columns.get(col)!.push({ row, col });
// // // //   //   });

// // // //   //   // Get the list of column indexes in left-to-right order.
// // // //   //   const columnIndexes = [...columns.keys()].sort((a, b) => a - b);

// // // //   //   let index = 0;
// // // //   //   const columnsPerFrame = 2; // Update 2 columns per frame

// // // //   //   const step = () => {
// // // //   //     if (index >= columnIndexes.length) {
// // // //   //       // Final update and exit the loop.
// // // //   //       setGrid(currentGrid);
// // // //   //       setIsTransitioning(false);
// // // //   //       return;
// // // //   //     }

// // // //   //     // Update the next 2 columns.
// // // //   //     for (
// // // //   //       let i = 0;
// // // //   //       i < columnsPerFrame && index < columnIndexes.length;
// // // //   //       i++, index++
// // // //   //     ) {
// // // //   //       const col = columnIndexes[index];
// // // //   //       columns.get(col)!.forEach(({ row }) => {
// // // //   //         currentGrid[row][col] = endGrid[row][col];
// // // //   //       });
// // // //   //     }

// // // //   //     // Set the updated grid.
// // // //   //     setGrid(currentGrid);
// // // //   //     requestAnimationFrame(step);
// // // //   //   };

// // // //   //   requestAnimationFrame(step);
// // // //   // };

// // // //   const handleCellClick = (row: number, col: number) => {
// // // //     setGrid((prevGrid) => {
// // // //       const newGrid = prevGrid.map((r) => [...r]);
// // // //       newGrid[row][col] = newGrid[row][col] === 1 ? 0 : 1;
// // // //       return newGrid;
// // // //     });
// // // //   };
// // // //   const handleFlip = () => {
// // // //     setGrid((prevGrid) => {
// // // //       return prevGrid.map((row) => [...row].reverse());
// // // //     });
// // // //   };
// // // //   const handleShift = () => {
// // // //     setGrid((prevGrid) => {
// // // //       return prevGrid.map((row) => {
// // // //         const lastElement = row.pop(); // Removes 4
// // // //         if (lastElement !== undefined) row.unshift(lastElement);
// // // //         return row;
// // // //       });
// // // //     });
// // // //   };
// // // //   const handleCopy = async () => {
// // // //     // Format the grid as JSON. You can adjust the formatting if desired.
// // // //     const gridString = JSON.stringify(grid);
// // // //     try {
// // // //       await navigator.clipboard.writeText(gridString);
// // // //       alert("Grid copied to clipboard!");
// // // //     } catch (error) {
// // // //       console.error("Failed to copy: ", error);
// // // //       alert("Unable to copy to clipboard.");
// // // //     }
// // // //   };
// // // //   return (
// // // //     <>
// // // //       {/* <div style={{ display: "flex", flexFlow: "row" }}>
// // // //         <Border grid={M} />
// // // //         <Border grid={N} />
// // // //         <Border grid={T} />
// // // //         <Border grid={E} />
// // // //         <Border grid={E} />
// // // //         <Border grid={E} />
// // // //         <Border grid={E} />
// // // //       </div> */}
// // // //       <div style={{ width: 7000 }}>
// // // //         <Grid grid={grid} />
// // // //       </div>
// // // //       {/* <div style={{ width: 6000 }}>
// // // //         <Grid grid={grid2} />
// // // //       </div> */}
// // // //       <div style={{ width: 8000 }}>
// // // //         {/* <GridMaker grid={grid} onCellClick={handleCellClick}></GridMaker> */}
// // // //       </div>
// // // //       <button onClick={startTransition} disabled={isTransitioning}>
// // // //         {isTransitioning ? "Transitioning..." : "Start Transition"}
// // // //       </button>
// // // //       <button onClick={handleCopy}>Copy Grid to Clipboard</button>
// // // //       // <button onClick={handleFlip}>flip</button>
// // // //       // <button onClick={handleShift}>shift right</button>
// // // //     </>
// // // //   );
// // // // }

// // // // export default Home;

// // // // Example definitions for initialGrid and endGrid.
// // // // (Replace these with your actual grid-generating functions.)

// // // // Duration of the transition in milliseconds
// // // const TRANSITION_DURATION = 1000;

// // // function Home() {
// // //   // The grid state that will be updated over time.
// // //   const [grid, setGrid] = useState(initialGrid);
// // //   const [isTransitioning, setIsTransitioning] = useState(false);

// // //   // A ref to keep track of the animation’s start time.
// // //   const startTimeRef = useRef(null);

// // //   // This function will be called on each animation frame.
// // //   const animate = useCallback(
// // //     (timestamp: number) => {
// // //       // Initialize the start time on the first frame.
// // //       if (!startTimeRef.current) {
// // //         startTimeRef.current = timestamp;
// // //       }
// // //       const elapsed = timestamp - startTimeRef.current;
// // //       // Clamp progress between 0 and 1.
// // //       const progress = Math.min(elapsed / TRANSITION_DURATION, 1);

// // //       // Compute the intermediate grid.
// // //       // We assume that each cell is a number. If your cells are colors or more complex objects,
// // //       // replace this with an appropriate interpolation function.
// // //       const intermediateGrid = grid.map((row, i) =>
// // //         row.map((cell, j) => {
// // //           const startVal = initialGrid[i][j];
// // //           const endVal = endGrid[i][j];
// // //           // Linear interpolation between start and end values.
// // //           return startVal + (endVal - startVal) * progress;
// // //         })
// // //       );

// // //       setGrid(intermediateGrid);

// // //       if (progress < 1) {
// // //         // Continue animating.
// // //         requestAnimationFrame(animate);
// // //       } else {
// // //         // Animation is complete.
// // //         setIsTransitioning(false);
// // //         startTimeRef.current = null; // Reset for potential future transitions.
// // //       }
// // //     },
// // //     [grid]
// // //   );

// // //   // Function to start the transition.
// // //   const startTransition = () => {
// // //     if (isTransitioning) return; // Prevent starting another transition while one is in progress.
// // //     setIsTransitioning(true);
// // //     // Optionally, if you need to “reset” the grid to the initial state, you can do so here:
// // //     // setGrid(initialGrid);
// // //     requestAnimationFrame(animate);
// // //   };

// // //   return (
// // //     <div>
// // //       <button onClick={startTransition} disabled={isTransitioning}>
// // //         Start Transition
// // //       </button>
// // //       <div style={{ width: 7000 }}>
// // //         <Grid grid={grid} />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Home;

// // import { useCallback, useRef, useState } from "react";
// // import "./colors.css";
// // import "./App.css";
// // import Grid from "./Components/Grid";
// // import Border from "./Components/Border";
// // import A from "./letters/A";
// // import M from "./letters/M";
// // import N from "./letters/N";
// // import T from "./letters/T";
// // import E from "./letters/E";
// // import arr from "./letters/Start";
// // import H from "./letters/H";
// // import L from "./letters/L";
// // import O from "./letters/O";
// // import R from "./letters/R";
// // import I from "./letters/I";
// // import F from "./letters/F";
// // import S from "./letters/S";
// // import start from "./letters/Start";
// // import GridMaker from "./Components/GridMaker";

// // // --- Helper function (now typed) ---
// // const make = (arr: number[][]): number[][] => {
// //   const ret: number[][] = [];
// //   const rows = arr.length;
// //   for (let i = 0; i < rows; i++) {
// //     const num = arr[i].length;
// //     const row: number[] = [];
// //     for (let j = 0; j < num; j++) {
// //       if (i % 4 === 0) {
// //         row.push(1);
// //       } else if (i % 4 === 1) {
// //         row.push(0);
// //       } else if (i % 4 === 2) {
// //         row.push(1);
// //       } else if (i % 4 === 3) {
// //         row.push(0);
// //       }
// //     }
// //     ret.push(row);
// //   }
// //   return ret;
// // };

// // const letters = [O, R, N, A, T, E];
// // const letters2 = [S, E, R, I, F];

// // const initialGrid: number[][] = make(start);
// // const endGrid: number[][] = start; // Assuming 'start' is a number[][]

// // const TRANSITION_DURATION = 1000;

// // function Home() {
// //   const [grid, setGrid] = useState<number[][]>(initialGrid);
// //   const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

// //   // Ref to track the start time of the animation
// //   const startTimeRef = useRef<number | null>(null);

// //   // Animation callback using requestAnimationFrame
// //   const animate = useCallback((timestamp: number) => {
// //     if (startTimeRef.current === null) {
// //       startTimeRef.current = timestamp;
// //     }
// //     const elapsed = timestamp - (startTimeRef.current as number);
// //     const progress = Math.min(elapsed / TRANSITION_DURATION, 1);

// //     // Interpolate from initialGrid to endGrid
// //     const intermediateGrid = initialGrid.map((row, i) =>
// //       row.map((cell, j) => {
// //         const startVal = initialGrid[i][j];
// //         const endVal = endGrid[i][j];
// //         return startVal + (endVal - startVal) * progress;
// //       })
// //     );

// //     setGrid(intermediateGrid);

// //     if (progress < 1) {
// //       requestAnimationFrame(animate);
// //     } else {
// //       setIsTransitioning(false);
// //       startTimeRef.current = null;
// //     }
// //   }, []); // Empty dependency array for a stable callback

// //   const startTransition = () => {
// //     if (isTransitioning) return;
// //     setIsTransitioning(true);
// //     requestAnimationFrame(animate);
// //   };

// //   return (
// //     <div>
// //       <button onClick={startTransition} disabled={isTransitioning}>
// //         Start Transition
// //       </button>
// //       <div style={{ width: 7000 }}>
// //         <Grid grid={grid} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;
// // Home.tsx
// import { useCallback, useRef, useState } from "react";
// import "./colors.css";
// import "./App.css";
// import Grid from "./Components/Grid"; // Your component that renders a number[][] grid
// import Border from "./Components/Border";
// import A from "./letters/A";
// import M from "./letters/M";
// import N from "./letters/N";
// import T from "./letters/T";
// import E from "./letters/E";
// import start from "./letters/Start"; // Assume this is a number[][]

// // ─── Helper: Create an initial grid from an array ──────────────────────────
// // In your code you use `make()` to generate a grid based on the provided `start`.
// // Here we ensure it’s typed as a number[][].
// const make = (arr: number[][]): number[][] => {
//   const ret: number[][] = [];
//   const rows = arr.length;
//   for (let i = 0; i < rows; i++) {
//     const num = arr[i].length;
//     const row: number[] = [];
//     for (let j = 0; j < num; j++) {
//       // For this example, we “decorate” the initial grid in a fixed pattern.
//       // You can change this logic as needed.
//       if (i % 4 === 0) {
//         row.push(1);
//       } else if (i % 4 === 1) {
//         row.push(0);
//       } else if (i % 4 === 2) {
//         row.push(1);
//       } else if (i % 4 === 3) {
//         row.push(0);
//       }
//     }
//     ret.push(row);
//   }
//   return ret;
// };

// // Our initial grid comes from calling make() on the "start" data.
// const initialGrid: number[][] = make(start);
// // In this example, we use the same grid as our target; in your case,
// // endGrid could be a different pattern (for example, the letter A).
// const endGrid: number[][] = start;

// // ─── Animation Duration ─────────────────────────────────────────────────────
// const TRANSITION_DURATION = 1000; // in milliseconds

// // ─── Delay Function ───────────────────────────────────────────────────────────
// // This function returns a delay (in ms) for a pixel at (row, col) so that pixels
// // flip in a diagonal wave. Adjust this function to change the staggering pattern.
// const getDelayForPixel = (
//   row: number,
//   col: number,
//   totalRows: number,
//   totalCols: number
// ): number => {
//   // For a diagonal wave, the delay is proportional to (row + col).
//   return ((row + col) / (totalRows + totalCols - 2)) * TRANSITION_DURATION;
// };

// function Home() {
//   // Grid state holds the current values for each pixel.
//   const [grid, setGrid] = useState<number[][]>(initialGrid);
//   const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

//   // A ref to track the start time of the animation.
//   const startTimeRef = useRef<number | null>(null);

//   // ─── The Animation Callback ─────────────────────────────────────────────
//   // On each frame we update the grid based on the elapsed time.
//   const animate = useCallback((timestamp: number) => {
//     // Set the start time on the first frame.
//     if (startTimeRef.current === null) {
//       startTimeRef.current = timestamp;
//     }
//     const elapsed = timestamp - (startTimeRef.current as number);
//     const totalRows = initialGrid.length;
//     const totalCols = initialGrid[0].length;

//     // For each pixel, if its assigned delay has passed, flip it to the target value.
//     const newGrid: number[][] = initialGrid.map((row, i) =>
//       row.map((cell, j) => {
//         const pixelDelay = getDelayForPixel(i, j, totalRows, totalCols);
//         return elapsed >= pixelDelay ? endGrid[i][j] : initialGrid[i][j];
//       })
//     );

//     setGrid(newGrid);

//     // Continue the animation until the overall transition duration has elapsed.
//     if (elapsed < TRANSITION_DURATION) {
//       requestAnimationFrame(animate);
//     } else {
//       // Ensure the final grid is fully updated and clean up.
//       setGrid(endGrid);
//       setIsTransitioning(false);
//       startTimeRef.current = null;
//     }
//   }, []);

//   // ─── Start Transition ─────────────────────────────────────────────────────
//   const startTransition = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     // Reset the timer.
//     startTimeRef.current = null;
//     requestAnimationFrame(animate);
//   };

//   return (
//     <div>
//       <button onClick={startTransition} disabled={isTransitioning}>
//         {isTransitioning ? "Transitioning..." : "Start Transition"}
//       </button>
//       <div style={{ width: "7000px" }}>
//         <Grid grid={grid} />
//       </div>
//     </div>
//   );
// }

// export default Home;
// Home.tsx
// import { useCallback, useRef, useState } from "react";
// import "./colors.css";
// import "./App.css";
// import Grid from "./Components/Grid"; // Your component that renders a number[][] grid
// import Border from "./Components/Border";
// import A from "./letters/A";
// import M from "./letters/M";
// import N from "./letters/N";
// import T from "./letters/T";
// import E from "./letters/E";
// import start from "./letters/Start"; // Assume this is a number[][]
// import Nav from "./Components/Nav";
// import { Link } from "react-router-dom";
// import Animate from "./Components/Animate";
// import "./Components/Animate2.css";

// // ─── Helper: Create an initial grid from an array ──────────────────────────
// const make = (arr: number[][]): number[][] => {
//   const ret: number[][] = [];
//   const rows = arr.length;
//   for (let i = 0; i < rows; i++) {
//     const num = arr[i].length;
//     const row: number[] = [];
//     for (let j = 0; j < num; j++) {
//       // For this example, we “decorate” the initial grid in a fixed pattern.
//       // You can change this logic as needed.
//       if (i % 4 === 0) {
//         row.push(1);
//       } else if (i % 4 === 1) {
//         row.push(0);
//       } else if (i % 4 === 2) {
//         row.push(1);
//       } else if (i % 4 === 3) {
//         row.push(0);
//       }
//     }
//     ret.push(row);
//   }
//   return ret;
// };

// // const initialGrid: number[][] = make(start);
// // In this example, we use the same grid as our target; you can change it to any other pattern.
// const endGrid: number[][] = start;

// // ─── Animation Duration ─────────────────────────────────────────────────────
// const TRANSITION_DURATION = 1000; // in milliseconds

// // ─── Updated Delay Function for Smaller Batches ─────────────────────────────
// // This function groups pixels into smaller batches by using a group size.
// // Pixels with a similar (row + col) value (within the same group) will flip together.
// const getDelayForPixel = (
//   row: number,
//   col: number,
//   totalRows: number,
//   totalCols: number
// ): number => {
//   const groupSize = 3; // Adjust this value for smaller (lower value) or larger (higher value) batches
//   const groupIndex = Math.floor((row + col) / groupSize);
//   const maxIndex = Math.floor((totalRows + totalCols - 2) / groupSize);
//   return (groupIndex / maxIndex) * TRANSITION_DURATION;
// };

// function Home() {
//   // Grid state holds the current values for each pixel.
//   const [grid, setGrid] = useState<number[][]>(endGrid);
//   const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

//   // A ref to track the start time of the animation.
//   // const startTimeRef = useRef<number | null>(null);

//   // // ─── The Animation Callback ─────────────────────────────────────────────
//   // // On each frame we update the grid based on the elapsed time.
//   // const animate = useCallback((timestamp: number) => {
//   //   if (startTimeRef.current === null) {
//   //     startTimeRef.current = timestamp;
//   //   }
//   //   const elapsed = timestamp - (startTimeRef.current as number);
//   //   const totalRows = initialGrid.length;
//   //   const totalCols = initialGrid[0].length;

//   //   // For each pixel, check if its assigned delay has passed and flip it to the target value.
//   //   const newGrid: number[][] = initialGrid.map((row, i) =>
//   //     row.map((cell, j) => {
//   //       const pixelDelay = getDelayForPixel(i, j, totalRows, totalCols);
//   //       return elapsed >= pixelDelay ? endGrid[i][j] : initialGrid[i][j];
//   //     })
//   //   );

//   //   setGrid(newGrid);

//   //   if (elapsed < TRANSITION_DURATION) {
//   //     requestAnimationFrame(animate);
//   //   } else {
//   //     setGrid(endGrid);
//   //     setIsTransitioning(false);
//   //     startTimeRef.current = null;
//   //   }
//   // }, []);

//   // // ─── Start Transition ─────────────────────────────────────────────────────
//   // const startTransition = () => {
//   //   if (isTransitioning) return;
//   //   setIsTransitioning(true);
//   //   startTimeRef.current = null;
//   //   requestAnimationFrame(animate);
//   // };

//   return (
//     <div style={{ display: "flex", flexFlow: "column" }}>
//       <div style={{ display: "flex", flexFlow: "row" }}>
//         {/* <button onClick={startTransition} disabled={isTransitioning}>
//           {isTransitioning ? "Transitioning..." : "Start Transition"}
//         </button> */}
//         <button>
//           <Link to="/specimen">Specimen</Link>
//         </button>
//       </div>

//       <div style={{ width: "4000px", margin: "0 auto" }}>
//         <Animate grid={grid} />
//       </div>
//     </div>
//   );
// }

// export default Home;

// ─── Helper: Create an initial grid from an array ──────────────────────────
// const make = (arr: number[][]): number[][] => {
//   const ret: number[][] = [];
//   const rows = arr.length;
//   for (let i = 0; i < rows; i++) {
//     const num = arr[i].length;
//     const row: number[] = [];
//     for (let j = 0; j < num; j++) {
//       // For this example, we “decorate” the initial grid in a fixed pattern.
//       // You can change this logic as needed.
//       if (i % 4 === 0) {
//         row.push(1);
//       } else if (i % 4 === 1) {
//         row.push(0);
//       } else if (i % 4 === 2) {
//         row.push(1);
//       } else if (i % 4 === 3) {
//         row.push(0);
//       }
//     }
//     ret.push(row);
//   }
//   return ret;
// };

// // const initialGrid: number[][] = make(start);
// // In this example, we use the same grid as our target; you can change it to any other pattern.
// const endGrid: number[][] = start;

// // ─── Animation Duration ─────────────────────────────────────────────────────
// const TRANSITION_DURATION = 1000; // in milliseconds

// // ─── Updated Delay Function for Smaller Batches ─────────────────────────────
// // This function groups pixels into smaller batches by using a group size.
// // Pixels with a similar (row + col) value (within the same group) will flip together.
// const getDelayForPixel = (
//   row: number,
//   col: number,
//   totalRows: number,
//   totalCols: number
// ): number => {
//   const groupSize = 3; // Adjust this value for smaller (lower value) or larger (higher value) batches
//   const groupIndex = Math.floor((row + col) / groupSize);
//   const maxIndex = Math.floor((totalRows + totalCols - 2) / groupSize);
//   return (groupIndex / maxIndex) * TRANSITION_DURATION;
// };

// Grid state holds the current values for each pixel.
// const [grid, setGrid] = useState<number[][]>(endGrid);
// const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

// A ref to track the start time of the animation.
// const startTimeRef = useRef<number | null>(null);

// // ─── The Animation Callback ─────────────────────────────────────────────
// // On each frame we update the grid based on the elapsed time.
// const animate = useCallback((timestamp: number) => {
//   if (startTimeRef.current === null) {
//     startTimeRef.current = timestamp;
//   }
//   const elapsed = timestamp - (startTimeRef.current as number);
//   const totalRows = initialGrid.length;
//   const totalCols = initialGrid[0].length;

//   // For each pixel, check if its assigned delay has passed and flip it to the target value.
//   const newGrid: number[][] = initialGrid.map((row, i) =>
//     row.map((cell, j) => {
//       const pixelDelay = getDelayForPixel(i, j, totalRows, totalCols);
//       return elapsed >= pixelDelay ? endGrid[i][j] : initialGrid[i][j];
//     })
//   );

//   setGrid(newGrid);

//   if (elapsed < TRANSITION_DURATION) {
//     requestAnimationFrame(animate);
//   } else {
//     setGrid(endGrid);
//     setIsTransitioning(false);
//     startTimeRef.current = null;
//   }
// }, []);

// // ─── Start Transition ─────────────────────────────────────────────────────
// const startTransition = () => {
//   if (isTransitioning) return;
//   setIsTransitioning(true);
//   startTimeRef.current = null;
//   requestAnimationFrame(animate);
// };
