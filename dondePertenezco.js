/*
Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) una vez que éste haya sido ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5) debe devolver 1 por que este valor es más grande que 1 (índice 0), pero menor que 2 (índice 1).

De esta forma, getIndexToIns([20,3,5], 19) debe devolver 2 porque una vez ordenado el arreglo, éste se verá así [3,5,20] y 19 es menor que 20 (índice 2) y mayor que 5 (índice 1).


*/

function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let indice = 0;
  for (let index = 0; index < arr.length; index++) {
    if (num <= arr[index]) {
      indice = index;
      break;
    } else if (num > arr[arr.length - 1]) {
      indice = arr.length;
      break;
    }
  }
  return indice;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));

/*
devolver 2 
*/
