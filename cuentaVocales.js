//Dado un string cuenta cuantas vocales aparece en ese texto

const cuentaVocales = (string) => {
  string = [...string];
  const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  string.forEach((element) => {
    if (vocales.hasOwnProperty(element)) {
      vocales[element]++;
    }
  });

  return vocales;
};

console.log(cuentaVocales("abc"));
