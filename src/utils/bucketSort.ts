export const bucketSort = (
  arr: {
    val: number;
    sorted: boolean;
    selected: boolean;
    color: string;
  }[],
  setArr: React.Dispatch<
    React.SetStateAction<
      {
        val: number;
        sorted: boolean;
        selected: boolean;
        color: string;
      }[]
    >
  >,
  speed: number
) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      setTimeout(() => {
        setArr((arr) => {
          const newArr = arr.slice();
          if (j > 0) {
            // newArr[j - 1] = { ...newArr[j - 1], selected: false };
            newArr[j - 1] = { ...newArr[j - 1], color: "var(--default)" };
          }
          // newArr[j] = { ...newArr[j], selected: true };
          newArr[j] = { ...newArr[j], color: "var(--selected)" };
          if (newArr[i].val > newArr[j].val) {
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
          }
          if (j === arr.length - 1) {
            // newArr[i] = { ...newArr[i], sorted: true };
            newArr[i] = { ...newArr[i], color: "var(--sorted)" };
          }
          // console.log(newArr);
          return newArr;
        });
      }, speed * 20 * (i * arr.length + j));
    }
  }
  setTimeout(() => {
    setArr((arr) => {
      const newArr = arr.slice();
      newArr[arr.length - 1] = { ...newArr[arr.length - 1], sorted: true };
      return newArr;
    });
  }, speed * 20 * arr.length * arr.length);
  // setArr(newArr);
};
