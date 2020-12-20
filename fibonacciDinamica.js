const fib = (n) => {
  return fibDinamica(n, []);
};

const fibDinamica = (n, array) => {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (array[n] === undefined) {
    array[n] = fibDinamica(n - 1, array) + fibDinamica(n - 2, array);
  }
  return array[n];
}; 

console.log(fib(9));
