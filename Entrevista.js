let mensaje = document.querySelector("#mensaje");
let guardar = document.querySelector("#guardar");
let lista = document.querySelector("#listaUl");
let boton = document.querySelector("#convertir");

guardar.addEventListener("click", (e) => {
  e.preventDefault();
  if (mensaje.value != "") {
    let mensajeLi = crearElemento(mensaje.value);
    lista.appendChild(mensajeLi).classList.add("aCapital");
  }
  mensaje.value = "";
});

function crearElemento(mensaje) {
  let li = document.createElement("li");
  let texto = document.createTextNode(mensaje);
  li.appendChild(texto);
  return li;
}

boton.addEventListener("click", () => {
  //convertidorMayus();
  let li = document.querySelectorAll(".aCapital");
  for (let index = 0; index < li.length; index++) {
    let textMessage = li[index].textContent;
    li[index].textContent = converter(textMessage);
  }
});

const convertidorMayus = () => {
  let li = document.querySelectorAll(".aCapital");
  console.log(li);
  for (let index = 0; index < li.length; index++) {
    li[index].classList.add("capital");
  }
};

const converter = (text) => {
  let separadas = text.split(" ");
  let nuevo = [];
  separadas.map((item) => {
    nuevo.push(item.charAt(0).toUpperCase() + item.slice(1));
  });
  return nuevo.join(" ");
};
