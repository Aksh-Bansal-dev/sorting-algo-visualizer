import React, { useEffect, useState } from "react";
import { bucketSort } from "../utils/bucketSort";
import { genRandomArr } from "../utils/genRandomArr";
import { mergeSort } from "../utils/mergeSort";
import Lines from "./Lines";

const Homepage: React.FC = () => {
  const [start, setStart] = useState(false);
  const [maxLen, setMaxLen] = useState(90);
  const [arr, setArr] = useState(genRandomArr(maxLen));
  const [speed, setSpeed] = useState(1);
  const [algo, setAlgo] = useState("bucket");
  const resetAll = () => {
    window.location.reload();
  };

  const handleSpeed = (op: number) => {
    if (op === 1 && speed < 2) {
      setSpeed(speed + 1);
    }
    if (op === -1 && speed > 1) {
      setSpeed(speed - 1);
    }
  };

  useEffect(() => {
    if (start) {
      if (algo === "bucket") {
        bucketSort(arr, setArr, speed);
      } else {
        mergeSort(arr, setArr, speed);
      }
      // console.log(arr);
    }
    if (!start && maxLen !== arr.length) {
      setArr(genRandomArr(maxLen));
    }
  }, [start, maxLen]);
  return (
    <div>
      <button onClick={() => setStart(true)}>START</button>
      <input
        type="number"
        name="maxLen"
        id="maxLen"
        value={maxLen}
        onChange={(e) => setMaxLen(parseInt(e.target.value))}
      />
      <select
        name="algo"
        id="algo"
        value={algo}
        onChange={(e) => setAlgo(e.target.value)}
      >
        <option value="bucket">Selection Sort</option>
        <option value="merge">Merge Sort</option>
      </select>
      <button onClick={resetAll}>Restart</button>
      <button onClick={() => handleSpeed(1)}>Slow</button>
      <span>{3 - speed}</span>
      <button onClick={() => handleSpeed(-1)}>Fast</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {arr.map((e, key) => (
          <Lines key={key} len={e} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
