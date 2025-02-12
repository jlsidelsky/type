import React, { useState, useEffect } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    // Function to update cursor position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Functions to handle hover state
    const handleMouseEnter = () => setCursorHover(true);
    const handleMouseLeave = () => setCursorHover(false);

    // Function to add event listeners to hover elements
    const updateHoverTargets = () => {
      const hoverElements = document.querySelectorAll(".hover-target");
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        hoverElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    };

    // Initial setup
    updateHoverTargets();
    window.addEventListener("mousemove", updatePosition);

    // Observe DOM changes to dynamically update hover targets
    const observer = new MutationObserver(updateHoverTargets);
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      observer.disconnect(); // Stop observing changes
      updateHoverTargets(); // Remove old event listeners
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: cursorHover ? "20px" : "32px",
        height: cursorHover ? "20px" : "32px",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s ease, height 0.2s ease",
        zIndex: 1000,
      }}
    >
      <svg
        width={cursorHover ? 20 : 32}
        height={cursorHover ? 20 : 32}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
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
          fill={cursorHover ? "rgba(165,42,42,0.5)" : "rgb(165,42,42)"}
          stroke={cursorHover ? "rgb(165,42,42)" : "none"}
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
