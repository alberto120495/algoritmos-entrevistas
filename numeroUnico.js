let arr = [1, 3, 1, 5, 3];
let arr2 = [7, 4, 3, 88, 4, 88, 3];
let arr3 = [3, 3, 23, 65, 23, 4, 65];

//Solucion con objetos
const numeroUnico = (array) => {
  const cuentaNumero = {};
  for (const number of array) {
    cuentaNumero[number] = cuentaNumero[number] + 1 || 1;
  }

  for (const numero in cuentaNumero) {
    if (cuentaNumero[numero] == 1) {
      return numero;
    }
  }
};

console.log(numeroUnico(arr3));

//Solucion con conjuntos
const numeroUnico2 = (array) => {
  let cuentaNumero = new Set();
  for (let number of array) {
    if (cuentaNumero.has(number)) {
      cuentaNumero.delete(number);
    } else {
      cuentaNumero.add(number);
    }
  }
  return Array.from(cuentaNumero)[0];
};

//Solucion con operacion XOR
/*
mismoNumero ^ mismoNumero = 0
numero ^ 0 = numero
0 ^ numero = numero
*/
const numeroUnico3 = (array) => {
  let result = 0;
  for (const numero of array) {
    result = result ^ numero;
  }
  return result;
};
