//!Problema entrevista Amazon
/*
Alice y Bob tienen barras de chocolate de diferetes tamaños:
A[i] es el tamaño de la i-esima barra de chocolate que tiene Alice
B[j] es el tamaño de la j-esima barra de chocolate que tiene Bob
Como son amigos, les gustaria intercambiar una barra de chocolate cada uno para que despues del intercambio, ambos tengan el mismo tamaño total de dulces
(La cantidad total de dulces que tienen una persona es la suma de los tamaños de las barras de chocolate que tiene)

Devuelve una matriz de numeros entereos donde ans[0] es el tamaño de la barra de chocolate que Alice debe intercambiar y ans[1] es el tamaño de la barra de chocolate que Bob debe intercambiar

Si hay varias respuestas, puede devolver cualquiera de ellas

Ejemplo:
 A = [7, 3, 2, 4];
 B = [6, 1, 5];

[7,5]
*/
let alice = [7, 3, 2, 4];
let bob = [6, 1, 5];
let totalSumA = totalSum(alice);
let totalSumB = totalSum(bob);
let diferencia = (totalSumA - totalSumB) / 2;

function totalSum(array) {
  let suma = 0;
  for (let index = 0; index < array.length; index++) {
    suma = suma + array[index];
  }
  return suma;
}

//Solucion O(A * B) - No eficiente
function encuentraIntercambiales(arrayA, arrayB, diff) {
  for (let indexA = 0; indexA < arrayA.length; indexA++) {
    for (let indexB = 0; indexB < arrayB.length; indexB++) {
      if (arrayA[indexA] - arrayB[indexB] == diff) {
        return [arrayA[indexA], arrayB[indexB]];
      }
    }
  }
}

//console.log(encuentraIntercambiales(alice, bob, diferencia));

//Solucion O(A) + O(B) - No eficiente
function encuentraIntercambiables2(arrayA, arrayB, diff) {
  let aElement = {};
  for (let indexA = 0; indexA < arrayA.length; indexA++) {
    aElement[arrayA[indexA]] = 1;
  }
  for (let indexB = 0; indexB < arrayB.length; indexB++) {
    if (aElement[diff + arrayB[indexB]] != undefined) {
      let aElementChange = diff + arrayB[indexB];
      let bElementChange = arrayB[indexB];
      return [aElementChange, bElementChange];
    }
  }
}

console.log(encuentraIntercambiables2(alice, bob, diferencia));
