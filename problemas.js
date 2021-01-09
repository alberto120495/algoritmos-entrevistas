let arreglo = [1, 2, 3, 4, 5, 6, 7];

//!Busqueda binaria
const binarySearch = (arreglo, objetivo) => {
  let minimo = 0;
  let maximo = arreglo.length - 1;
  while (minimo <= maximo) {
    let puntoMedio = Math.floor((minimo + maximo) / 2);
    let intento = arreglo[puntoMedio];
    if (intento == objetivo) {
      return puntoMedio;
    } else if (intento > objetivo) {
      maximo = puntoMedio - 1;
    } else {
      minimo = puntoMedio + 1;
    }
  }
  return -1;
};
//console.log(binarySearch(arreglo, 1));

//!Invertir Arreglo
const inversor = (arreglo) => {
  let longitud = arreglo.length;
  for (let index = 0; index < longitud / 2; index++) {
    let temporal = arreglo[index];
    let ultimo = longitud - index - 1;
    arreglo[index] = arreglo[ultimo];
    arreglo[ultimo] = temporal;
  }
};
//inversor(arreglo);
//console.log(arreglo);

//!Ordenar Arreglo - Selection Sort
let arregloDesordenado = [5, 4, 7, 1, 2, 3, 6];

const ordenar = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    let min = i;
    for (let j = i + 1; j < arreglo.length; j++) {
      if (arreglo[j] < arreglo[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = arreglo[i];
      arreglo[i] = arreglo[min];
      arreglo[min] = tmp;
    }
  }
  return arreglo;
};
console.log(ordenar(arregloDesordenado));

//Sacar primera letra de una palabra dada, si no hay palabra, imprimir all done
const letras = (palabra) => {
  let arrPalabra = [...palabra];
  let letra;
  if (arrPalabra.length > 0) {
    letra = arrPalabra.shift();
    return letra;
  } else {
    console.log("all done");
  }
};

console.log(letras("zoe"));

function pyramid(numPisos) {
  for (let i = 0; i < numPisos; i++) {
    let piso = "";
    for (let j = 0; j < i + 1; j++) {
      piso = piso + "*";
    }
    console.log(piso);
  }
}

pyramid(5);
