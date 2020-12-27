/*
1) Implemente un algoritmo capaz de combinar dos array ordenados, obteniendo un array ordenado

2) Analice el orden de su algoritmo

3)Implemente un algoritmo el cual dado un array cualquiera, lo ordene

4)Analice el orden de su algoritmo
*/

let array1 = [1, 2, 8, 10, 21];
let array2 = [3, 5, 7, 8, 9, 20];

function combinar(array1, array2) {
  let arregloCombinado = [];
  let elemento;
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      elemento = array1.shift();
    } else {
      elemento = array2.shift();
    }
    arregloCombinado.push(elemento);
  }
  arregloCombinado = arregloCombinado.concat(array1).concat(array2);
  return arregloCombinado;
}

console.log(combinar(array1, array2));
