type arrType = {
  val: number;
  sorted: boolean;
  selected: boolean;
  color: string;
}[];

type setArrType = React.Dispatch<
  React.SetStateAction<
    {
      val: number;
      sorted: boolean;
      selected: boolean;
      color: string;
    }[]
  >
>;

export const mergeSort = (arr: arrType, setArr: setArrType, speed: number) => {
  sort(arr, 0, arr.length - 1, setArr, speed);

  setTimeout(() => {
    setArr((arr) => {
      let newArr = [...arr];
      for (let i = 0; i < arr.length; i++) {
        // newArr[i].sorted = true;
        newArr[i].color = "var(--sorted)";
      }
      return newArr;
    });
  }, speed * 100 * time);
};

const sort = (
  arr: arrType,
  start: number,
  end: number,
  setArr: setArrType,
  speed: number
) => {
  if (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    sort(arr, start, mid, setArr, speed);
    sort(arr, mid + 1, end, setArr, speed);

    merge(arr, start, mid, end, setArr, speed);
  }
};
let time = 1;
const merge = (
  arr: arrType,
  start: number,
  mid: number,
  end: number,
  setArr: setArrType,
  speed: number
) => {
  setTimeout(() => {
    setArr((arr) => {
      let newArr = [...arr];
      for (let i = 0; i < arr.length; i++) {
        // newArr[i].selected = false;
        newArr[i].color = "var(--default)";
      }

      for (let i = start; i <= end; i++) {
        if (i <= mid) {
          newArr[i].color = "var(--selected1)";
        } else {
          newArr[i].color = "var(--selected2)";
        }
        // newArr[i].selected = true;
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
  }, speed * 100 * time++);
};
