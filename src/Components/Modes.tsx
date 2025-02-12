// const modes =
import "./Modes.css";
interface ModesFace {
  animateMode: number;
  setAnimatedMode: (num: number) => void;
}
const Modes = ({ animateMode, setAnimatedMode }: ModesFace) => {
  return (
    <div
      style={{ display: "flex", flexFlow: "column", gap: 12 }}
      className="modes"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        onClick={() => setAnimatedMode(0)}
        className={"hover-target"}
      >
        <path
          fill="none"
          stroke={animateMode === 0 ? "var(--secondary)" : "var(--primary)"}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth="4px"
          d="M42.9924,24.9332c.6442,6.1465-1.8784,12.4637-7.1955,16.4167-8.0162,5.9598-19.3486,4.2892-25.3116-3.7313-5.963-8.0205-4.2985-19.3538,3.7177-25.3136,8.0162-5.9598,19.3486-4.2892,25.3116,3.7313"
        />
        <path
          fill="none"
          stroke={animateMode === 0 ? "var(--secondary)" : "var(--primary)"}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth="4px"
          d="M31.7931,16.2304h7.9058c.052,0,.0942-.0422.0942-.0942v-7.9058"
        />
      </svg>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 38.1823 41.7546"
        height={48}
        onClick={() => setAnimatedMode(0)}
      >
        <defs></defs>
        <path
          stroke={animateMode === 0 ? "var(--secondary)" : "var(--primary)"}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth="2px"
          fill="none"
          d="M36.2803,17.0153c2.3675,7.1972.0192,15.4012-6.3922,20.1678-8.0162,5.9598-19.3486,4.2892-25.3116-3.7313C-1.3865,25.4313.278,14.098,8.2942,8.1382c7.4278-5.5223,17.7028-4.4933,23.9151,2.0683"
        />
        <path
          fill={animateMode === 0 ? "var(--secondary)" : "var(--primary)"}
          d="M21.5754,11.1198h0c-.0119-.553.427-1.0107.98-1.0221l8.8575-.1813-.828-8.8221c-.0517-.5506.3531-1.0388.9038-1.0899h.0001c.55-.0511,1.0374.3531,1.0889.9031l.9344,9.9772c.0499.5327-.3631.9957-.8981,1.0068l-10.0175.2072c-.5522.0114-1.0093-.4267-1.0212-.979Z"
        />
      </svg> */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        height={48}
        onClick={() => setAnimatedMode(1)}
        className={"hover-target"}
      >
        <path
          fill="none"
          stroke={animateMode === 1 ? "var(--secondary)" : "var(--primary)"}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth="2.5px"
          d="M27,1.5c0,3.9018-4,3.9018-4,7.8036s4,3.9028,4,7.8056-4,3.9041-4,7.8083,4,3.9029,4,7.8058c0,3.9056-4,3.9056-4,7.8112s4,3.9056,4,7.8112"
        />
        <path
          fill="none"
          stroke={animateMode === 1 ? "var(--secondary)" : "var(--primary)"}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth="2.5px"
          d="M34.8487,1.5c0,3.9018-4,3.9018-4,7.8036s4,3.9028,4,7.8056-4,3.9041-4,7.8083,4,3.9029,4,7.8058c0,3.9056-4,3.9056-4,7.8112s4,3.9056,4,7.8112"
        />
        <path
          fill="none"
          stroke={animateMode === 1 ? "var(--secondary)" : "var(--primary)"}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth="2.5px"
          d="M19.1513,1.5c0,3.9018-4,3.9018-4,7.8036s4,3.9028,4,7.8056-4,3.9041-4,7.8083,4,3.9029,4,7.8058c0,3.9056-4,3.9056-4,7.8112s4,3.9056,4,7.8112"
        />
      </svg>

      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        height={48}
        onClick={() => setAnimatedMode(2)}
        className={"hover-target"}
      >
        <g>
          <ellipse
            fill="var(--background)"
            stroke={animateMode === 2 ? "var(--secondary)" : "var(--primary)"}
            strokeMiterlimit={10}
            strokeWidth="1.25px"
            cx="25"
            cy="24.9858"
            rx="23.375"
            ry="23.3608"
          />
          <path
            stroke={animateMode === 2 ? "var(--secondary)" : "var(--primary)"}
            strokeMiterlimit={10}
            fill={animateMode === 2 ? "var(--secondary)" : "var(--primary)"}
            d="M25,48.5c-12.9097,0-23.375-10.459-23.375-23.3608S12.0903,1.7785,25,1.7785"
          />
        </g>
        <circle
          fill="var(--background)"
          stroke={animateMode === 2 ? "var(--secondary)" : "var(--primary)"}
          strokeMiterlimit={10}
          cx="25"
          cy="25"
          r="10.811"
        />
        <path
          stroke={animateMode === 2 ? "var(--secondary)" : "var(--primary)"}
          strokeMiterlimit={10}
          fill={animateMode === 2 ? "var(--secondary)" : "var(--primary)"}
          d="M25,14.189c5.9707,0,10.811,4.8402,10.811,10.811s-4.8402,10.811-10.811,10.811"
        />
      </svg>

      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        height={48}
        onClick={() => setAnimatedMode(3)}
        className={"hover-target"}
      >
        <defs></defs>
        <rect
          fill="none"
          stroke={animateMode === 3 ? "var(--secondary)" : "var(--primary)"}
          strokeMiterlimit={10}
          strokeWidth="3px"
          x="2.5"
          y="2.5"
          width="45"
          height="45"
        />
        <rect
          fill="none"
          stroke={animateMode === 3 ? "var(--secondary)" : "var(--primary)"}
          strokeMiterlimit={10}
          strokeWidth="3px"
          x="10.5"
          y="10.5"
          width="29"
          height="29"
        />
        <rect
          stroke={animateMode === 3 ? "var(--secondary)" : "var(--primary)"}
          strokeMiterlimit={10}
          fill={animateMode === 3 ? "var(--secondary)" : "var(--primary)"}
          strokeWidth="1.25px"
          x="17.625"
          y="17.625"
          width="14.75"
          height="14.75"
        />
      </svg>
    </div>
  );
};
export default Modes;
