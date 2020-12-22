/*
Implementa una funcion twoSum, tal que dado un array de entero y un numero K,
devuelva los apres de numeros que suman K

Ejemplo: 
[0, 9, 7, 12, 5, 8, 3]
Los pares que suman 12 son:
[0,12]
[3,9]
[5,7]
*/

let array = [0, 9, 7, 12, 5, 8, 3];

//Orden O(n2) Mala forma
const twoSum = (array, suma) => {
  let pares = [];
  for (let index = 0; index < array.length; index++) {
    for (let index2 = index + 1; index2 < array.length; index2++) {
      if (array[index] + array[index2] == suma) {
        pares.push(array[index], array[index2]);
      }
    }
  }
  return pares;
};

//console.log(twoSum(array, 12));

/*
A + B = 12
A = 12 - B
*/

const twoSum2 = (array, suma) => {
  let pares = [];
  let guardarNumero = {};
  let numeroAuxiliar;
  for (let index = 0; index < array.length; index++) {
    if (guardarNumero[array[index]] != undefined) {
      pares.push([array[index], guardarNumero[array[index]]]);
    } else {
      numeroAuxiliar = suma - array[index];
      guardarNumero[numeroAuxiliar] = array[index];
    }
  }
  return pares;
};
//console.log(twoSum2(array, 12));

//Sin espacio auxiliar del objeto

const twoSum3 = (array, suma) => {
  let pares = [];
  let inicio = 0;
  let final = array.length - 1;
  let resultadoSuma;
  array.sort((a, b) => a - b);
  while (inicio < final) {
    resultadoSuma = array[inicio] + array[final];
    if (resultadoSuma == suma) {
      pares.push([array[inicio], array[final]]);
      inicio++;
      final--;
    } else if (resultadoSuma > suma) {
      final--;
    } else {
      inicio++;
    }
  }
  return pares;
};

console.log(twoSum3(array, 12));
