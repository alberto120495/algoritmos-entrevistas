let array = [15, 10, 30, 8, 0, 5, 5, 3, 2, 11];

/*
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
  for (let index2 = index + 1; index2 < index; index2++) {
    console.log(array[index2]);
  }
}
*/

/*
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
  for (let index2 = index + 1; index2 < array.length; index2++) {
    console.log(array[index2]);
  }
}
*/

for (let index = 9; index >= 0; index--) {
  console.log(array[index]);
  for (let index2 = index - 1; index2 >= 0; index2--) {
    console.log(array[index2]);
  }
}
