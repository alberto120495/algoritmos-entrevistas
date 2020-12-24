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

//console.log(quickSort(arr));
let array = [2, -1, 4, 5, 1, -7, 0, -14, 14];

//Sin espacio adicional - usar el primer elemento como pivot
const quickSort2 = (array, start, end) => {
  start = start ? start + 1 : 1;
  end = end ? end : array.length - 1;
  if (end - start <= 0) {
    return null;
  }
  let indexPivot = start - 1;
  let pivot = array[indexPivot];
  let original = [start - 1, end];

  while (start < end) {
    while (array[start] < pivot) {
      start++;
    }
    while (array[end] > pivot) {
      end--;
    }
    if (start < end) {
      intercambio(array, start, end);
    } else {
      intercambio(array, indexPivot, end);
    }
  }
  quickSort2(array, original[0], end);
  quickSort2(array, start, original[1]);

  return array;
};

const intercambio = (array, start, end) => {
  let aux = array[start];
  array[start] = array[end];
  array[end] = aux;
};

console.log(quickSort2(array));
