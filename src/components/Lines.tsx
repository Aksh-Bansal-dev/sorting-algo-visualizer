import React from "react";

interface LinesProps {
  len: { val: number; selected: boolean; sorted: boolean; color: string };
}
const Lines: React.FC<LinesProps> = ({ len }) => {
  return (
    <span
      style={{
        width: 6,
        // background: len.sorted ? "teal" : len.selected ? "lightblue" : "coral",
        background: len.color,
        margin: 1,
        height: 20 + 3 * len.val,
        padding: 2,
      }}
    ></span>
  );
};

export default Lines;
