//!El problema de las monedas - Algoritmo de greedy - Algoritmos voraces - Programación
//?Dada la lista de monedas, debes pagar exactamente $96. Se pueden repetir las monedas

let monedas = [1, 2, 5, 10, 20, 50];
let dineroAPagar = 96;
let monedasElegidas = [];

let indice = monedas.length - 1;

while (dineroAPagar > 0) {
  let pago = dineroAPagar - monedas[indice];
  if (pago >= 0) {
    monedasElegidas.push(monedas[indice]);
    dineroAPagar = pago;
  } else {
    indice--;
  }
}
  
console.log(monedasElegidas);
