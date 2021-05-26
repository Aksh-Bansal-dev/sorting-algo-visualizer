import React, { useEffect } from "react";

interface LinesProps {
  len: { val: number; selected: boolean; sorted: boolean };
}
const Lines: React.FC<LinesProps> = ({ len }) => {
  return (
    <span
      style={{
        minWidth: 5,
        background: len.sorted ? "teal" : len.selected ? "lightblue" : "coral",
        margin: 1,
        minHeight: len.val,
        padding: 2,
      }}
    >
      {len.val}
    </span>
  );
};

export default Lines;
