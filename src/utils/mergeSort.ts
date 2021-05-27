type arrType = {
  val: number;
  sorted: boolean;
  selected: boolean;
}[];

type setArrType = React.Dispatch<
  React.SetStateAction<
    {
      val: number;
      sorted: boolean;
      selected: boolean;
    }[]
  >
>;

export const mergeSort = (arr: arrType, setArr: setArrType) => {
  sort(arr, 0, arr.length - 1, setArr);

  setTimeout(() => {
    setArr((arr) => {
      let newArr = [...arr];
      for (let i = 0; i < arr.length; i++) {
        newArr[i].sorted = true;
      }
      return newArr;
    });
  }, 100 * time);
};

const sort = (arr: arrType, start: number, end: number, setArr: setArrType) => {
  if (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    sort(arr, start, mid, setArr);
    sort(arr, mid + 1, end, setArr);

    merge(arr, start, mid, end, setArr);
  }
};
let time = 1;
const merge = (
  arr: arrType,
  start: number,
  mid: number,
  end: number,
  setArr: setArrType
) => {
  setTimeout(() => {
    setArr((arr) => {
      let newArr = [...arr];
      for (let i = 0; i < arr.length; i++) {
        newArr[i].selected = false;
      }

      for (let i = start; i < end; i++) {
        newArr[i].selected = true;
      }
      let i = start;
      let j = mid + 1;
      let k = start;
      while (i < mid + 1 && j <= end) {
        if (arr[i].val > arr[j].val) {
          newArr[k++] = arr[j];
          j++;
        } else {
          newArr[k++] = arr[i];
          i++;
        }
      }
      while (i <= mid) {
        newArr[k++] = arr[i++];
      }

      while (j <= end) {
        newArr[k++] = arr[j++];
      }
      // console.log(start + " " + end);
      return newArr;
    });
  }, 100 * time++);
};
