//Estructura de datos Pilas
//Se agregan arriba y se sacan de arriba

//Agregar elemento - ENTRAR A LA PILA -> Ultimo en entrar, primero en salir (LIFO)

//Al inicio la pila esta vacia (null)

class Stack {
  constructor() {
    this.top = null;
    //this.length = 0;
  }
  //Funcion para revisar si esta el elemento en la pila
  hasElement(element) {
    let aux = this.top;
    while (aux !== null && aux.data !== element) {
      aux = aux.prev;
    }
    return aux !== null;
  }
  //Funcion para ingresar elementos a la pila
  push(element) {
    let node = new Node(element, this.top);
    this.top = node;
    //this.length++;
  }
  //Funcion para eliminar elementos de la pila
  pop() {
    if (this.top !== null) {
      let element = this.top;
      this.top = this.top.prev;
      //this.length--;
      return element;
    } else {
      return null;
    }
  }
  //Funcion que regresa el ultimo elemento de la pila
  peek() {
    return this.top;
  }
  //Funcion para verificar si la pila esta vacia
  isEmpty() {
    return this.top === null;
  }
  //Funcion para imprimir todos los elementos de la pila
  print() {
    let aux = this.top;
    while (aux !== null) {
      console.log(aux.data);
      aux = aux.prev;
    }
  }
  //Funcion que regresa el numero de elementos en la pila
  longitud() {
    let aux = this.top;
    let contador = 0;
    while (aux !== null) {
      contador++;
      aux = aux.prev;
    }
    return contador;
  }
}

//Clase para crear un nodo
class Node {
  constructor(element, prev) {
    this.data = element;
    this.prev = prev;
  }
}

let myStack = new Stack();

myStack.push(15); //Agregar un elemento al top de la PILA
myStack.push(20);
myStack.push(25);
myStack.push(30);
myStack.pop(); //Elimina el ultimo elemento de la PILA
console.log(myStack.peek()); //Ultimo elemento de la PILA
console.log(myStack.isEmpty()); //Checa si la PILA es vacia o no
console.log(myStack.print()); //Imprime todos los valores de la PILA

console.log(myStack.longitud()); //Regresa la cantidad de elementos de la PILA

console.log(myStack.hasElement(30)); //Regresa la cantidad de elementos de la PILA
