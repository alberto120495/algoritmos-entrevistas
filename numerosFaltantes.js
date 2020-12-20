//!Encontrar numero faltante en un arreglo
//let array = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10];

const findMissing = (array) => {
  let index = 0;
  while (index < array.length) {
    if (array[index + 1] == array[index] + 1) {
      index++;
    } else {
      return array[index] + 1;
    }
  }
};
//console.log(findMissing(array));

//!Encuentra todos los numeros que faltan en el arreglo
let array = [0, 1, 2, 4, 5, 8, 10];

const findAllMissing = (array) => {
  let index = 0;
  let numerosFaltantes = [];
  let lastNumberChecked = array[0];
  while (index < array.length - 1) {
    if (lastNumberChecked + 1 == array[index + 1]) {
      index++;
    } else {
      numerosFaltantes.push(lastNumberChecked + 1);
    }
    lastNumberChecked++;
  }
  return numerosFaltantes;
};

console.log(findAllMissing(array));
