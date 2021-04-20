function truncateString(str, num) {
  let textoCortado = str.slice(0, num);
  console.log(textoCortado);
  if (str.length > textoCortado.length) {
    return textoCortado + "...";
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
