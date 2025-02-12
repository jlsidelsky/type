import { useState } from "react";
import "./colors.css";
import "./App.css";

import A from "./letters/A";
import N from "./letters/N";
import T from "./letters/T";
import E from "./letters/E";

import Nav, { Segment } from "./Components/Nav";

import Animate from "./Components/Animate";
import "./Components/Animate2.css";
import O from "./letters/O";
import R from "./letters/R";
import B from "./letters/B";
import C from "./letters/C";
import D from "./letters/D";
import F from "./letters/F";
import G from "./letters/G";
import H from "./letters/H";
import I from "./letters/I";
import J from "./letters/J";
import K from "./letters/K";
import L from "./letters/L";
import M from "./letters/M";
import P from "./letters/P";
import Q from "./letters/Q";
import S from "./letters/S";
import U from "./letters/U";
import W from "./letters/W";
import X from "./letters/X";
import Y from "./letters/Y";
import Z from "./letters/Z";
import Modes from "./Components/Modes";

import V from "./letters/V";

const word = [O, R, N, A, M, E, N, T];

function Home() {
  const segments: Segment[] = [
    { label: "Typeface", value: "type" },
    { label: "Specimen", value: "spec" },
  ];
  const [selected, setSelected] = useState<string>("type");
  const [animateMode, setAnimateMode] = useState<number>(0);
  const a = (num: number) => setAnimateMode(num);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      {/* Left Sidebar: Sticky Modes Menu */}
      <div
        style={{
          position: "sticky",
          top: 124,
          width: "200px", // fixed width for sidebar (adjust as needed)
          padding: "24px 16px",
          alignSelf: "flex-start",
        }}
      >
        <Modes animateMode={animateMode} setAnimatedMode={a} />
      </div>

      {/* Main Content: Nav and Grid */}
      <div
        style={{
          flex: 1,
          padding: "24px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ height: "124px" }}>
          <Nav
            segments={segments}
            defaultValue={selected}
            onChange={(value: string) => {
              console.log("Selected:", value);
              setSelected(value);
            }}
          />
        </div>

        <div style={{ width: "100%", maxWidth: "1280px", textAlign: "center" }}>
          {selected === "type" ? Typeface(animateMode) : Specimen(animateMode)}
        </div>
      </div>
    </div>
  );
}

const Typeface = (animateMode: number) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "14px",
      justifyItems: "center",
    }}
  >
    {word.map((letter, index) => (
      <Animate
        grid={letter}
        key={index}
        animateMode={animateMode}
        scale={0.5}
      />
    ))}
  </div>
);

const list = [
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
];

const Specimen = (animateMode: number) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "9.33px", // approximately 28/3
      justifyItems: "center",
    }}
  >
    {list.map((letter, index) => (
      <Animate
        grid={letter}
        key={index}
        animateMode={animateMode}
        scale={1 / 3}
      />
    ))}
  </div>
);

export default Home;
