//!Sub Array Problem
let array = [3, -1, -1, -2, 5, -2, -1, 3, 1];
let index = 0;
let maxSum = 0;
let actualSum = 0;
let indexFrom;
let indexTo;
let auxIndexFrom;

while (index < array.length) {
  if (actualSum <= 0) {
    indexFrom = index;
    indexTo = index;
    actualSum = 0;
    auxIndexFrom = index;
  }
  actualSum = actualSum + array[index];
  if (actualSum > maxSum) {
    maxSum = actualSum;
    indexFrom = auxIndexFrom;
    indexTo = index;
  }
  index++;
}

console.log([indexFrom, indexTo]);
