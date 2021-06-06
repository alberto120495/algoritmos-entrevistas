const lados = (numero) =>{
  let figura = '';
  for(let i = 0; i<numero; i++){
    figura+= '*'
  }
  return figura
}

const cuadrado = (numero) =>{
  let dibujo = '';
  //Parte superior
  dibujo+= lados(numero) + '\n'
  
  for(let i = 0; i<numero -2;i++){
    dibujo+='*'
    for(let i = 0; i<numero-2;i++){
      dibujo+=' '
    }
    dibujo+="*"+'\n'
  }
  //parte inferior
  dibujo+= lados(numero)
  return dibujo
}

console.log(cuadrado(5))
