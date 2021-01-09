const array = [1, 2, 2, 3, 3, 3, 4];
/*
const numerosRepetidos = (array) => {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        contador++;
      }
    }
    debugger;
  }
  return contador;
};

console.log(numerosRepetidos(array));
*/

const numerosRepetidos = (array) => {
  let contador = 0;
  let objetoContador = {};
  array.forEach((element) => {
    if (objetoContador[element]) {
      objetoContador[element]++;
    } else {
      objetoContador[element] = 1;
    }
  });
  for (const element in objetoContador) {
    if (objetoContador[element] > 1) {
      contador++;
    }
  }
  return contador;
};

console.log(numerosRepetidos(array));
