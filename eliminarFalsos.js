function bouncer(arr) {
  let newArray = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      newArray.push(arr[index]);
    }
  }
  return newArray;
}
