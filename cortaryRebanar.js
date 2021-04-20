/*
Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.
*/
function frankenSplice(arr1, arr2, n) {
  let valor = n;
  let nuevosValores = [];
  let arrDos = [...arr2];
  while (n > 0) {
    nuevosValores.push(arr2[n - 1]);
    n--;
  }
  for (let index = 0; index < valor; index++) {
    arrDos.shift();
  }

  return nuevosValores.reverse().concat(arr1).concat(arrDos);
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
