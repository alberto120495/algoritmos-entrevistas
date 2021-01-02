//Crear Nodo    [1, 3, 5, 8, 9]
class Nodo {
  constructor(data) {
    this.dato = data;
    this.siguiente = null;
  }
}

let nodo1 = new Nodo(1);
let nodo2 = new Nodo(3);
nodo1.siguiente = nodo2;
let nodoAux = new Nodo(5);
nodo1.siguiente.siguiente = nodoAux;

console.log(nodo1);
