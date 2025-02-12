import React, { useState } from "react";
import "./Nav.css";

// Define the type for each segment
export interface Segment {
  label: string;
  value: string;
}

// Define the props for the component
export interface SegmentedControlProps {
  segments: Segment[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  segments,
  defaultValue,
  onChange,
}) => {
  // Initialize selected state using the default value or the first segment's value
  const [selected, setSelected] = useState<string>(
    defaultValue || segments[0].value
  );

  const handleSegmentClick = (value: string) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  // Find the index of the active segment for indicator positioning
  const activeIndex = segments.findIndex(
    (segment) => segment.value === selected
  );

  return (
    <div className="segmented-control">
      {segments.map((segment) => (
        <div
          key={segment.value}
          className={`segment ${segment.value === selected ? "active" : ""}`}
          onClick={() => handleSegmentClick(segment.value)}
        >
          {segment.label}
        </div>
      ))}
      <div
        className="active-indicator"
        style={{
          width: `${100 / segments.length}%`,
          left: `${(activeIndex * 100) / segments.length}%`,
        }}
      />
    </div>
  );
};

export default SegmentedControl;
