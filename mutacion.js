/*
Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.
*/

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();

  for (let index = 0; index < test.length; index++) {
    if (target.indexOf(test[index]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
