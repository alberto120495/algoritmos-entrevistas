 const solve = (array,texto) => {
  
  let index = 0
  let valor = array[index]
  let mensaje = ""
   
  
   while(valor != 0){
     mensaje += texto[index]
     index = valor
     valor = array[index]
    
  }
  mensaje+=texto[index]
  return mensaje
  
}


console.log(solve([3,2,0,1],"cdeo")) 