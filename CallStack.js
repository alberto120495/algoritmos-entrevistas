//!CallStack
//? Javascript es un lenguaje de programacion monoproceso
//? => Solamnete ejecuta una cosa a la vez
//? => Tiene un unico CallStack

//* CallStack => Es una estructura de datos que registra en que momento se encuentra
//* la ejecucion del programa. Guarda los scopes / contextos de ejecucion

function cuadrado(n) {
  let cuadrado = n * n;
  return cuadrado;
}

function printCuadrado(n) {
  debugger;
  let cuadradoValor = cuadrado(n);
  console.log(`El cuadrado de ${n} es ${cuadradoValor} `);
}

printCuadrado(8);

//?Anonymus
/**
 (()=>{
    printCuadrado(8)
 })()
 */
