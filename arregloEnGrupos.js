function chunkArrayInGroups(arr, size) {
  let newArray = [];
  for (let index = 0; index < arr.length; index += size) {
    newArray.push(arr.slice(index, index + size));
  }
  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
