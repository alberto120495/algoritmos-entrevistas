const array = [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];
const findOdd = (arr) => {
  let resultado;
  let nuevoObjeto = {};
  array.forEach((element) => {
    if (nuevoObjeto[element]) {
      nuevoObjeto[element]++;
    } else {
      nuevoObjeto[element] = 1;
    }
  });

  for (const element in nuevoObjeto) {
    if (nuevoObjeto[element] % 2 !== 0) {
      resultado = element;
    }
  }
  return resultado;
};

console.log(findOdd(array));
