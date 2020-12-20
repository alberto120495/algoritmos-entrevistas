//!Contar caracteres de un texto y decir cuantas veces aparewce una letra

let texto = "hola mundo";
let sinEspacios = texto.replace(" ", "");
/*

let cantidadLetras = {};

for (let index = 0; index < sinEspacios.length; index++) {
  if (cantidadLetras[sinEspacios[index]] == undefined) {
    cantidadLetras[sinEspacios[index]] = 1;
  } else {
    cantidadLetras[sinEspacios[index]]++;
  }
}
console.log(cantidadLetras);
*/

//!ES   Usando Map ->Crea un nuevo arreglo
let miTexto = [...sinEspacios];
let cantidadLetras = {};

const cuentaLetra = (miTexto, objeto) => {
  if (objeto[miTexto] == undefined) {
    objeto[miTexto] = 1;
  } else {
    objeto[miTexto]++;
  }
};
/*
miTexto.map((letra) => {
  cuentaLetra(letra, cantidadLetras);
});

console.log(cantidadLetras);*/

//!Usando foreach ->No creo un nuevo arreglo
miTexto.forEach((letra) => {
  cuentaLetra(letra, cantidadLetras);
});

console.log(cantidadLetras);
