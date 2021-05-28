export const genRandomArr = (maxLen: number) => {
  let arr = [];
  for (let i = 1; i < maxLen; i++) {
    arr.push({
      val: Math.floor(Math.random() * 100),
      sorted: false,
      selected: false,
      color: "var(--default)",
    });
  }
  return arr;
};
