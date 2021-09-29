//Hoisting -> Guarda en memoria la variable y funcion en tiempo de compilacion (Eleva al principio de todo)
//Ejemplos  de hoisting
//Como se relaciona con TDZ - Temporal Dead Zone
//Como evitarias tener errores con la TDZ

//Declaracion => Asignacion
//?Las declaraciones y funciones se colocan en memoria en tiempo de compilacion

var nombre = "Alberto";
const apellido = "Pimentel";
let edad;

function saludar(nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar("Alberto"));

console.log(nombre);

//!Scope
//Var tiene alcance de funcion
//Let y const tiene alcance de bloque {  } -> no coloca undefined en el hoisting

//!TDZ
//No se puede acceder a la variable antes de inicializar con let y const
//La zona muerta  es desde que inicia el ambito(scope) hasta que se asigna/ inicializa

//!Como evitar errores conla TDZ
//Mover la inicializacion al inicio del bloque
