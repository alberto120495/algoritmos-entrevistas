//!QuickSort
let arr = [5, -1, 4, 2, 1, -7, 0, -14, 14];

const quickSort = (arr) => {
  if (arr.length == 0) {
    return [];
  }
  let indiceMedio = Math.floor(arr.length / 2);
  let pivot = arr[indiceMedio];
  let leftArr = [];
  let rightArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (index != indiceMedio) {
      if (arr[index] > pivot) {
        rightArr.push(arr[index]);
      } else {
        leftArr.push(arr[index]);
      }
    }
  }
  leftArr = quickSort(leftArr);
  rightArr = quickSort(rightArr);
  return leftArr.concat(pivot).concat(rightArr);
};

console.log(quickSort(arr));
