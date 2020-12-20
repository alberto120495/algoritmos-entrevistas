const arreglo = [1, 2, 3, 4, 5];

const busquedaBinaria = (arreglo, objetivo) => {
  let izquierda = 0;
  let derecha = arreglo.length - 1;

  while (izquierda <= derecha) {
    let puntoMedio = Math.floor((izquierda + derecha) / 2);
    let intento = arreglo[puntoMedio];
    if (intento == objetivo) {
      return puntoMedio;
    } else if (intento > objetivo) {
      derecha = puntoMedio - 1;
    } else {
      izquierda = puntoMedio + 1;
    }
  }
  return -1;
};

console.log(busquedaBinaria(arreglo, 1));
