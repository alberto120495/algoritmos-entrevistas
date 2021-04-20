function repeatStringNumTimes(str, num) {
  let nueva = [];
  if (num > 0) {
    for (let index = 0; index < num; index++) {
      nueva.push(str);
    }
    return nueva.join("");
  } else {
    return "";
  }
}

//Segunda Opcion
/*
function repeatStringNumTimes(string, times) {
  let repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);

*/

console.log(repeatStringNumTimes("abc", 3));
