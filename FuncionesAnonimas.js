//¿Que es una funcion anonima?
//¿Cual es la diferencia con las funciones clasicas?
//¿Les encuentras alguna desventaja? ¿Cuando la usarias?

//Funcion tradicional
function saludar(name) {
  return `Hola ${name}`;
}

//?Funcion Anonima - Funcion que no tiene nombre
(function (name, surname) {
  console.log(`${name} ${surname}`);
})("Alberto", "Pimentel");

/*
Diferencias:
- No tiene nombre
- Se puede autoinvocar
- Solo se accede cuando se define (se puede guardar en una variable)
- Problemas con el Hoisting cuando se guardar en variable 
*/


/*
Desventaja:
-Puede llegar a confundir con arrow function, que es otra cosa diferente.
*/

/*
Cuando las usarias.
Cuando inicia la aplicacion y necesitas que se ejecute la funcion una sola vez
Cuando usas callbacks
*/