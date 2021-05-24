/*
Escribir una funcion que tome un arreglo de strings
y retorne un arreglo de string solo con las direcciones necesarias.
Recuerda que las direcciones se eliminan: W-E, S-N y viceversa

Ejemplos(Casos de prueba)
["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"] -> ["WEST"]
["NORTH","SOUTH","EAST","WEST"] -> []
*/

const dirReduc = (arr) =>{
  const dirCounter = arr.reduce((accum,direction)=>{
    accum[`${direction}`]++
    return accum
  }, {NORTH:0,SOUTH:0, EAST:0, WEST:0})
  return objDirToArray(dirCounter)
}

const objDirToArray = (dirCounter) =>{
  const x = dirCounter["EAST"] - dirCounter["WEST"]
  const y = dirCounter["NORTH"] - dirCounter["SOUTH"]
  
  
  
  xArray = Array(Math.abs(x)).fill(x>0 ? "EAST" : "WEST")
  yArray = Array(Math.abs(y)).fill(y>0 ? "NORTH" : "SOUTH")
  
 return xArray.concat(yArray)
  
}

let casoUno = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"];
let casoDos = ["NORTH","SOUTH","EAST","WEST"]

console.log(dirReduc(casoDos))