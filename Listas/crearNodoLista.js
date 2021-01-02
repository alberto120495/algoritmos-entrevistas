//De array a lista [1, 3, 5, 8, 9]
//Para cada numero se debe crear un nodo, un nodo contiene un dato y un puntero

class Nodo {
  constructor(data) {
    this.dato = data;
    this.siguiente = null;
  }
}

let nodo = new Nodo(3);

console.log(nodo.dato);
console.log(nodo.siguiente);
