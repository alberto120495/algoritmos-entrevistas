const sumatoria = () => {
  let numero;
  let mayor = -1;

  do {
    numero = parseInt(prompt("Numero: "));
    if (numero > mayor) {
      mayor = numero;
    }
  } while (numero != 0);
  return mayor;
};

console.log(sumatoria());
