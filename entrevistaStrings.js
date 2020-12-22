/*
1. Dado un string cree una funcion reverse que invierta el orden de sus caracteres
Ejemplo:
"Hello World" = "dlrow olleh". No puede utilizarse desestructuracion ni recursion

2. Dado un string cree una funcion reverse que invierta el orden de sus caracteres. Debe de utilizar una  desestructuracion en el proceso

3.Dado un string, inviera el orden de sus caracteres recursivamente

4.Dado un string, inviera el orden de sus caracteres sin utilizar un nuevo string (Realice las modificaciones en el propio string)

5.Construya una funcion isPalindrome, la cual dado un string nos indique si es palindrome o no.

Ejemplo de palindomes: "Yo dono rosas, oro no doy"

6.-Invertir las palabras de una frase, pero cada palabra debe quedarse en el lugar

ejemplo :"Hello world" = "olleH dlrow"
*/

//1)
let myText = "hello world";
const reverse = (myText) => {
  let textReverse = "";
  for (const letra of myText) {
    textReverse = letra + textReverse;
  }
  return textReverse;
};

//console.log(reverse(myText));

//2) Desestructuracion
const reverse2 = (myText) => {
  return [...myText].reverse().join("");
};

//console.log(reverse2(myText));

//3) Recursivamente
const reverse3 = (myText) => {
  let myNewText;
  if (myText === "") {
    return "";
  }
  myNewText = myText.substring(1);
  return reverse3(myNewText) + myText[0];
};

//console.log(reverse3(myText));

//4) En JS los string son inmutables, no se pueden cambiar

//5) Palindrome
let text = "Yo dono rosas oro no doy";
const isPalindrome = (text) => {
  let textClear = text.split(" ").split(",").join("").toLowerCase();
  let reversa = reverse(textClear);
  return textClear === reversa;
};

//console.log(isPalindrome(text));

//6) Invertir palabras que quede en su lugar

const inverse4 = (text) => {
  let textoArray = text.split(" ");
  return textoArray.map((texto) => reverse(texto));
};

console.log(inverse4("hello world"));
