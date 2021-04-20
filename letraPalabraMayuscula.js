/*
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.
*/
function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  console.log(str);
  for (let index = 0; index < str.length; index++) {
    str[index] = str[index].charAt(0).toUpperCase() + str[index].slice(1);
  }
  return str.join(" ");
}
