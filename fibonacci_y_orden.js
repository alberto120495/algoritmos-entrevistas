//!Sucecion

let fib = [0, 1];

//?Mi solucion
/*
for (let index = 1; index < 9; index++) {
  fib.push(fib[index] + fib[index - 1]);
}
console.log(fib);
*/

//?ITERATIVO
/*
const fibIterative = (array, n) => {
    if(n == 0){
        return [0]
    }
  for (let index = 1; index < n; index++) {
    array.push(array[index] + array[index - 1]);
  }
  return array;
};

console.log(fibIterative(fib, 9));
*/

//?RECURSIVO
const fibRecursive = (n) => {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

console.log(fibRecursive(6));
