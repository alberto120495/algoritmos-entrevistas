//Crear Nodo    [1, 4, 6, 8, 9]
class Nodo {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Lista {
  constructor() {
    this.head = null;
  }

  push(data) {
    let nodo = new Nodo(data);
    if (this.head === null) {
      this.head = nodo;
    } else {
      this.last.next = nodo;
    }
    this.last = nodo;
  }

  print() {
    let aux = this.head;
    while (aux !== null) {
      console.log(aux.data);
      aux = aux.next;
    }
  }

  longitud() {
    let aux = this.head;
    let contador = 0;
    while (aux !== null) {
      contador++;
      aux = aux.next;
    }
    console.log(contador);
  }
  getLastElement() {
    //console.log(this.last.data);
    let aux = this.head;
    while (aux !== null && aux.next !== null) {
      aux = aux.next;
    }
    console.log(aux.data);
  }
  getElementByIndex(index) {
    if (index < 0) return null;
    let aux = this.head;
    let actualIndex = 0;
    while (aux !== null && actualIndex !== index) {
      aux = aux.next;
      actualIndex++;
    }
    console.log(aux.data);
  }
  find(element) {
    let aux = this.head;
    while (aux !== null && aux.data !== element) {
      aux = aux.next;
    }
    console.log(aux.data);
  }
  delete(element) {
    let aux = this.head;
    if (aux == null) {
      return null;
    }
    //Cuando se elimina el primer elemento
    if (aux.data == element) {
      this.head = aux.next;
      return aux.data;
    }
    while (aux !== null && aux.next.data !== element) {
      aux = aux.next;
    }
    aux.next = aux.next.next;
  }
  deleteByNode(node) {
    node.data = nodo.next.data;
    node.next = node.next.next;
  }
}

let lista = new Lista();
lista.push(1);
lista.push(4);
lista.push(6);
lista.push(8);

lista.print();
lista.longitud();
lista.getLastElement();
lista.getElementByIndex(2);
lista.find(6);
lista.delete(6);
lista.print();
