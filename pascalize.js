/*
Pascalize:
Construye un metodo que convierta un string de cualquier formato a PascalCase
Ejemplo:
"hey jude" -> "HeyJude"
"i-like-javaSCRIPT" -> "ILikeJavascript"
"software DEVeloPment IS my PAssIoN" ->"SoftwareDeveloptmentIsMyPassion"

 */
const Pascalize =(string) =>{
   let clearText = string.match(/[a-zA-Z0-9]+/g).map((word)=>{
  return  word[0].toUpperCase() + word.slice(1).toLowerCase()
  }).join("")
  
  return clearText
}

let textoUno = "hey jude"
let textoDos = "i-like-javaSCRIPT"
let textoTres = "software DEVeloPment IS my PAssIoN"


console.log(Pascalize(textoTres))