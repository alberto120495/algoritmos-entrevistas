let array = [1, 2, 5, 3, 2, 3, 4, 5, 1, 1, 6, 6, 7];
//Esperado = [1,2,3,4,5,6,7]

//let mySet = new Set(array);
//console.log(Array.from(mySet).sort());

const removeDuplicates = (array) => {
  let mySet = new Set(array);
  return Array.from(mySet).sort();
};

console.log(removeDuplicates(array));
