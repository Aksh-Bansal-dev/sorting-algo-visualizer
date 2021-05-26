import React, { useEffect, useState } from "react";
import Lines from "./Lines";

const Homepage: React.FC = () => {
  const [start, setStart] = useState(false);
  const [arr, setArr] = useState(() => {
    let arr = [];
    for (let i = 20; i >= 10; i--) {
      arr.push({ val: i, sorted: false, selected: false });
    }
    return arr;
  });

  // set interval aur state

  useEffect(() => {
    if (start) {
      // setArr(() => {
      //   let newArr = [...arr];
      //   [newArr[0], newArr[1]] = [newArr[1], newArr[0]];
      //   console.log(newArr);
      //   return newArr;
      // });
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          setTimeout(() => {
            setArr((arr) => {
              const newArr = arr.slice();
              if (newArr[i].val > newArr[j].val) {
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
              }
              // console.log(newArr);
              return newArr;
            });
          }, 100 * (i * 10 + j));
        }
      }
      // setArr(newArr);
    }
  }, [start]);
  return (
    <div>
      <button onClick={() => setStart(!start)}>START</button>
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
