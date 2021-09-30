/*
Que son los callbacks?
Que entiendes del funcionamiento de los callbacks? (Referencia vs invocacion)
Que ejemplos de callbacks conoces
*/

let numeros = [1,2,3,4,5,6,7]

let numerosDobles = numeros.map((numero) => numero * 2);

let mayoresNueve = numerosDobles.filter(numero => numero > 9)

console.log(mayoresNueve);


//!Callback -> Funcion pasada como parametro de otra funcion

//Referencia vs  invocacion

//Referencia

function saludar(){
    console.log("Hola")
}

saludar //!Referencia
saludar()//!Invocacion

//Ejemplos de callback
// map, filter, reduce, etc