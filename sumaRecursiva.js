let array = [1, 4, 5, 2, 5];

//Suma con iteracion
let suma = 0;
for (let index = 1; index <= 6; index++) {
  suma = suma + index;
}

function sumRecA(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum = sum + array[index];
  }
  return sum;
}
//console.log(sumRecA(array));

//Suma recursiva
function sumaRec(n) {
  if (n <= 1) {
    return n;
  }
  return n + sumaRec(n - 1);
}

function sumaRecA(array) {
  if (array.length == 0) {
    return 0;
  }
  return array[0] + sumaRecA(array.slice(1));
}

console.log(sumaRecA(array));
