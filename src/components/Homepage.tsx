import produce from "immer";
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

  const [looper, setLooper] = useState<NodeJS.Timeout | undefined>();
  useEffect(() => {
    if (start) {
      let i = 0;
      let j = 0;
      setLooper(
        setInterval(() => {
          if (!start) {
            clearInterval(looper!);
            setLooper(undefined);
          }
          console.log("loopint");
          //   if (j != 0) {
          // const selArr2 = produce(arr, (draftArr) => {
          //   draftArr[j - 1].selected = false;
          // });
          // setArr(selArr2);
          //   }
          const selArr1 = produce(arr, (draftArr) => {
            console.log(i + " --" + j);
            draftArr[j].selected = true;
          });
          setArr(selArr1);

          if (arr[i].val > arr[j].val) {
            // console.log(i + " " + j);
            const newArr = produce(arr, (draftArr) => {
              [draftArr[i], draftArr[j]] = [arr[j], arr[i]];
            });
            setArr(newArr);
          }

          j = j + 1;
          if (j == arr.length) {
            const sortArr = produce(arr, (draftArr) => {
              console.log(i + " nono " + j);
              draftArr[i].sorted = true;
            });
            setArr(sortArr);
            j = i + 1;
            i = i + 1;
          }
          if (i == arr.length - 1) {
            setStart(false);
          }
        }, 1000)
      );
    } else {
      clearInterval(looper!);
      setLooper(undefined);
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
