const isSquare = (numb) => {
  let raiz = Math.sqrt(numb);
  return raiz * raiz === numb;
};

console.log(isSquare(9));
